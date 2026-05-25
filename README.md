# @sarakusha/ebml

Yet another library for parsing [EBML](http://ebml.sourceforge.net/). The main difference from existing libraries is browser support.
Instead of a [Node Stream API](https://nodejs.org/api/stream.html#stream_class_stream_transform) and buffers, the [Web Streams API](https://developer.mozilla.org/en-US/docs/Web/API/Streams_API) and typed arrays (```Uint8Array```) are used. Of course you can use it for node.js too. Another difference is that the library is built automatically from official [EBML](https://raw.githubusercontent.com/ietf-wg-cellar/ebml-specification/master/ebml.xml) and [matroska](https://raw.githubusercontent.com/ietf-wg-cellar/matroska-specification/master/ebml_matroska.xml) specifications.

> This library is written in typescript from scratch and is not a fork of existing libraries.

# Caveat
This version of the library only supports EBML decoding.

# Usage

The EbmlDecoder class is implemented as a [```TransformStream``` ](https://developer.mozilla.org/en-US/docs/Web/API/TransformStream) of the Streams API. The input to this transform function should be binary EBML, provided in a Uint8Array. The output of the stream is a series of ```Element``` objects.

```ts
// The base interface
interface Element {
  // The id of the EBML tag in hexadecimal format.
  id: HexID;
  // The data type of the EBML tag
  type: ElementType;
  // The name of the EBML tag
  name: string;
  // The total size of the tag in bytes
  size: number;
  // Tag attributes from the official specification.
  spec?: ElementSpec;
}

type ElementType =
  | 'master' /* master element (contains other EBML sub-elements of the next lower level) */
  | 'uinteger' /* unsigned integer. Some of these are UIDs, coded as 128-bit numbers */
  | 'integer' /* signed integer */
  | 'float' /* IEEE-754 floating point number */
  | 'string' /* printable ASCII text string */
  | 'utf-8' /* printable utf-8 Unicode text string */
  | 'date' /* a 64-bit signed timestamp, in nanoseconds after (or before) `2001-01-01T00:00UTC` */
  | 'binary' /* binary data, otherwise uninterpreted */
  | 'unknown';
```
There are two base 'flavors' of `Element`:
* ```MasterElement``` is element that contains one or more child elements.
* ```ContentElement``` is a tag element only contains data.