import Deferred from './Deferred';

export type FadeOptions = {
  disableIn?: boolean;
  disableOut?: boolean;
  duration?: number;
};

// eslint-disable-next-line no-return-assign
const easeOutCubic = (t: number, b: number, c: number, d: number) =>
  // eslint-disable-next-line no-param-reassign
  c * ((t = t / d - 1) * t * t + 1) + b;

export default class FadeTransform extends TransformStream<VideoFrame, VideoFrame> {
  setDisableFadeOut: (value?: boolean) => void;

  constructor({ disableIn, disableOut, duration: fadeDuration = 200 } = {} as FadeOptions) {
    let deferred: Deferred | undefined;
    let last: VideoFrame | undefined;
    let ctx: OffscreenCanvasRenderingContext2D | null = null;
    let init: VideoFrameInit = {};
    let disableFadeOut = disableOut;
    const initialize = (chunk: VideoFrame): void => {
      if (!ctx) {
        const offscreen = new OffscreenCanvas(chunk.displayWidth, chunk.displayHeight);
        ctx = offscreen.getContext('2d');
      }
      if (!init) {
        const { displayWidth, displayHeight, visibleRect, duration, timestamp } = chunk;
        init = {
          displayWidth,
          displayHeight,
          visibleRect: visibleRect ?? undefined,
          duration: duration ?? undefined,
          timestamp: timestamp ?? undefined,
        };
      }
    };
    super({
      transform(chunk, controller) {
        if (!disableFadeOut) {
          last?.close();
          last = chunk.clone();
        }
        const timestamp = chunk.timestamp ? chunk.timestamp : 0;
        if (!disableIn && timestamp / 1000 < fadeDuration) {
          if (!ctx) initialize(chunk);
          if (ctx) {
            const brightness = easeOutCubic(timestamp / 1000, 0, 100, fadeDuration);
            ctx.filter = `brightness(${brightness}%)`;
            ctx.drawImage(chunk, 0, 0);
            chunk.close();
            init.timestamp = timestamp;
            const frame = new VideoFrame(ctx.canvas as unknown as ImageBitmap, init);
            controller.enqueue(frame);
            return;
          }
        }
        controller.enqueue(chunk);
      },
      flush: async controller => {
        if (last && last.timestamp && !disableFadeOut) {
          if (!ctx) initialize(last);
          if (ctx) {
            deferred = new Deferred();
            const context = ctx;
            const orig = last;
            const { timestamp: start } = last;
            const duration = last.duration ? last.duration / 1000 : 33;
            const fadeOut = (time: number) => {
              const brightness = easeOutCubic(
                Math.max(0, fadeDuration - time),
                0,
                100,
                fadeDuration
              );
              context.filter = `brightness(${brightness}%)`;
              context.drawImage(orig, 0, 0);
              init.timestamp = start + time * 1000;
              const frame = new VideoFrame(context.canvas as unknown as ImageBitmap, init);
              controller.enqueue(frame);
              const next = time + duration;
              if (next > fadeDuration) {
                orig.close();
                deferred?.resolve();
              } else setTimeout(() => fadeOut(next), 0);
            };
            fadeOut(duration);
          }
        }
        await deferred?.promise;
      },
    });
    this.setDisableFadeOut = (value?: boolean) => {
      disableFadeOut = value;
      if (disableFadeOut) {
        last?.close();
        last = undefined;
      }
    };
  }
}
