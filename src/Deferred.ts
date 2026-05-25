export default class Deferred<T = void> {
  readonly promise: Promise<T>;

  #resolve: undefined | ((result: T) => void);

  #reject: undefined | ((error: Error) => void);

  constructor() {
    this.promise = new Promise<T>((resolve, reject) => {
      this.#resolve = resolve;
      this.#reject = reject;
    });
  }

  readonly resolve = (result: T): void => {
    const resolve = this.#resolve;
    this.#resolve = undefined;
    this.#reject = undefined;
    if (resolve) {
      resolve(result);
    }
  };

  readonly reject = (err: Error): void => {
    const reject = this.#reject;
    this.#resolve = undefined;
    this.#reject = undefined;
    if (reject) {
      reject(err);
    }
  };
}
