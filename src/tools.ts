export type VINT_WIDTH = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

export type VINT = {
  data?: number;
  width: VINT_WIDTH;
};

export const readVINT = (uint8: Uint8Array): VINT | null => {
  if (!uint8.length) return null;
  if (!uint8[0]) throw new Error(`Invalid VINT, VINT_MARKER not found`);
  const marker = Math.floor(Math.log2(uint8[0]));
  const mask = (1 << marker) - 1;
  const width = (8 - marker) as VINT_WIDTH;

  if (uint8.length < width) return { width };

  // Max representable integer in JS
  if (width === 8 && uint8[1] >= 0x20 && uint8.subarray(2, 8).some((b) => b !== 0)) {
    return {
      width: 8,
      data: -1,
    };
  }

  const data = uint8.subarray(1, width).reduce((acc, b) => acc * 256 + b, uint8[0] & mask);

  return {
    width,
    data,
  };
};

export const readHexString = (uint8: Uint8Array): string =>
  uint8.reduce((acc, b) => `${acc}${b.toString(16).padStart(2, '0')}`, '').toUpperCase();

export const readUnsigned = (uint8: Uint8Array): number | bigint =>
  uint8.byteLength <= 6
    ? uint8.reduce((acc, b) => acc * 256 + b)
    : uint8.reduce((acc, b) => (acc << 8n) + BigInt(b), 0n);

export const readSigned = (uint8: Uint8Array): number | bigint => {
  const unsigned = readUnsigned(uint8);
  const sign = uint8[0] & 0x80;
  if (typeof unsigned === 'bigint')
    return sign ? unsigned - (1n << (8n * BigInt(uint8.byteLength))) : unsigned;
  return sign ? unsigned - 2 ** (uint8.byteLength * 8) : unsigned;
};

export const readFloat = (uint8: Uint8Array): number => {
  const view = new DataView(uint8.buffer, uint8.byteOffset, uint8.byteLength);
  switch (uint8.byteLength) {
    case 4:
      return view.getFloat32(0);
    case 8:
      return view.getFloat64(0);
    default:
      return NaN;
  }
};

export const readUtf8 = (uint8: Uint8Array): string => new TextDecoder().decode(uint8);

export const readAscii = (uint8: Uint8Array): string => new TextDecoder('ascii').decode(uint8);

export const readDate = (uint8: Uint8Array): Date => {
  if (uint8.byteLength !== 8) throw new TypeError(`Invalid date (size: ${uint8.byteLength}`);
  const date = new Date('2001-01-01T00:00:00');
  const offset = Number(readSigned(uint8));
  date.setMilliseconds(offset);
  return date;
};

export const delay = (ms: number): Promise<void> =>
  new Promise((resolve) => {
    setTimeout(resolve, ms);
  });

export interface MergeableStream<T> extends ReadableStream<T> {
  add(...streams: ReadableStream<T>[]): Promise<void>;
  length: number;
  ready: Promise<void>;
}

export const mergeStreams = <T>(...streams: ReadableStream<T>[]): MergeableStream<T> => {
  const passThrough = new TransformStream<T, T>();
  const { readable, writable } = passThrough;
  let total = 0;
  let ready = Promise.resolve();
  const result = Object.defineProperties(readable, {
    add: {
      value: (...args: ReadableStream<T>[]): Promise<void> => {
        total += args.length;
        ready = args.reduce(
          (prev, stream) =>
            prev.then(() =>
              stream.pipeTo(writable, { preventClose: true }).then(() => {
                total -= 1;
              }),
            ),
          ready,
        );
        return ready;
      },
      enumerable: true,
      configurable: false,
    },
    length: {
      get() {
        return total;
      },
      enumerable: true,
      configurable: false,
    },
    ready: {
      get() {
        return ready;
      },
    },
  }) as MergeableStream<T>;
  result.add(...streams);
  return result;
};
