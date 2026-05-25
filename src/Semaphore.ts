type WaitingPromise = { resolve: () => void; reject: (err: Error) => void };

export default class Semaphore {
  #counter = 0;

  #waiting: WaitingPromise[] = [];

  constructor(readonly max = 1) {}

  protected take(): boolean {
    const promise = this.#waiting.shift();
    if (promise) {
      promise.resolve();
      return false;
    }
    return true;
  }

  acquire(): Promise<void> {
    if (this.#counter < this.max) {
      this.#counter += 1;
      return Promise.resolve();
    }
    return new Promise<void>((resolve, reject) => {
      this.#waiting.push({
        resolve,
        reject,
      });
    });
  }

  release(): void {
    if (this.take()) this.#counter -= 1;
  }

  purge() {
    const unresolved = this.#waiting.splice(0);
    unresolved.forEach(({ reject }) => {
      reject(new Error('Task has been purged.'));
    });
    this.#counter = 0;
    return unresolved.length;
  }
}
