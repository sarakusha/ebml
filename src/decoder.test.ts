import { createReadStream } from 'fs';
import { Readable } from 'stream';
import { inspect } from 'util';

import EbmlDecoder from './EbmlDecoder';
import { isContentElement, isMasterElement } from './Element';
import type { Element } from './Element';

const MEDIA1 = '/Users/sarakusha/src/node-ebml/media/test.webm';
const MEDIA2 = '/Users/sarakusha/Library/Application Support/gmib/media/daschmi_video.mkv';

describe('test', () => {
  it('1', async () => {
    const decoder = new EbmlDecoder();
    const readable = Readable.toWeb(createReadStream(MEDIA2)) as ReadableStream<Uint8Array>;
    const reader = readable.pipeThrough<Element>(decoder).getReader();
    let indent = '';
    const lines: string[] = [];
    // eslint-disable-next-line no-await-in-loop
    for (let result = await reader.read(); !result.done; result = await reader.read()) {
      const { value } = result;
      const { name } = value;
      if (isMasterElement(value)) {
        if (value.isClosing) {
          indent = indent.slice(2);
          lines.push(`${indent}</${name}>`);
        } else {
          lines.push(`${indent}<${name}>`);
          indent += '  ';
        }
      } else if (isContentElement(value)) {
        lines.push(`${indent}<${name}>${value.value}</${name}>`);
      }
    }
    const chunk = 30;
    for (let i = 0; i < lines.length; i += chunk)
      console.log(inspect(lines.slice(i, i + chunk), false, null));
  });
});
