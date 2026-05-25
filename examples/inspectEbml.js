#!/usr/bin/env node

const { createReadStream } = require('node:fs');
const { Readable } = require('node:stream');
const { argv } = require('node:process');

const { default: EbmlDecoder, isContentElement, isMasterElement } = require('../build/main/index');
const keypress = async () => {
  process.stdin.setRawMode(true);
  return new Promise(resolve =>
    process.stdin.once('data', data => {
      const byteArray = [...data];
      if (byteArray.length > 0 && byteArray[0] === 3) {
        console.log('^C');
        process.exit(1);
      }
      process.stdin.setRawMode(false);
      resolve();
    })
  );
};

/**
 * Print the xml representation of the EBML file.
 * @param {string} pathname
 * @example
 * inspectEbml('./Big_Buck_Bunny.webm')
 */

if (argv.length < 3) {
  console.log(`Usage:
  ${argv[1]} <pathname>`);
  return -1;
}

const pathname = argv[2];

const decoder = new EbmlDecoder();
const readable = Readable.toWeb(createReadStream(pathname));
const reader = readable.pipeThrough(decoder).getReader();
let indent = '';
let line = 0;
const inspect = async () => {
  const { done, value } = await reader.read();
  if (done) return;
  const { name } = value;
  if (isMasterElement(value)) {
    if (value.isClosing) {
      indent = indent.slice(2);
      console.log(`${indent}</${name}>`);
    } else {
      console.log(`${indent}<${name}>`);
      indent += '  ';
    }
  } else if (isContentElement(value)) {
    const extra = {};
    ['invisible', 'lacing', 'keyframe', 'discardable'].forEach(key => {
      if (value[key]) extra[key] = value[key];
    });
    const attrs = Object.entries(extra).map(([key, value]) =>
      value === true ? key : `${key}=${value}`
    );
    console.log(`${indent}<${[name, ...attrs].join(' ')}>${value.value}</${name}>`);
    line += 1;
    if (line > 100) {
      line = 0;
      await keypress();
    }
  }
  return inspect();
};
inspect();
