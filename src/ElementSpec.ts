import ebml from './ebml';
import matroska from './matroska';

export type ElementType =
  | 'master' /* master element (contains other EBML sub-elements of the next lower level) */
  | 'uinteger' /* unsigned integer. Some of these are UIDs, coded as 128-bit numbers */
  | 'integer' /* signed integer */
  | 'float' /* IEEE-754 floating point number */
  | 'string' /* printable ASCII text string */
  | 'utf-8' /* printable utf-8 Unicode text string */
  | 'date' /* a 64-bit signed timestamp, in nanoseconds after (or before) `2001-01-01T00:00UTC` */
  | 'binary' /* binary data, otherwise uninterpreted */
  | 'unknown';

export type HexID = `0x${string}`;

type Count = `${bigint}`;

type TRUE = '1';

type Purpose = 'definition' | 'rationale' | 'usage notes';

type Documentation<P extends Purpose = 'definition'> = {
  '#text': string;
  '@_lang': string;
  '@_purpose': P;
};

type ExtraDocumentation = [
  Documentation,
  Documentation<'rationale'> | Documentation<'usage notes'>
];

type WebmExtension = {
  '@_type': 'webmproject.org';
  '@_webm': TRUE;
};

type MatroskaExtension = {
  '@_type': 'libmatroska';
  '@_cppname': string;
};

type DivXExtension = {
  '@_type': 'divx.com';
  '@_divx': TRUE;
};

type StreamCopyExtension = {
  '@_type': 'stream copy';
  '@_keep': TRUE;
};

type Extension = WebmExtension | MatroskaExtension | DivXExtension | StreamCopyExtension;

type EnumValue = {
  documentation?: Documentation | Documentation[];
  '@_value': string;
  '@_label': string;
};

type EnumRestriction = {
  enum: EnumValue[];
};

type Restriction = EnumRestriction;

type PathChain = `\\${string}`;

type MAXIMUM_ALLOWED_LEVEL = 8;

type Last<T extends string[]> = T extends [...unknown[], infer L] ? L : never;

type ConcatPrevious<T extends string[]> = Last<T> extends string ? `${Last<T>}${PathChain}` : never;

type Mapped<N extends number, Result extends string[] = [PathChain]> = Result['length'] extends N
  ? Result
  : Mapped<N, [...Result, ConcatPrevious<Result>]>;

/**
 * https://stackoverflow.com/a/70720063/5267202
 */
type Path = Mapped<MAXIMUM_ALLOWED_LEVEL>[number];

export type ElementSpec = {
  '@_name': string;
  '@_path': Path;
  '@_id': HexID;
  '@_type': ElementType;
  '@_range'?: string;
  '@_default'?: string;
  '@_minOccurs'?: Count;
  '@_maxOccurs'?: Count;
  '@_length'?: Count;
  '@_minver'?: Count;
  '@_maxver'?: Count;
  '@_unknownsizeallowed'?: TRUE;
  '@_recurring'?: TRUE;
  '@_recursive'?: TRUE;
  documentation?: Documentation | ExtraDocumentation;
  extension?: Extension | Extension[];
  restriction?: Restriction;
};

const findSpec = (id: string): ElementSpec | undefined =>
  (matroska.EBMLSchema.element.find(elm => elm['@_id'] === id) ??
    ebml.EBMLSchema.element.find(elm => elm['@_id'] === id)) as ElementSpec;

export default findSpec;
