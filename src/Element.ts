import type { ElementSpec, ElementType, HexID } from './ElementSpec';

export const enum BlockLacing {
  None,
  Xiph,
  EBML,
  FixedSize,
};

interface ContentTypeMap extends Record<ElementType, number | bigint | string | Date | Uint8Array> {
  uinteger: number | bigint;
  integer: number | bigint;
  float: number;
  string: string;
  'utf-8': string;
  date: Date;
  binary: number;
  unknown: Uint8Array;
}

export interface Element {
  id: HexID;
  type: ElementType;
  name: string;
  size: number;
  spec?: ElementSpec;
}

type ContentElementType = Exclude<ElementType, 'master'>;

export interface ContentElement<T extends ContentElementType = ContentElementType> extends Element {
  type: T;
  data: Uint8Array;
  value: ContentTypeMap[T];
}

export interface MasterElement extends Element {
  type: 'master';
  isClosing?: true;
}

export interface BlockElement extends ContentElement<'binary'> {
  id: '0xA1';
  /** the coded information in the element */
  payload: Uint8Array;
  /** unsigned integer indicating the payload's track */
  track: number;
  /** the block's Timecode value */
  value: number;
  /** the codec SHOULD decode this frame but not display it */
  invisible?: true;
  /** Lacing is only useful for small contiguous data to save space.
   *  This is usually the case for audio tracks and not the case for
   *  video -- which use a lot of data -- or subtitle tracks -- which have long gaps. */
  lacing?: BlockLacing;
}

export interface SimpleBlockElement extends Omit<BlockElement, 'id'> {
  id: '0xA3';
  /** set to `true` if the payload starts an I frame */
  keyframe?: true;
  /** the frames of the Block can be discarded during playing if needed */
  discardable?: true;
}

export const isMasterElement = (element: Element): element is MasterElement =>
  element.type === 'master';

export const isContentElement = (element: Element): element is ContentElement<ContentElementType> =>
  element.type !== 'master';

export const isBlockElement = (element: Element): element is BlockElement => element.id === '0xA1';

export const isBlockGroupElement = (element: Element): element is MasterElement =>
  element.name === 'BlockGroup';

export const isSimpleBlockElement = (element: Element): element is SimpleBlockElement =>
  element.id === '0xA3';

export const isTrackType = (value: Element): value is ContentElement<'uinteger'> =>
  value.name === 'TrackType';

export const isTimestamp = (value: Element): value is ContentElement<'uinteger'> =>
  value.name === 'Timestamp';

export const isDuration = (value: Element): value is ContentElement<'float'> =>
  value.name === 'Duration';
