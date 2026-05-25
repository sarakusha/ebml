import CancelError from './CancelError';

type Options = {
  chunkSize?: number;
  abortController?: AbortController;
};

export default class RangeFetcher extends ReadableStream<Uint8Array> {
  constructor(
    url: string,
    { chunkSize = 32768, abortController = new AbortController() }: Options,
  ) {
    let from = 0;
    let total = Number.MAX_SAFE_INTEGER;
    let cancelled = false;
    super({
      async start(controller) {
        const res = await fetch(url, { method: 'HEAD' });
        if (res.ok && res.headers) {
          const length = res.headers.get('content-length');
          if (length) {
            total = parseInt(length, 10);
            if (Number.isNaN(total)) {
              console.error(`Unknown size of ${url}`);
              total = Number.MAX_SAFE_INTEGER;
            } else if (total === 0) controller.close();
          }
        }
      },
      async pull(controller) {
        try {
          const res = await fetch(url, {
            signal: abortController.signal,
            headers: {
              range: `bytes=${from}-${Math.min(from + chunkSize, total) - 1}`,
            },
          });
          if (!res.ok && !cancelled) controller.error(new Error(await res.text()));
          if (!res.body || cancelled) {
            controller.close();
            return;
          }
          const reader = res.body.getReader();
          let length = 0;
          for (
            let result = await reader.read();
            !result.done && !cancelled;
            result = await reader.read()
          ) {
            length += result.value.byteLength;
            controller.enqueue(result.value);
          }
          from += length;
          if (length === 0 || from === total || cancelled) controller.close();
        } catch (error) {
          if (cancelled || error instanceof CancelError) {
            controller.close();
          } else {
            controller.error(error);
            console.error('error while fetch', error, url);
          }
        }
      },
      cancel() {
        cancelled = true;
        abortController.abort(new CancelError());
      },
    });
  }
}
