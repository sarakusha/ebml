import Semaphore from './Semaphore';

const MAX_PRELOAD_FRAMES = 10;

export default class VideoFrameGenerator implements TransformStream<EncodedVideoChunk, VideoFrame> {
  readonly readable: ReadableStream<VideoFrame>;

  readonly writable: WritableStream<EncodedVideoChunk>;

  constructor(readonly config: Promise<VideoDecoderConfig>, maxPreloadFrames = MAX_PRELOAD_FRAMES) {
    const pendingFrames: VideoFrame[] = [];
    const push = new Semaphore(maxPreloadFrames);
    const pull = new Semaphore(0);
    let decoder: VideoDecoder;
    let cancel: unknown;
    let abort: unknown;
    let finished = false;
    let clearing = false;
    const clear = () => {
      clearing = true;
      pendingFrames.splice(0).forEach(frame => frame.close());
      push.purge();
      pull.purge();
    };
    this.readable = new ReadableStream<VideoFrame>(
      {
        pull: async controller => {
          if (abort || (finished && pendingFrames.length === 0)) controller.close();
          else {
            try {
              await pull.acquire();
              controller.enqueue(pendingFrames.shift());
              push.release();
            } catch (e) {
              controller.error(e);
            }
          }
        },
        cancel: reason => {
          cancel = reason;
          clear();
        },
      },
      new CountQueuingStrategy({ highWaterMark: 1 })
    );
    this.writable = new WritableStream({
      start: async controller => {
        decoder = new VideoDecoder({
          output: async frame => {
            pendingFrames.push(frame);
            pull.release();
          },
          error: err => {
            console.error('error while decode', err);
            controller.error(err);
          },
        });
        try {
          decoder.configure(await this.config);
        } catch (err) {
          controller.error(err);
          console.error('error while configure', err);
        }
      },
      write: async (chunk, controller) => {
        if (cancel) controller.error(cancel);
        else {
          try {
            await push.acquire();
            decoder.decode(chunk);
          } catch (e) {
            if (!clearing) {
              console.error('error while decode chunk', e);
              controller.error(e);
            }
          }
        }
      },
      close: async () => {
        await decoder.flush();
        decoder.close();
        finished = true;
        clear();
      },
      abort: reason => {
        abort = reason;
        decoder.close();
        clear();
      },
    });
  }
}
