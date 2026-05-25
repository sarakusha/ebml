// generated automatically
export default {
  EBMLSchema: {
    element: [
      {
        documentation: {
          '#text':
            'Set the EBML characteristics of the data to follow. Each EBML document has to start with this.',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        '@_name': 'EBML',
        '@_path': '\\EBML',
        '@_id': '0x1A45DFA3',
        '@_type': 'master',
        '@_minOccurs': '1',
        '@_maxOccurs': '1',
      },
      {
        documentation: {
          '#text': 'The version of EBML parser used to create the file.',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        '@_name': 'EBMLVersion',
        '@_path': '\\EBML\\EBMLVersion',
        '@_id': '0x4286',
        '@_type': 'uinteger',
        '@_range': 'not 0',
        '@_default': '1',
        '@_minOccurs': '1',
        '@_maxOccurs': '1',
      },
      {
        documentation: {
          '#text': 'The minimum EBML version a parser has to support to read this file.',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        '@_name': 'EBMLReadVersion',
        '@_path': '\\EBML\\EBMLReadVersion',
        '@_id': '0x42F7',
        '@_type': 'uinteger',
        '@_range': '1',
        '@_default': '1',
        '@_minOccurs': '1',
        '@_maxOccurs': '1',
      },
      {
        documentation: {
          '#text':
            "The maximum length of the IDs you'll find in this file (4 or less in Matroska).",
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        '@_name': 'EBMLMaxIDLength',
        '@_path': '\\EBML\\EBMLMaxIDLength',
        '@_id': '0x42F2',
        '@_type': 'uinteger',
        '@_range': '>=4',
        '@_default': '4',
        '@_minOccurs': '1',
        '@_maxOccurs': '1',
      },
      {
        documentation: {
          '#text':
            "The maximum length of the sizes you'll find in this file (8 or less in Matroska). This does not override the element size indicated at the beginning of an element. Elements that have an indicated size which is larger than what is allowed by EBMLMaxSizeLength shall be considered invalid.",
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        '@_name': 'EBMLMaxSizeLength',
        '@_path': '\\EBML\\EBMLMaxSizeLength',
        '@_id': '0x42F3',
        '@_type': 'uinteger',
        '@_range': 'not 0',
        '@_default': '8',
        '@_minOccurs': '1',
        '@_maxOccurs': '1',
      },
      {
        documentation: {
          '#text':
            "A string that describes the type of document that follows this EBML header. 'matroska' in our case or 'webm' for webm files.",
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        '@_name': 'DocType',
        '@_path': '\\EBML\\DocType',
        '@_id': '0x4282',
        '@_type': 'string',
        '@_length': '>0',
        '@_minOccurs': '1',
        '@_maxOccurs': '1',
      },
      {
        documentation: {
          '#text': 'The version of DocType interpreter used to create the file.',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        '@_name': 'DocTypeVersion',
        '@_path': '\\EBML\\DocTypeVersion',
        '@_id': '0x4287',
        '@_type': 'uinteger',
        '@_range': 'not 0',
        '@_default': '1',
        '@_minOccurs': '1',
        '@_maxOccurs': '1',
      },
      {
        documentation: {
          '#text': 'The minimum DocType version an interpreter has to support to read this file.',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        '@_name': 'DocTypeReadVersion',
        '@_path': '\\EBML\\DocTypeReadVersion',
        '@_id': '0x4285',
        '@_type': 'uinteger',
        '@_range': 'not 0',
        '@_default': '1',
        '@_minOccurs': '1',
        '@_maxOccurs': '1',
      },
      {
        documentation: {
          '#text':
            "A DocTypeExtension adds extra Elements to the main DocType+DocTypeVersion\ttuple it's attached to. An EBML Reader **MAY** know these extra Elements and how to use them. A DocTypeExtension **MAY** be used to iterate between\texperimental Elements before they are integrated into a regular\tDocTypeVersion. Reading one DocTypeExtension version of a DocType+DocTypeVersion tuple doesn't imply one should be able to read upper versions of this DocTypeExtension.",
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        '@_name': 'DocTypeExtension',
        '@_path': '\\EBML\\DocTypeExtension',
        '@_id': '0x4281',
        '@_type': 'master',
      },
      {
        documentation: {
          '#text':
            'The name of the DocTypeExtension to differentiate it from other DocTypeExtensions of the same DocType+DocTypeVersion tuple. A DocTypeExtensionName value **MUST** be unique within the EBML Header.',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        '@_name': 'DocTypeExtensionName',
        '@_path': '\\EBML\\DocTypeExtension\\DocTypeExtensionName',
        '@_id': '0x4283',
        '@_type': 'string',
        '@_length': '>0',
        '@_minOccurs': '1',
        '@_maxOccurs': '1',
      },
      {
        documentation: {
          '#text':
            'The version of the DocTypeExtension. Different DocTypeExtensionVersion values of the same DocType + DocTypeVersion + DocTypeExtensionName tuple **MAY** contain completely different sets of extra Elements. An EBML Reader **MAY** support multiple versions\tof the same tuple, only one version of the tuple, or not support the tuple at all.',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        '@_name': 'DocTypeExtensionVersion',
        '@_path': '\\EBML\\DocTypeExtension\\DocTypeExtensionVersion',
        '@_id': '0x4284',
        '@_type': 'uinteger',
        '@_range': 'not 0',
        '@_minOccurs': '1',
        '@_maxOccurs': '1',
      },
      {
        documentation: {
          '#text':
            'Used to void damaged data, to avoid unexpected behaviors when using damaged data. The content is discarded. Also used to reserve space in a sub-element for later use.',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        '@_name': 'Void',
        '@_path': '\\(-\\)Void',
        '@_id': '0xEC',
        '@_type': 'binary',
      },
      {
        documentation: {
          '#text':
            "The CRC is computed on all the data of the Master element it's in. The CRC element should be the first in it's parent master for easier reading. All level 1 elements should include a CRC-32. The CRC in use is the IEEE CRC32 Little Endian.",
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        '@_name': 'CRC-32',
        '@_path': '\\(1-\\)CRC-32',
        '@_id': '0xBF',
        '@_type': 'binary',
        '@_length': '4',
        '@_maxOccurs': '1',
      },
    ],
    '@_xmlns': 'urn:ietf:rfc:8794',
    '@_docType': 'ebml',
    '@_version': '1',
  },
};
