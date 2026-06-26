import Deferred from './Deferred';
import { delay } from './tools';

type ValveState = 'dry' | 'open' | 'closed';

const JITTER = 1000 / 60;

const nextTick = (ms: number): number => Math.ceil(ms / 1000) * 1000 - ms;

export default class ReducingValve extends TransformStream<VideoFrame, VideoFrame> {
  #baseTime = 0;

  #closeTime = 0;

  #state: ValveState = 'dry';

  #deferred?: Deferred;

  #timer = 0;

  #dropped = 0;

  #frames = 0;

  readonly id: string = Date.now().toString(16).slice(-6);

  get state(): ValveState {
    return this.#state;
  }

  protected set state(value) {
    const prev = this.#state;
    if (prev !== value) {
      this.#state = value;
      switch (value) {
        case 'open':
          if (prev === 'closed') {
            this.#baseTime += performance.now() - this.#closeTime;
            this.#closeTime = 0;
            if (this.#deferred) {
              this.#deferred.resolve();
              this.#deferred = undefined;
            }
          }
          break;
        case 'closed':
          clearTimeout(this.#timer);
          if (this.#baseTime) this.#closeTime = performance.now();
          if (this.#deferred) this.#deferred.resolve();
          this.#deferred = new Deferred();
          break;
        default:
          break;
      }
      postMessage({
        state: value,
        prev,
      });
    }
  }

  constructor(closed?: boolean) {
    let total = 0;
    super(
      {
        transform: async (frame, controller): Promise<void> => {
          this.#frames += 1;
          try {
            if (this.#deferred) await this.#deferred.promise;
            const { mediaTime } = this;
            const { timestamp } = frame;
            if (timestamp == null) {
              console.warn(`ReducingValve#${this.id} empty timestamp, frame: ${this.#frames - 1}`);
              frame.close();
              // controller.enqueue(frame);
              return;
            }
            const frameDelay = mediaTime - timestamp / 1000;
            if (frameDelay > JITTER) {
              const frameNo = this.#frames - 1;
              this.#dropped += 1;
              postMessage({ drop: frameNo, frameDelay });
              frame.close();
              return;
            }
            const timeUntilNextFrame = this.calculateTimeUntilNextFrame(timestamp);
            if (timeUntilNextFrame) await delay(timeUntilNextFrame);
            controller.enqueue(frame);
            total += 1;
          } catch (err) {
            controller.error(err);
            console.error(`ReducingValve#${this.id} error: ${err}`);
            frame.close();
          }
        },
        flush: () => {
          clearTimeout(this.#timer);
          console.info(
            `!ReducingValve#${this.id}:flush, frames: ${this.#frames}, dropped: ${this.#dropped}(${(
              (100 * this.#dropped) /
              (this.#frames || 1)
            ).toFixed(3)}%), outputs: ${total}`,
          );
          postMessage({ frames: this.#frames, dropped: this.#dropped });
        },
      },
      new CountQueuingStrategy({ highWaterMark: 1 }),
    );
    if (closed) this.close();
  }

  close = (): void => {
    this.state = 'closed';
  };

  open = (): void => {
    this.state = 'open';
  };

  protected get mediaTime(): number {
    if (!this.#baseTime) {
      this.state = 'open';
      this.#baseTime = performance.now();
      return 0;
    }
    return performance.now() - this.#baseTime;
  }

  private timerTick = (): void => {
    const { mediaTime } = this;
    const timer = mediaTime / 1000;
    postMessage({
      timer,
      dropped: this.#dropped,
    });
    // this.#timer = window.setTimeout(this.timerTick, nextTick(mediaTime + 1));
  };

  protected calculateTimeUntilNextFrame = (timestamp: number): number => {
    const { mediaTime } = this;
    clearTimeout(this.#timer);
    this.#timer = setTimeout(this.timerTick, nextTick(mediaTime)) as unknown as number;
    return Math.max(0, timestamp / 1000 - mediaTime);
  };
}
