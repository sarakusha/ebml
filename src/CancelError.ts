export default class CancelError extends Error {
  constructor(message = 'Canceled by user') {
    super(message);
  }
}
