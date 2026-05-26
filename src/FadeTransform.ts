import Deferred from './Deferred';

export type FadeOptions = {
  disableIn?: boolean;
  disableOut?: boolean;
  duration?: number;
};

const easeOutCubic = (t: number, b: number, c: number, d: number) => {
  const normalized = t / d - 1;
  return c * (normalized * normalized * normalized + 1) + b;
};

export default class FadeTransform extends TransformStream<VideoFrame, VideoFrame> {
  setDisableFadeOut: (value?: boolean) => void;

  setDisableFadeIn: (value?: boolean) => void;

  constructor({ disableIn, disableOut, duration: fadeDuration = 200 }: FadeOptions = {}) {
    let deferred: Deferred | undefined;
    let last: VideoFrame | undefined;
    let ctx: OffscreenCanvasRenderingContext2D | null = null;
    let init: VideoFrameInit | undefined;
    let disableFadeIn = disableIn;
    let disableFadeOut = disableOut;
    const initialize = (chunk: VideoFrame): void => {
      if (!ctx) {
        const width = chunk.displayWidth || chunk.codedWidth;
        const height = chunk.displayHeight || chunk.codedHeight;
        const offscreen = new OffscreenCanvas(width, height);
        ctx = offscreen.getContext('2d');
      }
      const { displayWidth, displayHeight, visibleRect, duration, timestamp } = chunk;
      init = {
        displayWidth,
        displayHeight,
        visibleRect: visibleRect ?? undefined,
        duration: duration ?? undefined,
        timestamp: timestamp ?? 0,
      };
    };
    super({
      transform(chunk, controller) {
        if (!disableFadeOut) {
          last?.close();
          last = chunk.clone();
        }
        const timestamp = chunk.timestamp ?? 0;
        if (!disableFadeIn && timestamp / 1000 < fadeDuration) {
          if (!ctx || !init) initialize(chunk);
          if (ctx && init) {
            const brightness = easeOutCubic(timestamp / 1000, 0, 100, fadeDuration);
            ctx.filter = `brightness(${brightness}%)`;
            ctx.drawImage(chunk, 0, 0);
            chunk.close();
            const frame = new VideoFrame(ctx.canvas as unknown as ImageBitmap, {
              ...init,
              timestamp,
            });
            controller.enqueue(frame);
            return;
          }
        }
        controller.enqueue(chunk);
      },
      flush: async (controller) => {
        if (last && last.timestamp && !disableFadeOut) {
          if (!ctx || !init) initialize(last);
          if (ctx && init) {
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
                fadeDuration,
              );
              context.filter = `brightness(${brightness}%)`;
              context.drawImage(orig, 0, 0);
              const frame = new VideoFrame(context.canvas as unknown as ImageBitmap, {
                ...init,
                timestamp: start + time * 1000,
              });
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
    this.setDisableFadeIn = (value?: boolean) => {
      disableFadeIn = value;
    };
  }
}
