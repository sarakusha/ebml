import Deferred from './Deferred';
import {
  isBlockElement,
  isBlockGroupElement,
  isContentElement,
  isDuration,
  isMasterElement,
  isSimpleBlockElement,
  isTimestamp,
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

  constructor({ startTime = 0 }: { startTime?: number } = {}) {
    let inTrackEntry = false;
    let trackNumber: number | undefined;
    let trackType: number | undefined;
    let videoTrackNumber: number | undefined;
    let offset = 0;
    let block: BlockElement | undefined;
    let hasReference = false;
    let total = 0;
    const startTimestamp = Math.max(0, startTime * 1000);
    let waitingForKeyframe = startTimestamp > 0;
    const enqueueChunk = (
      controller: TransformStreamDefaultController<EncodedVideoChunk>,
      type: EncodedVideoChunkType,
      timestamp: number,
      data: Uint8Array,
    ): void => {
      if (timestamp < startTimestamp) return;
      if (waitingForKeyframe) {
        if (type !== 'key') return;
        waitingForKeyframe = false;
      }
      controller.enqueue(
        new EncodedVideoChunk({
          type,
          timestamp: (timestamp - startTimestamp) * 1000,
          data: data as BufferSource,
        }),
      );
      total += 1;
    };
    const createRequired = (): Record<string, keyof VideoDecoderConfig> => ({
      PixelWidth: 'codedWidth',
      PixelHeight: 'codedHeight',
      CodecPrivate: 'codec',
      CodecID: 'codec',
    });
    let trackConfig: Partial<VideoDecoderConfig> = {};
    let trackRequired = createRequired();

    const parseConfig = (
      meta: ContentElement,
      config: Partial<VideoDecoderConfig>,
      required: Record<string, keyof VideoDecoderConfig>,
    ): void => {
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
      delete required[meta.name];
    };
    const isTrackNumber = (element: Element): element is ContentElement<'uinteger'> =>
      element.name === 'TrackNumber' && isContentElement(element);

    const isTrackType = (element: Element): element is ContentElement<'uinteger'> =>
      element.name === 'TrackType' && isContentElement(element);

    const isVideoBlock = (candidate: { track: number }): boolean =>
      videoTrackNumber != null && candidate.track === videoTrackNumber;

    super({
      transform: async (element, controller) => {
        try {
          if (isMasterElement(element) && element.name === 'TrackEntry') {
            if (element.isClosing) {
              if (trackType === VIDEO && trackNumber != null) {
                videoTrackNumber = trackNumber;
                if (Object.keys(trackRequired).length === 0) {
                  // console.info(`VideoChunkGenerator#${this.id}:config ${JSON.stringify(trackConfig)}`);
                  this.#config.resolve(trackConfig as VideoDecoderConfig);
                }
              }
              inTrackEntry = false;
              trackNumber = undefined;
              trackType = undefined;
              trackConfig = {};
              trackRequired = createRequired();
            } else {
              inTrackEntry = true;
              trackNumber = undefined;
              trackType = undefined;
              trackConfig = {};
              trackRequired = createRequired();
            }
            return;
          }

          if (inTrackEntry && isTrackNumber(element)) {
            trackNumber = Number(element.value);
            return;
          }

          if (inTrackEntry && isTrackType(element)) {
            trackType = Number(element.value);
            return;
          }
          if (inTrackEntry && isContentElement(element) && trackRequired[element.name]) {
            parseConfig(element, trackConfig, trackRequired);
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
            if (isVideoBlock(element)) {
              enqueueChunk(
                controller,
                element.keyframe ? 'key' : 'delta',
                offset + element.value,
                element.payload,
              );
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
            if (block && isVideoBlock(block)) {
              enqueueChunk(
                controller,
                hasReference ? 'delta' : 'key',
                block.value + offset,
                block.payload,
              );
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
