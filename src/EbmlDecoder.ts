import { BlockLacing, isMasterElement } from './Element';
import type { ContentElement, Element, MasterElement, SimpleBlockElement } from './Element';
import findSpec, { type HexID } from './ElementSpec';
import {
  readAscii,
  readDate,
  readFloat,
  readHexString,
  readSigned,
  readUnsigned,
  readUtf8,
  readVINT,
} from './tools';

type TransformGenerator<I, O> = Generator<O | undefined, void, I | undefined>;
type TransformIteratorResult<T> = T extends TransformGenerator<unknown, infer O>
  ? IteratorResult<O | undefined, void>
  : never;
type WaitGenerator<T> = T extends TransformGenerator<infer I, unknown>
  ? Generator<undefined, void, I | undefined>
  : never;

type ElementGenerator = TransformGenerator<Uint8Array, Element>;
type Uint8ArrayRef = { uint8: Uint8Array };

const merge = (...arrays: Uint8Array[]): Uint8Array => {
  const total = arrays.reduce((acc, ar) => acc + ar.length, 0);
  const result = new Uint8Array(total);
  arrays.reduce((pos, ar) => {
    result.set(ar, pos);
    return pos + ar.length;
  }, 0);
  return result;
};

function* waitForData(ref: Uint8ArrayRef, minLength = 1): WaitGenerator<ElementGenerator> {
  while (ref.uint8.length < minLength) {
    const buffer = yield undefined;
    if (buffer) {
      ref.uint8 = merge(ref.uint8, buffer);
    }
  }
}

const shift = (ref: Uint8ArrayRef, length: number): void => {
  ref.uint8 = ref.uint8.subarray(length);
};

function* elementGenerator(ref: Uint8ArrayRef, length = ref.uint8.length): ElementGenerator {
  let remaining = length;
  while (remaining > 0) {
    let elementId = readVINT(ref.uint8);
    for (; elementId?.data == null; elementId = readVINT(ref.uint8)) {
      yield* waitForData(ref, elementId?.width);
    }
    const id: HexID = `0x${readHexString(ref.uint8.subarray(0, elementId.width))}`;
    shift(ref, elementId.width);

    let dataSize = readVINT(ref.uint8);
    for (; dataSize?.data == null; dataSize = readVINT(ref.uint8)) {
      yield* waitForData(ref, dataSize?.width);
    }
    const size = elementId.width + dataSize.width + dataSize.data;
    shift(ref, dataSize.width);

    const spec = findSpec(id);
    const element = {
      id,
      size,
      spec,
      type: spec?.['@_type'] ?? 'unknown',
      name: spec?.['@_name'] ?? 'Unknown',
    };
    if (isMasterElement(element)) {
      yield element;
      yield* elementGenerator(ref, dataSize.data);
      yield {
        ...element,
        isClosing: true,
      } as MasterElement;
    } else {
      yield* waitForData(ref, dataSize.data);
      const data = ref.uint8.subarray(0, dataSize.data);
      const isEmpty = data.length === 0;
      const defValue = spec?.['@_default'];
      switch (element.type) {
        case 'integer':
          yield {
            ...element,
            data,
            value: isEmpty ? Number(defValue) : readSigned(data),
          } as ContentElement<'integer'>;
          break;
        case 'uinteger':
          yield {
            ...element,
            data,
            value: isEmpty ? Number(defValue) : readUnsigned(data),
          } as ContentElement<'uinteger'>;
          break;
        case 'float':
          yield {
            ...element,
            data,
            value: isEmpty ? Number(defValue) : readFloat(data),
          } as ContentElement<'float'>;
          break;
        case 'string':
          yield {
            ...element,
            data,
            value: isEmpty ? defValue ?? '' : readAscii(data),
          } as ContentElement<'string'>;
          break;
        case 'utf-8':
          yield {
            ...element,
            data,
            value: isEmpty ? defValue ?? '' : readUtf8(data),
          } as ContentElement<'utf-8'>;
          break;
        case 'date':
          yield {
            ...element,
            data,
            value: isEmpty ? new Date(defValue ?? '2001-01-01T00:00:00') : readDate(data),
          } as ContentElement<'date'>;
          break;
        case 'binary': {
          const extra: Partial<SimpleBlockElement> = { value: data.length };
          if (element.name === 'Block' || element.name === 'SimpleBlock') {
            const vint = readVINT(data);
            if (!vint) throw new Error(`Invalid block`);
            let offset = vint.width;
            extra.track = vint.data;
            extra.value = readSigned(data.subarray(offset, offset + 2)) as number;
            offset += 2;
            const flags = data[offset];
            if (flags & 0x10) extra.invisible = true;
            switch (flags & 0x0c) {
              case 0x04:
                extra.lacing = BlockLacing.Xiph;
                break;
              case 0x08:
                extra.lacing = BlockLacing.FixedSize;
                break;
              case 0x0c:
                extra.lacing = BlockLacing.EBML;
                break;
              default:
                extra.lacing = BlockLacing.None;
            }
            if (element.name === 'SimpleBlock') {
              if (flags & 0x80) extra.keyframe = true;
              if (flags & 0x01) extra.discardable = true;
            }
            offset += 1;
            extra.payload = data.subarray(offset);
          }
          yield {
            ...element,
            data,
            ...extra,
          } as ContentElement<'binary'>;
          break;
        }
        default:
          yield element;
      }
      shift(ref, dataSize.data);
    }
    remaining -= size;
  }
}

export default class EbmlDecoder extends TransformStream<Uint8Array, Element> {
  constructor() {
    let generator: ElementGenerator | undefined;
    super({
      transform: (chunk, controller) => {
        let result: TransformIteratorResult<ElementGenerator>;
        if (!generator) {
          generator = elementGenerator({ uint8: chunk });
          result = generator.next();
        } else {
          result = generator.next(chunk);
        }

        while (!result.done && result.value) {
          controller.enqueue(result.value);
          result = generator.next();
        }
      },
      flush(controller) {
        controller.terminate();
      },
    });
  }
}
