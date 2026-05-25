import Deferred from './Deferred';
import {
  isBlockElement,
  isBlockGroupElement,
  isContentElement,
  isDuration,
  isMasterElement,
  isSimpleBlockElement,
  isTimestamp,
  isTrackType,
} from './Element';
import type { BlockElement, ContentElement, Element } from './Element';
import { readHexString } from './tools';

const VIDEO = 1;

const getCodec = (element: ContentElement<'string' | 'utf-8'>): string | undefined => {
  switch (element.value) {
    case 'V_MPEG4/ISO/AVC':
      return 'avc1.';
    case 'V_VP9':
      return 'vp09.00.50.08';
    case 'V_VP8':
      return 'vp8'; // 'vp08.00.41.08';
    default:
      return undefined;
  }
};

export default class VideoChunkGenerator extends TransformStream<Element, EncodedVideoChunk> {
  #config = new Deferred<VideoDecoderConfig>();

  readonly clusters: number[] = [];

  get config(): Promise<VideoDecoderConfig> {
    return this.#config.promise;
  }

  readonly id: string = Date.now().toString(16).slice(-6);

  constructor() {
    let trackType: number | undefined;
    let offset = 0;
    let block: BlockElement | undefined;
    let hasReference = false;
    let total = 0;
    const config: Partial<VideoDecoderConfig> = {};
    const elements: Record<string, number> = {};
    const required: Record<string, keyof VideoDecoderConfig> = {
      PixelWidth: 'codedWidth',
      PixelHeight: 'codedHeight',
      CodecPrivate: 'codec',
      CodecID: 'codec',
    };

    const parseConfig = (meta: ContentElement): void => {
      switch (meta.name) {
        case 'CodecID': {
          const codec = getCodec(meta as ContentElement<'string'>);
          if (codec) {
            config.codec = codec;
            if (!codec.endsWith('.')) {
              delete required.CodecPrivate;
            }
          }
          break;
        }
        case 'CodecPrivate':
          if (config.codec === 'avc1.') {
            const codecPrivate = meta as ContentElement<'binary'>;
            config.codec += readHexString(codecPrivate.data.subarray(1, 4));
            config.description = codecPrivate.data.slice();
          }
          break;
        default: {
          const name = required[meta.name];
          if (name) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            config[name] = meta.value as any;
          }
        }
      }
    };
    super({
      transform: async (element, controller) => {
        elements[element.name] = (elements[element.name] ?? 0) + 1;
        try {
          if (isTrackType(element)) {
            trackType = element.value as number;
            return;
          }
          if (
            isContentElement(element) &&
            required[element.name] &&
            (trackType == null || trackType === VIDEO)
          ) {
            parseConfig(element);
            delete required[element.name];
            if (Object.keys(required).length === 0) {
              // console.info(`VideoChunkGenerator#${this.id}:config ${JSON.stringify(config)}`);
              this.#config.resolve(config as VideoDecoderConfig);
            }
            return;
          }

          if (isTimestamp(element)) {
            offset = element.value as number;
            return;
          }

          if (isDuration(element)) {
            postMessage({ duration: element.value / 1000 });
            return;
          }

          if (isSimpleBlockElement(element)) {
            if (trackType === VIDEO) {
              controller.enqueue(
                new EncodedVideoChunk({
                  type: element.keyframe ? 'key' : 'delta',
                  timestamp: (offset + element.value) * 1000,
                  data: element.payload,
                }),
              );
              total += 1;
            }
            return;
          }

          if (isBlockElement(element)) {
            block = element;
            return;
          }

          if (element.name === 'ReferenceBlock') {
            hasReference = true;
            return;
          }

          if (isBlockGroupElement(element) && element.isClosing) {
            if (block) {
              controller.enqueue(
                new EncodedVideoChunk({
                  type: hasReference ? 'delta' : 'key',
                  timestamp: (block.value + offset) * 1000,
                  data: block.payload,
                }),
              );
              total += 1;
            }
            block = undefined;
            hasReference = false;
          }
          if (isMasterElement(element) && element.name === 'Cluster' && !element.isClosing)
            this.clusters.push(total);
        } catch (err) {
          console.error(`VideoChunkGenerator#${this.id} error while ELEMENT: ${err}`);
          controller.error(err);
          this.#config.reject(err as Error);
        }
      },
      flush: (controller) => {
        // console.info(
        //   `VideoChunkGenerator#${this.id}:flush total: ${total}, clusters: ${this.clusters.join()}`
        // );
        controller.terminate();
      },
    });
  }
}
