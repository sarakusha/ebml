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
            controller.error(err);
            fail(err);
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
      write: async (chunk, controller) => {
        try {
          await capacity.acquire();
          if (!decoder || decoder.state === 'closed') {
            controller.error(new Error('VideoDecoder is closed.'));
            return;
          }
          decoder.decode(chunk);
        } catch (e) {
          if (decoder?.state !== 'closed') {
            console.error('error while decode chunk', e);
            controller.error(e);
          }
        }
      },
      close: async () => {
        try {
          await decoder?.flush();
          closeDecoder();
          finished = true;
          drain();
        } catch (err) {
          fail(err);
        }
      },
      abort: (reason) => {
        fail(reason);
      },
    });
  }
}
