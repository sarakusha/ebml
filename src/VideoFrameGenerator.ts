import Semaphore from './Semaphore';

const MAX_PRELOAD_FRAMES = 10;

export default class VideoFrameGenerator implements TransformStream<EncodedVideoChunk, VideoFrame> {
  readonly readable: ReadableStream<VideoFrame>;

  readonly writable: WritableStream<EncodedVideoChunk>;

  constructor(
    readonly config: Promise<VideoDecoderConfig>,
    maxPreloadFrames: number = MAX_PRELOAD_FRAMES,
  ) {
    const pendingFrames: VideoFrame[] = [];
    const capacity = new Semaphore(maxPreloadFrames);
    let readableController: ReadableStreamDefaultController<VideoFrame> | undefined;
    let decoder: VideoDecoder | undefined;
    let finished = false;
    let acceptChunks = true;

    const getErrorMessage = (err: unknown): string =>
      err instanceof Error ? err.message : String(err);

    const reportRecoverableError = (message: string, err: unknown, recover = false) => {
      const errorMessage = getErrorMessage(err);
      const payload: { debug: string; recoverableError?: { message: string } } = {
        debug: `${message}: ${errorMessage}`,
      };
      if (recover) payload.recoverableError = { message: errorMessage };
      postMessage(payload);
    };

    const closeDecoder = () => {
      if (decoder && decoder.state !== 'closed') decoder.close();
    };

    const clear = () => {
      pendingFrames.splice(0).forEach((frame) => frame.close());
      capacity.purge();
    };

    const drain = () => {
      if (!readableController) return;
      while (pendingFrames.length > 0 && (readableController.desiredSize ?? 0) > 0) {
        const frame = pendingFrames.shift();
        if (frame) {
          readableController.enqueue(frame);
          capacity.release();
        }
      }
      if (finished && pendingFrames.length === 0) {
        readableController.close();
        readableController = undefined;
      }
    };

    const finish = () => {
      acceptChunks = false;
      closeDecoder();
      finished = true;
      drain();
    };

    const fail = (reason: unknown) => {
      clear();
      closeDecoder();
      readableController?.error(reason);
      readableController = undefined;
    };

    this.readable = new ReadableStream<VideoFrame>(
      {
        start: (controller) => {
          readableController = controller;
        },
        pull: () => {
          drain();
        },
        cancel: (reason) => {
          fail(reason);
        },
      },
      new CountQueuingStrategy({ highWaterMark: 1 }),
    );
    this.writable = new WritableStream({
      start: async (controller) => {
        decoder = new VideoDecoder({
          output: (frame) => {
            pendingFrames.push(frame);
            drain();
          },
          error: (err) => {
            console.error('error while decode', err);
            reportRecoverableError('recoverable decoder error, ending video source', err, true);
            controller.error(err);
            finish();
          },
        });
        try {
          decoder.configure(await this.config);
        } catch (err) {
          controller.error(err);
          fail(err);
          console.error('error while configure', err);
        }
      },
      write: async (chunk) => {
        try {
          if (!acceptChunks) return;
          await capacity.acquire();
          if (!decoder || decoder.state === 'closed') {
            capacity.release();
            return;
          }
          decoder.decode(chunk);
        } catch (e) {
          if (decoder?.state !== 'closed') {
            console.error('error while decode chunk', e);
            reportRecoverableError('dropping encoded video chunk after decode error', e);
            capacity.release();
          }
        }
      },
      close: async () => {
        try {
          await decoder?.flush();
          finish();
        } catch (err) {
          console.error('error while flush decoder', err);
          reportRecoverableError('recoverable decoder flush error, ending video source', err);
          finish();
        }
      },
      abort: (reason) => {
        fail(reason);
      },
    });
  }
}
