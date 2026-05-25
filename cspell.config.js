module.exports = {
  // Version of the setting file.  Always 0.2
  version: '0.2',
  // language - current active spelling language
  language: 'en',
  // words - list of words to be always considered correct
  words: [
    'ebml',
    'sarakusha',
    'gmib',
    'vint',
    'uinteger',
    'discardable',
    'timecode',
    'matroska',
    'webmproject',
    'libmatroska',
    'cppname',
    'divx',
    'minver',
    'maxver',
    'semaphor',
    'mergeable',
    'unknownsizeallowed',
  ],
  // flagWords - list of words to be always considered incorrect
  // This is useful for offensive words and common spelling errors.
  // For example "hte" should be "the"
  flagWords: ['hte'],
  ignorePaths: ['./src/matroska.ts', './src/ebml.ts', './src/decoder.test.ts'],
};
