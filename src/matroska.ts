// generated automatically
export default {
  EBMLSchema: {
    element: [
      {
        '@_name': 'EBMLMaxIDLength',
        '@_path': '\\EBML\\EBMLMaxIDLength',
        '@_id': '0x42F2',
        '@_type': 'uinteger',
        '@_range': '4',
        '@_default': '4',
        '@_minOccurs': '1',
        '@_maxOccurs': '1',
      },
      {
        '@_name': 'EBMLMaxSizeLength',
        '@_path': '\\EBML\\EBMLMaxSizeLength',
        '@_id': '0x42F3',
        '@_type': 'uinteger',
        '@_range': '1-8',
        '@_default': '8',
        '@_minOccurs': '1',
        '@_maxOccurs': '1',
      },
      {
        documentation: {
          '#text':
            'The Root Element that contains all other Top-Level Elements; see (#data-layout).',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        '@_name': 'Segment',
        '@_path': '\\Segment',
        '@_id': '0x18538067',
        '@_type': 'master',
        '@_minOccurs': '1',
        '@_maxOccurs': '1',
        '@_unknownsizeallowed': '1',
      },
      {
        documentation: {
          '#text': 'Contains seeking information of Top-Level Elements; see (#data-layout).',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        extension: {
          '@_type': 'webmproject.org',
          '@_webm': '1',
        },
        '@_name': 'SeekHead',
        '@_path': '\\Segment\\SeekHead',
        '@_id': '0x114D9B74',
        '@_type': 'master',
        '@_maxOccurs': '2',
      },
      {
        documentation: {
          '#text': 'Contains a single seek entry to an EBML Element.',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        extension: {
          '@_type': 'webmproject.org',
          '@_webm': '1',
        },
        '@_name': 'Seek',
        '@_path': '\\Segment\\SeekHead\\Seek',
        '@_id': '0x4DBB',
        '@_type': 'master',
        '@_minOccurs': '1',
      },
      {
        documentation: {
          '#text': 'The binary EBML ID of a Top-Level Element.',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        extension: {
          '@_type': 'webmproject.org',
          '@_webm': '1',
        },
        '@_name': 'SeekID',
        '@_path': '\\Segment\\SeekHead\\Seek\\SeekID',
        '@_id': '0x53AB',
        '@_type': 'binary',
        '@_length': '<= 4',
        '@_minOccurs': '1',
        '@_maxOccurs': '1',
      },
      {
        documentation: {
          '#text': 'The Segment Position ((#segment-position)) of a Top-Level Element.',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        extension: {
          '@_type': 'webmproject.org',
          '@_webm': '1',
        },
        '@_name': 'SeekPosition',
        '@_path': '\\Segment\\SeekHead\\Seek\\SeekPosition',
        '@_id': '0x53AC',
        '@_type': 'uinteger',
        '@_minOccurs': '1',
        '@_maxOccurs': '1',
      },
      {
        documentation: {
          '#text': 'Contains general information about the Segment.',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        extension: {
          '@_type': 'webmproject.org',
          '@_webm': '1',
        },
        '@_name': 'Info',
        '@_path': '\\Segment\\Info',
        '@_id': '0x1549A966',
        '@_type': 'master',
        '@_minOccurs': '1',
        '@_maxOccurs': '1',
        '@_recurring': '1',
      },
      {
        documentation: [
          {
            '#text':
              'A randomly generated unique ID to identify the Segment amongst many others (128 bits).\nIt is effectively a Universally Unique IDentifier stored in binary form [@!RFC4122].',
            '@_lang': 'en',
            '@_purpose': 'definition',
          },
          {
            '#text':
              'If the Segment is a part of a Linked Segment, then this Element is **REQUIRED**.',
            '@_lang': 'en',
            '@_purpose': 'usage notes',
          },
        ],
        extension: {
          '@_type': 'libmatroska',
          '@_cppname': 'SegmentUID',
        },
        '@_name': 'SegmentUUID',
        '@_path': '\\Segment\\Info\\SegmentUUID',
        '@_id': '0x73A4',
        '@_type': 'binary',
        '@_range': 'not 0',
        '@_length': '16',
        '@_maxOccurs': '1',
      },
      {
        documentation: {
          '#text': 'A filename corresponding to this Segment.',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        '@_name': 'SegmentFilename',
        '@_path': '\\Segment\\Info\\SegmentFilename',
        '@_id': '0x7384',
        '@_type': 'utf-8',
        '@_maxOccurs': '1',
      },
      {
        documentation: [
          {
            '#text':
              'A unique ID to identify the previous Segment of a Linked Segment (128 bits).\nLike the SegmentUUID, it is a Universally Unique IDentifier stored in binary form [@!RFC4122].',
            '@_lang': 'en',
            '@_purpose': 'definition',
          },
          {
            '#text':
              'If the Segment is a part of a Linked Segment that uses Hard Linking ((#hard-linking)),\nthen either the PrevUUID or the NextUUID Element is **REQUIRED**. If a Segment contains a PrevUUID but not a NextUUID,\nthen it **MAY** be considered as the last Segment of the Linked Segment. The PrevUUID **MUST NOT** be equal to the SegmentUUID.',
            '@_lang': 'en',
            '@_purpose': 'usage notes',
          },
        ],
        extension: {
          '@_type': 'libmatroska',
          '@_cppname': 'PrevUID',
        },
        '@_name': 'PrevUUID',
        '@_path': '\\Segment\\Info\\PrevUUID',
        '@_id': '0x3CB923',
        '@_type': 'binary',
        '@_length': '16',
        '@_maxOccurs': '1',
      },
      {
        documentation: [
          {
            '#text': 'A filename corresponding to the file of the previous Linked Segment.',
            '@_lang': 'en',
            '@_purpose': 'definition',
          },
          {
            '#text':
              'Provision of the previous filename is for display convenience,\nbut PrevUUID **SHOULD** be considered authoritative for identifying the previous Segment in a Linked Segment.',
            '@_lang': 'en',
            '@_purpose': 'usage notes',
          },
        ],
        '@_name': 'PrevFilename',
        '@_path': '\\Segment\\Info\\PrevFilename',
        '@_id': '0x3C83AB',
        '@_type': 'utf-8',
        '@_maxOccurs': '1',
      },
      {
        documentation: [
          {
            '#text':
              'A unique ID to identify the next Segment of a Linked Segment (128 bits).\nLike the SegmentUUID, it is a Universally Unique IDentifier stored in binary form [@!RFC4122].',
            '@_lang': 'en',
            '@_purpose': 'definition',
          },
          {
            '#text':
              'If the Segment is a part of a Linked Segment that uses Hard Linking ((#hard-linking)),\nthen either the PrevUUID or the NextUUID Element is **REQUIRED**. If a Segment contains a NextUUID but not a PrevUUID,\nthen it **MAY** be considered as the first Segment of the Linked Segment. The NextUUID **MUST NOT** be equal to the SegmentUUID.',
            '@_lang': 'en',
            '@_purpose': 'usage notes',
          },
        ],
        extension: {
          '@_type': 'libmatroska',
          '@_cppname': 'NextUID',
        },
        '@_name': 'NextUUID',
        '@_path': '\\Segment\\Info\\NextUUID',
        '@_id': '0x3EB923',
        '@_type': 'binary',
        '@_length': '16',
        '@_maxOccurs': '1',
      },
      {
        documentation: [
          {
            '#text': 'A filename corresponding to the file of the next Linked Segment.',
            '@_lang': 'en',
            '@_purpose': 'definition',
          },
          {
            '#text':
              'Provision of the next filename is for display convenience,\nbut NextUUID **SHOULD** be considered authoritative for identifying the Next Segment.',
            '@_lang': 'en',
            '@_purpose': 'usage notes',
          },
        ],
        '@_name': 'NextFilename',
        '@_path': '\\Segment\\Info\\NextFilename',
        '@_id': '0x3E83BB',
        '@_type': 'utf-8',
        '@_maxOccurs': '1',
      },
      {
        documentation: [
          {
            '#text':
              'A randomly generated unique ID that all Segments of a Linked Segment **MUST** share (128 bits).\nIt is effectively a Universally Unique IDentifier stored in binary form [@!RFC4122].',
            '@_lang': 'en',
            '@_purpose': 'definition',
          },
          {
            '#text':
              'If the Segment Info contains a `ChapterTranslate` element, this Element is **REQUIRED**.',
            '@_lang': 'en',
            '@_purpose': 'usage notes',
          },
        ],
        '@_name': 'SegmentFamily',
        '@_path': '\\Segment\\Info\\SegmentFamily',
        '@_id': '0x4444',
        '@_type': 'binary',
        '@_length': '16',
      },
      {
        documentation: [
          {
            '#text':
              'The mapping between this `Segment` and a segment value in the given Chapter Codec.',
            '@_lang': 'en',
            '@_purpose': 'definition',
          },
          {
            '#text':
              'Chapter Codec may need to address different segments, but they may not know of the way to identify such segment when stored in Matroska.\nThis element and its child elements add a way to map the internal segments known to the Chapter Codec to the Segment IDs in Matroska.\nThis allows remuxing a file with Chapter Codec without changing the content of the codec data, just the Segment mapping.',
            '@_lang': 'en',
            '@_purpose': 'rationale',
          },
        ],
        '@_name': 'ChapterTranslate',
        '@_path': '\\Segment\\Info\\ChapterTranslate',
        '@_id': '0x6924',
        '@_type': 'master',
      },
      {
        documentation: {
          '#text':
            'The binary value used to represent this Segment in the chapter codec data.\nThe format depends on the ChapProcessCodecID used; see (#chapprocesscodecid-element).',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        '@_name': 'ChapterTranslateID',
        '@_path': '\\Segment\\Info\\ChapterTranslate\\ChapterTranslateID',
        '@_id': '0x69A5',
        '@_type': 'binary',
        '@_minOccurs': '1',
        '@_maxOccurs': '1',
      },
      {
        documentation: {
          '#text':
            'This `ChapterTranslate` applies to this chapter codec of the given chapter edition(s); see (#chapprocesscodecid-element).',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        restriction: {
          enum: [
            {
              documentation: {
                '#text': 'Chapter commands using the Matroska Script codec.',
                '@_lang': 'en',
                '@_purpose': 'definition',
              },
              '@_value': '0',
              '@_label': 'Matroska Script',
            },
            {
              documentation: {
                '#text': 'Chapter commands using the DVD-like codec.',
                '@_lang': 'en',
                '@_purpose': 'definition',
              },
              '@_value': '1',
              '@_label': 'DVD-menu',
            },
          ],
        },
        '@_name': 'ChapterTranslateCodec',
        '@_path': '\\Segment\\Info\\ChapterTranslate\\ChapterTranslateCodec',
        '@_id': '0x69BF',
        '@_type': 'uinteger',
        '@_minOccurs': '1',
        '@_maxOccurs': '1',
      },
      {
        documentation: [
          {
            '#text': 'Specify a chapter edition UID on which this `ChapterTranslate` applies.',
            '@_lang': 'en',
            '@_purpose': 'definition',
          },
          {
            '#text':
              'When no `ChapterTranslateEditionUID` is specified in the `ChapterTranslate`, the `ChapterTranslate` applied to all chapter editions found in the Segment using the given `ChapterTranslateCodec`.',
            '@_lang': 'en',
            '@_purpose': 'usage notes',
          },
        ],
        '@_name': 'ChapterTranslateEditionUID',
        '@_path': '\\Segment\\Info\\ChapterTranslate\\ChapterTranslateEditionUID',
        '@_id': '0x69FC',
        '@_type': 'uinteger',
      },
      {
        documentation: {
          '#text':
            'Base unit for Segment Ticks and Track Ticks, in nanoseconds. A TimestampScale value of 1.000.000 means scaled timestamps in the Segment are expressed in milliseconds; see (#timestamps) on how to interpret timestamps.',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        extension: [
          {
            '@_type': 'libmatroska',
            '@_cppname': 'TimecodeScale',
          },
          {
            '@_type': 'webmproject.org',
            '@_webm': '1',
          },
        ],
        '@_name': 'TimestampScale',
        '@_path': '\\Segment\\Info\\TimestampScale',
        '@_id': '0x2AD7B1',
        '@_type': 'uinteger',
        '@_range': 'not 0',
        '@_default': '1000000',
        '@_minOccurs': '1',
        '@_maxOccurs': '1',
      },
      {
        documentation: {
          '#text':
            'Duration of the Segment, expressed in Segment Ticks which is based on TimestampScale; see (#timestamp-ticks).',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        extension: {
          '@_type': 'webmproject.org',
          '@_webm': '1',
        },
        '@_name': 'Duration',
        '@_path': '\\Segment\\Info\\Duration',
        '@_id': '0x4489',
        '@_type': 'float',
        '@_range': '> 0x0p+0',
        '@_maxOccurs': '1',
      },
      {
        documentation: {
          '#text':
            'The date and time that the Segment was created by the muxing application or library.',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        extension: {
          '@_type': 'webmproject.org',
          '@_webm': '1',
        },
        '@_name': 'DateUTC',
        '@_path': '\\Segment\\Info\\DateUTC',
        '@_id': '0x4461',
        '@_type': 'date',
        '@_maxOccurs': '1',
      },
      {
        documentation: {
          '#text': 'General name of the Segment.',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        extension: {
          '@_type': 'webmproject.org',
          '@_webm': '1',
        },
        '@_name': 'Title',
        '@_path': '\\Segment\\Info\\Title',
        '@_id': '0x7BA9',
        '@_type': 'utf-8',
        '@_maxOccurs': '1',
      },
      {
        documentation: [
          {
            '#text': 'Muxing application or library (example: "libmatroska-0.4.3").',
            '@_lang': 'en',
            '@_purpose': 'definition',
          },
          {
            '#text':
              'Include the full name of the application or library followed by the version number.',
            '@_lang': 'en',
            '@_purpose': 'usage notes',
          },
        ],
        extension: {
          '@_type': 'webmproject.org',
          '@_webm': '1',
        },
        '@_name': 'MuxingApp',
        '@_path': '\\Segment\\Info\\MuxingApp',
        '@_id': '0x4D80',
        '@_type': 'utf-8',
        '@_minOccurs': '1',
        '@_maxOccurs': '1',
      },
      {
        documentation: [
          {
            '#text': 'Writing application (example: "mkvmerge-0.3.3").',
            '@_lang': 'en',
            '@_purpose': 'definition',
          },
          {
            '#text': 'Include the full name of the application followed by the version number.',
            '@_lang': 'en',
            '@_purpose': 'usage notes',
          },
        ],
        extension: {
          '@_type': 'webmproject.org',
          '@_webm': '1',
        },
        '@_name': 'WritingApp',
        '@_path': '\\Segment\\Info\\WritingApp',
        '@_id': '0x5741',
        '@_type': 'utf-8',
        '@_minOccurs': '1',
        '@_maxOccurs': '1',
      },
      {
        documentation: {
          '#text': 'The Top-Level Element containing the (monolithic) Block structure.',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        extension: {
          '@_type': 'webmproject.org',
          '@_webm': '1',
        },
        '@_name': 'Cluster',
        '@_path': '\\Segment\\Cluster',
        '@_id': '0x1F43B675',
        '@_type': 'master',
        '@_unknownsizeallowed': '1',
      },
      {
        documentation: [
          {
            '#text':
              'Absolute timestamp of the cluster, expressed in Segment Ticks which is based on TimestampScale; see (#timestamp-ticks).',
            '@_lang': 'en',
            '@_purpose': 'definition',
          },
          {
            '#text':
              'This element **SHOULD** be the first child element of the Cluster it belongs to,\nor the second if that Cluster contains a CRC-32 element ((#crc-32)).',
            '@_lang': 'en',
            '@_purpose': 'usage notes',
          },
        ],
        extension: [
          {
            '@_type': 'libmatroska',
            '@_cppname': 'ClusterTimecode',
          },
          {
            '@_type': 'webmproject.org',
            '@_webm': '1',
          },
        ],
        '@_name': 'Timestamp',
        '@_path': '\\Segment\\Cluster\\Timestamp',
        '@_id': '0xE7',
        '@_type': 'uinteger',
        '@_minOccurs': '1',
        '@_maxOccurs': '1',
      },
      {
        documentation: {
          '#text':
            'The list of tracks that are not used in that part of the stream.\nIt is useful when using overlay tracks on seeking or to decide what track to use.',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        extension: {
          '@_type': 'libmatroska',
          '@_cppname': 'ClusterSilentTracks',
        },
        '@_name': 'SilentTracks',
        '@_path': '\\Segment\\Cluster\\SilentTracks',
        '@_id': '0x5854',
        '@_type': 'master',
        '@_minver': '0',
        '@_maxver': '0',
        '@_maxOccurs': '1',
      },
      {
        documentation: {
          '#text':
            'One of the track number that are not used from now on in the stream.\nIt could change later if not specified as silent in a further Cluster.',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        extension: {
          '@_type': 'libmatroska',
          '@_cppname': 'ClusterSilentTrackNumber',
        },
        '@_name': 'SilentTrackNumber',
        '@_path': '\\Segment\\Cluster\\SilentTracks\\SilentTrackNumber',
        '@_id': '0x58D7',
        '@_type': 'uinteger',
        '@_minver': '0',
        '@_maxver': '0',
      },
      {
        documentation: {
          '#text':
            'The Segment Position of the Cluster in the Segment (0 in live streams).\nIt might help to resynchronise offset on damaged streams.',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        extension: {
          '@_type': 'libmatroska',
          '@_cppname': 'ClusterPosition',
        },
        '@_name': 'Position',
        '@_path': '\\Segment\\Cluster\\Position',
        '@_id': '0xA7',
        '@_type': 'uinteger',
        '@_maxOccurs': '1',
        '@_minver': '0',
        '@_maxver': '0',
      },
      {
        documentation: {
          '#text': 'Size of the previous Cluster, in octets. Can be useful for backward playing.',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        extension: [
          {
            '@_type': 'libmatroska',
            '@_cppname': 'ClusterPrevSize',
          },
          {
            '@_type': 'webmproject.org',
            '@_webm': '1',
          },
        ],
        '@_name': 'PrevSize',
        '@_path': '\\Segment\\Cluster\\PrevSize',
        '@_id': '0xAB',
        '@_type': 'uinteger',
        '@_maxOccurs': '1',
      },
      {
        documentation: {
          '#text':
            'Similar to Block, see (#block-structure), but without all the extra information,\nmostly used to reduced overhead when no extra feature is needed; see (#simpleblock-structure) on SimpleBlock Structure.',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        extension: [
          {
            '@_type': 'webmproject.org',
            '@_webm': '1',
          },
          {
            '@_type': 'divx.com',
            '@_divx': '1',
          },
        ],
        '@_name': 'SimpleBlock',
        '@_path': '\\Segment\\Cluster\\SimpleBlock',
        '@_id': '0xA3',
        '@_type': 'binary',
        '@_minver': '2',
      },
      {
        documentation: {
          '#text':
            'Basic container of information containing a single Block and information specific to that Block.',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        extension: {
          '@_type': 'webmproject.org',
          '@_webm': '1',
        },
        '@_name': 'BlockGroup',
        '@_path': '\\Segment\\Cluster\\BlockGroup',
        '@_id': '0xA0',
        '@_type': 'master',
      },
      {
        documentation: {
          '#text':
            'Block containing the actual data to be rendered and a timestamp relative to the Cluster Timestamp;\nsee (#block-structure) on Block Structure.',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        extension: {
          '@_type': 'webmproject.org',
          '@_webm': '1',
        },
        '@_name': 'Block',
        '@_path': '\\Segment\\Cluster\\BlockGroup\\Block',
        '@_id': '0xA1',
        '@_type': 'binary',
        '@_minOccurs': '1',
        '@_maxOccurs': '1',
      },
      {
        documentation: {
          '#text':
            'A Block with no data. It **MUST** be stored in the stream at the place the real Block would be in display order.',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        '@_name': 'BlockVirtual',
        '@_path': '\\Segment\\Cluster\\BlockGroup\\BlockVirtual',
        '@_id': '0xA2',
        '@_type': 'binary',
        '@_minver': '0',
        '@_maxver': '0',
        '@_maxOccurs': '1',
      },
      {
        documentation: {
          '#text':
            'Contain additional binary data to complete the main one; see Codec BlockAdditions section of [@?MatroskaCodec] for more information.\nAn EBML parser that has no knowledge of the Block structure could still see and use/skip these data.',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        extension: {
          '@_type': 'webmproject.org',
          '@_webm': '1',
        },
        '@_name': 'BlockAdditions',
        '@_path': '\\Segment\\Cluster\\BlockGroup\\BlockAdditions',
        '@_id': '0x75A1',
        '@_type': 'master',
        '@_maxOccurs': '1',
      },
      {
        documentation: {
          '#text': 'Contain the BlockAdditional and some parameters.',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        extension: {
          '@_type': 'webmproject.org',
          '@_webm': '1',
        },
        '@_name': 'BlockMore',
        '@_path': '\\Segment\\Cluster\\BlockGroup\\BlockAdditions\\BlockMore',
        '@_id': '0xA6',
        '@_type': 'master',
        '@_minOccurs': '1',
      },
      {
        documentation: {
          '#text': 'Interpreted by the codec as it wishes (using the BlockAddID).',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        extension: {
          '@_type': 'webmproject.org',
          '@_webm': '1',
        },
        '@_name': 'BlockAdditional',
        '@_path': '\\Segment\\Cluster\\BlockGroup\\BlockAdditions\\BlockMore\\BlockAdditional',
        '@_id': '0xA5',
        '@_type': 'binary',
        '@_minOccurs': '1',
        '@_maxOccurs': '1',
      },
      {
        documentation: [
          {
            '#text':
              'An ID to identify how to interpret the BlockAdditional data; see Codec BlockAdditions section of [@?MatroskaCodec] for more information.\nA value of 1 indicates that the meaning of the BlockAdditional data is defined by the codec.\nAny other value indicates the meaning of the BlockAdditional data is found in the BlockAddIDType found in the TrackEntry.',
            '@_lang': 'en',
            '@_purpose': 'definition',
          },
          {
            '#text':
              'Each BlockAddID value **MUST** be unique between all BlockMore elements found in a BlockAdditions.',
            '@_lang': 'en',
            '@_purpose': 'usage notes',
          },
          {
            '#text':
              'To keep MaxBlockAdditionID as low as possible, small values **SHOULD** be used.',
            '@_lang': 'en',
            '@_purpose': 'usage notes',
          },
        ],
        extension: {
          '@_type': 'webmproject.org',
          '@_webm': '1',
        },
        '@_name': 'BlockAddID',
        '@_path': '\\Segment\\Cluster\\BlockGroup\\BlockAdditions\\BlockMore\\BlockAddID',
        '@_id': '0xEE',
        '@_type': 'uinteger',
        '@_range': 'not 0',
        '@_default': '1',
        '@_minOccurs': '1',
        '@_maxOccurs': '1',
      },
      {
        documentation: {
          '#text':
            'The duration of the Block, expressed in Track Ticks; see (#timestamp-ticks).\nThe BlockDuration Element can be useful at the end of a Track to define the duration of the last frame (as there is no subsequent Block available),\nor when there is a break in a track like for subtitle tracks.',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        implementation_note: [
          {
            '#text':
              'BlockDuration **MUST** be set (minOccurs=1) if the associated TrackEntry stores a DefaultDuration value.',
            '@_note_attribute': 'minOccurs',
          },
          {
            '#text':
              'When not written and with no DefaultDuration, the value is assumed to be the difference between the timestamp\nof this Block and the timestamp of the next Block in "display" order (not coding order).',
            '@_note_attribute': 'default',
          },
        ],
        extension: {
          '@_type': 'webmproject.org',
          '@_webm': '1',
        },
        '@_name': 'BlockDuration',
        '@_path': '\\Segment\\Cluster\\BlockGroup\\BlockDuration',
        '@_id': '0x9B',
        '@_type': 'uinteger',
        '@_maxOccurs': '1',
      },
      {
        documentation: {
          '#text':
            'This frame is referenced and has the specified cache priority.\nIn cache only a frame of the same or higher priority can replace this frame. A value of 0 means the frame is not referenced.',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        '@_name': 'ReferencePriority',
        '@_path': '\\Segment\\Cluster\\BlockGroup\\ReferencePriority',
        '@_id': '0xFA',
        '@_type': 'uinteger',
        '@_default': '0',
        '@_minOccurs': '1',
        '@_maxOccurs': '1',
      },
      {
        documentation: {
          '#text':
            'A timestamp value, relative to the timestamp of the Block in this BlockGroup, expressed in Track Ticks; see (#timestamp-ticks).\nThis is used to reference other frames necessary to decode this frame.\nThe relative value **SHOULD** correspond to a valid `Block` this `Block` depends on.\nHistorically Matroska Writer didn\'t write the actual `Block(s)` this `Block` depends on, but *some* `Block` in the past.\n\nThe value "0" **MAY** also be used to signify this `Block` cannot be decoded on its own, but without knownledge of which `Block` is necessary. In this case, other `ReferenceBlock` **MUST NOT** be found in the same `BlockGroup`.\n\nIf the `BlockGroup` doesn\'t have any `ReferenceBlock` element, then the `Block` it contains can be decoded without using any other `Block` data.',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        extension: {
          '@_type': 'webmproject.org',
          '@_webm': '1',
        },
        '@_name': 'ReferenceBlock',
        '@_path': '\\Segment\\Cluster\\BlockGroup\\ReferenceBlock',
        '@_id': '0xFB',
        '@_type': 'integer',
      },
      {
        documentation: {
          '#text':
            'The Segment Position of the data that would otherwise be in position of the virtual block.',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        '@_name': 'ReferenceVirtual',
        '@_path': '\\Segment\\Cluster\\BlockGroup\\ReferenceVirtual',
        '@_id': '0xFD',
        '@_type': 'integer',
        '@_minver': '0',
        '@_maxver': '0',
        '@_maxOccurs': '1',
      },
      {
        documentation: {
          '#text':
            'The new codec state to use. Data interpretation is private to the codec.\nThis information **SHOULD** always be referenced by a seek entry.',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        '@_name': 'CodecState',
        '@_path': '\\Segment\\Cluster\\BlockGroup\\CodecState',
        '@_id': '0xA4',
        '@_type': 'binary',
        '@_minver': '2',
        '@_maxOccurs': '1',
      },
      {
        documentation: {
          '#text':
            'Duration of the silent data added to the Block, expressed in Matroska Ticks -- ie in nanoseconds; see (#timestamp-ticks)\n(padding at the end of the Block for positive value, at the beginning of the Block for negative value).\nThe duration of DiscardPadding is not calculated in the duration of the TrackEntry and **SHOULD** be discarded during playback.',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        extension: {
          '@_type': 'webmproject.org',
          '@_webm': '1',
        },
        '@_name': 'DiscardPadding',
        '@_path': '\\Segment\\Cluster\\BlockGroup\\DiscardPadding',
        '@_id': '0x75A2',
        '@_type': 'integer',
        '@_minver': '4',
        '@_maxOccurs': '1',
      },
      {
        documentation: {
          '#text': 'Contains slices description.',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        '@_name': 'Slices',
        '@_path': '\\Segment\\Cluster\\BlockGroup\\Slices',
        '@_id': '0x8E',
        '@_type': 'master',
        '@_minver': '0',
        '@_maxver': '0',
        '@_maxOccurs': '1',
      },
      {
        documentation: {
          '#text':
            'Contains extra time information about the data contained in the Block.\nBeing able to interpret this Element is not **REQUIRED** for playback.',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        '@_name': 'TimeSlice',
        '@_path': '\\Segment\\Cluster\\BlockGroup\\Slices\\TimeSlice',
        '@_id': '0xE8',
        '@_type': 'master',
        '@_minver': '0',
        '@_maxver': '0',
      },
      {
        documentation: {
          '#text':
            'The reverse number of the frame in the lace (0 is the last frame, 1 is the next to last, etc).\nBeing able to interpret this Element is not **REQUIRED** for playback.',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        extension: {
          '@_type': 'libmatroska',
          '@_cppname': 'SliceLaceNumber',
        },
        '@_name': 'LaceNumber',
        '@_path': '\\Segment\\Cluster\\BlockGroup\\Slices\\TimeSlice\\LaceNumber',
        '@_id': '0xCC',
        '@_type': 'uinteger',
        '@_minver': '0',
        '@_maxver': '0',
        '@_maxOccurs': '1',
      },
      {
        documentation: {
          '#text':
            'The number of the frame to generate from this lace with this delay\n(allow you to generate many frames from the same Block/Frame).',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        extension: {
          '@_type': 'libmatroska',
          '@_cppname': 'SliceFrameNumber',
        },
        '@_name': 'FrameNumber',
        '@_path': '\\Segment\\Cluster\\BlockGroup\\Slices\\TimeSlice\\FrameNumber',
        '@_id': '0xCD',
        '@_type': 'uinteger',
        '@_minver': '0',
        '@_maxver': '0',
        '@_default': '0',
        '@_maxOccurs': '1',
      },
      {
        documentation: {
          '#text': 'The ID of the BlockAdditional Element (0 is the main Block).',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        extension: {
          '@_type': 'libmatroska',
          '@_cppname': 'SliceBlockAddID',
        },
        '@_name': 'BlockAdditionID',
        '@_path': '\\Segment\\Cluster\\BlockGroup\\Slices\\TimeSlice\\BlockAdditionID',
        '@_id': '0xCB',
        '@_type': 'uinteger',
        '@_minver': '0',
        '@_maxver': '0',
        '@_default': '0',
        '@_maxOccurs': '1',
      },
      {
        documentation: {
          '#text':
            'The delay to apply to the Element, expressed in Track Ticks; see (#timestamp-ticks).',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        extension: {
          '@_type': 'libmatroska',
          '@_cppname': 'SliceDelay',
        },
        '@_name': 'Delay',
        '@_path': '\\Segment\\Cluster\\BlockGroup\\Slices\\TimeSlice\\Delay',
        '@_id': '0xCE',
        '@_type': 'uinteger',
        '@_minver': '0',
        '@_maxver': '0',
        '@_default': '0',
        '@_maxOccurs': '1',
      },
      {
        documentation: {
          '#text':
            'The duration to apply to the Element, expressed in Track Ticks; see (#timestamp-ticks).',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        '@_name': 'SliceDuration',
        '@_path': '\\Segment\\Cluster\\BlockGroup\\Slices\\TimeSlice\\SliceDuration',
        '@_id': '0xCF',
        '@_type': 'uinteger',
        '@_minver': '0',
        '@_maxver': '0',
        '@_default': '0',
        '@_maxOccurs': '1',
      },
      {
        documentation: {
          '#text': 'Contains information about the last reference frame. See [@?DivXTrickTrack].',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        extension: {
          '@_type': 'divx.com',
          '@_divx': '1',
        },
        '@_name': 'ReferenceFrame',
        '@_path': '\\Segment\\Cluster\\BlockGroup\\ReferenceFrame',
        '@_id': '0xC8',
        '@_type': 'master',
        '@_minver': '0',
        '@_maxver': '0',
        '@_maxOccurs': '1',
      },
      {
        documentation: {
          '#text':
            'The relative offset, in bytes, from the previous BlockGroup element for this Smooth FF/RW video track to the containing BlockGroup element. See [@?DivXTrickTrack].',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        extension: {
          '@_type': 'divx.com',
          '@_divx': '1',
        },
        '@_name': 'ReferenceOffset',
        '@_path': '\\Segment\\Cluster\\BlockGroup\\ReferenceFrame\\ReferenceOffset',
        '@_id': '0xC9',
        '@_type': 'uinteger',
        '@_minver': '0',
        '@_maxver': '0',
        '@_minOccurs': '1',
        '@_maxOccurs': '1',
      },
      {
        documentation: {
          '#text':
            'The timestamp of the BlockGroup pointed to by ReferenceOffset, expressed in Track Ticks; see (#timestamp-ticks). See [@?DivXTrickTrack].',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        extension: [
          {
            '@_type': 'libmatroska',
            '@_cppname': 'ReferenceTimeCode',
          },
          {
            '@_type': 'divx.com',
            '@_divx': '1',
          },
        ],
        '@_name': 'ReferenceTimestamp',
        '@_path': '\\Segment\\Cluster\\BlockGroup\\ReferenceFrame\\ReferenceTimestamp',
        '@_id': '0xCA',
        '@_type': 'uinteger',
        '@_minver': '0',
        '@_maxver': '0',
        '@_minOccurs': '1',
        '@_maxOccurs': '1',
      },
      {
        documentation: {
          '#text':
            'Similar to SimpleBlock, see (#simpleblock-structure),\nbut the data inside the Block are Transformed (encrypt and/or signed).',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        '@_name': 'EncryptedBlock',
        '@_path': '\\Segment\\Cluster\\EncryptedBlock',
        '@_id': '0xAF',
        '@_type': 'binary',
        '@_minver': '0',
        '@_maxver': '0',
      },
      {
        documentation: {
          '#text': 'A Top-Level Element of information with many tracks described.',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        extension: {
          '@_type': 'webmproject.org',
          '@_webm': '1',
        },
        '@_name': 'Tracks',
        '@_path': '\\Segment\\Tracks',
        '@_id': '0x1654AE6B',
        '@_type': 'master',
        '@_maxOccurs': '1',
        '@_recurring': '1',
      },
      {
        documentation: {
          '#text': 'Describes a track with all Elements.',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        extension: {
          '@_type': 'webmproject.org',
          '@_webm': '1',
        },
        '@_name': 'TrackEntry',
        '@_path': '\\Segment\\Tracks\\TrackEntry',
        '@_id': '0xAE',
        '@_type': 'master',
        '@_minOccurs': '1',
      },
      {
        documentation: {
          '#text':
            'The track number as used in the Block Header (using more than 127 tracks is not encouraged,\nthough the design allows an unlimited number).',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        extension: {
          '@_type': 'webmproject.org',
          '@_webm': '1',
        },
        '@_name': 'TrackNumber',
        '@_path': '\\Segment\\Tracks\\TrackEntry\\TrackNumber',
        '@_id': '0xD7',
        '@_type': 'uinteger',
        '@_range': 'not 0',
        '@_minOccurs': '1',
        '@_maxOccurs': '1',
      },
      {
        documentation: {
          '#text': 'A unique ID to identify the Track.',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        extension: [
          {
            '@_type': 'stream copy',
            '@_keep': '1',
          },
          {
            '@_type': 'webmproject.org',
            '@_webm': '1',
          },
        ],
        '@_name': 'TrackUID',
        '@_path': '\\Segment\\Tracks\\TrackEntry\\TrackUID',
        '@_id': '0x73C5',
        '@_type': 'uinteger',
        '@_range': 'not 0',
        '@_minOccurs': '1',
        '@_maxOccurs': '1',
      },
      {
        documentation: {
          '#text':
            'The `TrackType` defines the type of each frame found in the Track.\nThe value **SHOULD** be stored on 1 octet.',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        restriction: {
          enum: [
            {
              documentation: {
                '#text': 'An image.',
                '@_lang': 'en',
                '@_purpose': 'definition',
              },
              '@_value': '1',
              '@_label': 'video',
            },
            {
              documentation: {
                '#text': 'Audio samples.',
                '@_lang': 'en',
                '@_purpose': 'definition',
              },
              '@_value': '2',
              '@_label': 'audio',
            },
            {
              documentation: {
                '#text':
                  'A mix of different other TrackType. The codec needs to define how the `Matroska Player` should interpret such data.',
                '@_lang': 'en',
                '@_purpose': 'definition',
              },
              '@_value': '3',
              '@_label': 'complex',
            },
            {
              documentation: {
                '#text': 'An image to be rendered over the video track(s).',
                '@_lang': 'en',
                '@_purpose': 'definition',
              },
              '@_value': '16',
              '@_label': 'logo',
            },
            {
              documentation: {
                '#text': 'Subtitle or closed caption data to be rendered over the video track(s).',
                '@_lang': 'en',
                '@_purpose': 'definition',
              },
              '@_value': '17',
              '@_label': 'subtitle',
            },
            {
              documentation: {
                '#text': 'Interactive button(s) to be rendered over the video track(s).',
                '@_lang': 'en',
                '@_purpose': 'definition',
              },
              '@_value': '18',
              '@_label': 'buttons',
            },
            {
              documentation: {
                '#text': 'Metadata used to control the player of the `Matroska Player`.',
                '@_lang': 'en',
                '@_purpose': 'definition',
              },
              '@_value': '32',
              '@_label': 'control',
            },
            {
              documentation: {
                '#text': 'Timed metadata that can be passed on to the `Matroska Player`.',
                '@_lang': 'en',
                '@_purpose': 'definition',
              },
              '@_value': '33',
              '@_label': 'metadata',
            },
          ],
        },
        extension: [
          {
            '@_type': 'stream copy',
            '@_keep': '1',
          },
          {
            '@_type': 'webmproject.org',
            '@_webm': '1',
          },
        ],
        '@_name': 'TrackType',
        '@_path': '\\Segment\\Tracks\\TrackEntry\\TrackType',
        '@_id': '0x83',
        '@_type': 'uinteger',
        '@_minOccurs': '1',
        '@_maxOccurs': '1',
      },
      {
        documentation: {
          '#text':
            'Set to 1 if the track is usable. It is possible to turn a not usable track into a usable track using chapter codecs or control tracks.',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        extension: [
          {
            '@_type': 'webmproject.org',
            '@_webm': '1',
          },
          {
            '@_type': 'libmatroska',
            '@_cppname': 'TrackFlagEnabled',
          },
        ],
        '@_name': 'FlagEnabled',
        '@_path': '\\Segment\\Tracks\\TrackEntry\\FlagEnabled',
        '@_id': '0xB9',
        '@_type': 'uinteger',
        '@_minver': '2',
        '@_range': '0-1',
        '@_default': '1',
        '@_minOccurs': '1',
        '@_maxOccurs': '1',
      },
      {
        documentation: {
          '#text':
            'Set if that track (audio, video or subs) **SHOULD** be eligible for automatic selection by the player; see (#default-track-selection) for more details.',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        extension: [
          {
            '@_type': 'libmatroska',
            '@_cppname': 'TrackFlagDefault',
          },
          {
            '@_type': 'webmproject.org',
            '@_webm': '1',
          },
        ],
        '@_name': 'FlagDefault',
        '@_path': '\\Segment\\Tracks\\TrackEntry\\FlagDefault',
        '@_id': '0x88',
        '@_type': 'uinteger',
        '@_range': '0-1',
        '@_default': '1',
        '@_minOccurs': '1',
        '@_maxOccurs': '1',
      },
      {
        documentation: {
          '#text':
            "Applies only to subtitles. Set if that track **SHOULD** be eligible for automatic selection by the player if it matches the user's language preference,\neven if the user's preferences would normally not enable subtitles with the selected audio track;\nthis can be used for tracks containing only translations of foreign-language audio or onscreen text.\nSee (#default-track-selection) for more details.",
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        extension: [
          {
            '@_type': 'libmatroska',
            '@_cppname': 'TrackFlagForced',
          },
          {
            '@_type': 'webmproject.org',
            '@_webm': '1',
          },
        ],
        '@_name': 'FlagForced',
        '@_path': '\\Segment\\Tracks\\TrackEntry\\FlagForced',
        '@_id': '0x55AA',
        '@_type': 'uinteger',
        '@_range': '0-1',
        '@_default': '0',
        '@_minOccurs': '1',
        '@_maxOccurs': '1',
      },
      {
        documentation: {
          '#text':
            'Set to 1 if that track is suitable for users with hearing impairments, set to 0 if it is unsuitable for users with hearing impairments.',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        '@_name': 'FlagHearingImpaired',
        '@_path': '\\Segment\\Tracks\\TrackEntry\\FlagHearingImpaired',
        '@_id': '0x55AB',
        '@_type': 'uinteger',
        '@_minver': '4',
        '@_range': '0-1',
        '@_maxOccurs': '1',
      },
      {
        documentation: {
          '#text':
            'Set to 1 if that track is suitable for users with visual impairments, set to 0 if it is unsuitable for users with visual impairments.',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        '@_name': 'FlagVisualImpaired',
        '@_path': '\\Segment\\Tracks\\TrackEntry\\FlagVisualImpaired',
        '@_id': '0x55AC',
        '@_type': 'uinteger',
        '@_minver': '4',
        '@_range': '0-1',
        '@_maxOccurs': '1',
      },
      {
        documentation: {
          '#text':
            'Set to 1 if that track contains textual descriptions of video content, set to 0 if that track does not contain textual descriptions of video content.',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        '@_name': 'FlagTextDescriptions',
        '@_path': '\\Segment\\Tracks\\TrackEntry\\FlagTextDescriptions',
        '@_id': '0x55AD',
        '@_type': 'uinteger',
        '@_minver': '4',
        '@_range': '0-1',
        '@_maxOccurs': '1',
      },
      {
        documentation: {
          '#text':
            "Set to 1 if that track is in the content's original language, set to 0 if it is a translation.",
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        '@_name': 'FlagOriginal',
        '@_path': '\\Segment\\Tracks\\TrackEntry\\FlagOriginal',
        '@_id': '0x55AE',
        '@_type': 'uinteger',
        '@_minver': '4',
        '@_range': '0-1',
        '@_maxOccurs': '1',
      },
      {
        documentation: {
          '#text':
            'Set to 1 if that track contains commentary, set to 0 if it does not contain commentary.',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        '@_name': 'FlagCommentary',
        '@_path': '\\Segment\\Tracks\\TrackEntry\\FlagCommentary',
        '@_id': '0x55AF',
        '@_type': 'uinteger',
        '@_minver': '4',
        '@_range': '0-1',
        '@_maxOccurs': '1',
      },
      {
        documentation: {
          '#text':
            'Set to 1 if the track **MAY** contain blocks using lacing. When set to 0 all blocks **MUST** have their lacing flags set to No lacing; see (#block-lacing) on Block Lacing.',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        extension: [
          {
            '@_type': 'libmatroska',
            '@_cppname': 'TrackFlagLacing',
          },
          {
            '@_type': 'webmproject.org',
            '@_webm': '1',
          },
        ],
        '@_name': 'FlagLacing',
        '@_path': '\\Segment\\Tracks\\TrackEntry\\FlagLacing',
        '@_id': '0x9C',
        '@_type': 'uinteger',
        '@_range': '0-1',
        '@_default': '1',
        '@_minOccurs': '1',
        '@_maxOccurs': '1',
      },
      {
        documentation: {
          '#text':
            'The minimum number of frames a player **SHOULD** be able to cache during playback.\nIf set to 0, the reference pseudo-cache system is not used.',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        extension: {
          '@_type': 'libmatroska',
          '@_cppname': 'TrackMinCache',
        },
        '@_name': 'MinCache',
        '@_path': '\\Segment\\Tracks\\TrackEntry\\MinCache',
        '@_id': '0x6DE7',
        '@_type': 'uinteger',
        '@_default': '0',
        '@_minOccurs': '1',
        '@_maxOccurs': '1',
      },
      {
        documentation: {
          '#text':
            'The maximum cache size necessary to store referenced frames in and the current frame.\n0 means no cache is needed.',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        extension: {
          '@_type': 'libmatroska',
          '@_cppname': 'TrackMaxCache',
        },
        '@_name': 'MaxCache',
        '@_path': '\\Segment\\Tracks\\TrackEntry\\MaxCache',
        '@_id': '0x6DF8',
        '@_type': 'uinteger',
        '@_maxOccurs': '1',
      },
      {
        documentation: {
          '#text':
            'Number of nanoseconds per frame, expressed in Matroska Ticks -- ie in nanoseconds; see (#timestamp-ticks)\n(frame in the Matroska sense -- one Element put into a (Simple)Block).',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        extension: [
          {
            '@_type': 'libmatroska',
            '@_cppname': 'TrackDefaultDuration',
          },
          {
            '@_type': 'stream copy',
            '@_keep': '1',
          },
          {
            '@_type': 'webmproject.org',
            '@_webm': '1',
          },
        ],
        '@_name': 'DefaultDuration',
        '@_path': '\\Segment\\Tracks\\TrackEntry\\DefaultDuration',
        '@_id': '0x23E383',
        '@_type': 'uinteger',
        '@_range': 'not 0',
        '@_maxOccurs': '1',
      },
      {
        documentation: {
          '#text':
            'The period between two successive fields at the output of the decoding process, expressed in Matroska Ticks -- ie in nanoseconds; see (#timestamp-ticks).\nsee (#defaultdecodedfieldduration) for more information',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        extension: [
          {
            '@_type': 'libmatroska',
            '@_cppname': 'TrackDefaultDecodedFieldDuration',
          },
          {
            '@_type': 'stream copy',
            '@_keep': '1',
          },
        ],
        '@_name': 'DefaultDecodedFieldDuration',
        '@_path': '\\Segment\\Tracks\\TrackEntry\\DefaultDecodedFieldDuration',
        '@_id': '0x234E7A',
        '@_type': 'uinteger',
        '@_minver': '4',
        '@_range': 'not 0',
        '@_maxOccurs': '1',
      },
      {
        documentation: {
          '#text':
            'The scale to apply on this track to work at normal speed in relation with other tracks\n(mostly used to adjust video speed when the audio length differs).',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        extension: [
          {
            '@_type': 'libmatroska',
            '@_cppname': 'TrackTimecodeScale',
          },
          {
            '@_type': 'stream copy',
            '@_keep': '1',
          },
        ],
        '@_name': 'TrackTimestampScale',
        '@_path': '\\Segment\\Tracks\\TrackEntry\\TrackTimestampScale',
        '@_id': '0x23314F',
        '@_type': 'float',
        '@_maxver': '3',
        '@_range': '> 0x0p+0',
        '@_default': '0x1p+0',
        '@_minOccurs': '1',
        '@_maxOccurs': '1',
      },
      {
        documentation: {
          '#text':
            "A value to add to the Block's Timestamp, expressed in Matroska Ticks -- ie in nanoseconds; see (#timestamp-ticks).\nThis can be used to adjust the playback offset of a track.",
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        extension: {
          '@_type': 'stream copy',
          '@_keep': '1',
        },
        '@_name': 'TrackOffset',
        '@_path': '\\Segment\\Tracks\\TrackEntry\\TrackOffset',
        '@_id': '0x537F',
        '@_type': 'integer',
        '@_minver': '0',
        '@_maxver': '0',
        '@_default': '0',
        '@_maxOccurs': '1',
      },
      {
        documentation: {
          '#text':
            'The maximum value of BlockAddID ((#blockaddid-element)).\nA value 0 means there is no BlockAdditions ((#blockadditions-element)) for this track.',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        '@_name': 'MaxBlockAdditionID',
        '@_path': '\\Segment\\Tracks\\TrackEntry\\MaxBlockAdditionID',
        '@_id': '0x55EE',
        '@_type': 'uinteger',
        '@_default': '0',
        '@_minOccurs': '1',
        '@_maxOccurs': '1',
      },
      {
        documentation: {
          '#text':
            'Contains elements that extend the track format, by adding content either to each frame,\nwith BlockAddID ((#blockaddid-element)), or to the track as a whole\nwith BlockAddIDExtraData.',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        '@_name': 'BlockAdditionMapping',
        '@_path': '\\Segment\\Tracks\\TrackEntry\\BlockAdditionMapping',
        '@_id': '0x41E4',
        '@_type': 'master',
        '@_minver': '4',
      },
      {
        documentation: [
          {
            '#text':
              'If the track format extension needs content beside frames,\nthe value refers to the BlockAddID ((#blockaddid-element)), value being described.',
            '@_lang': 'en',
            '@_purpose': 'definition',
          },
          {
            '#text':
              'To keep MaxBlockAdditionID as low as possible, small values **SHOULD** be used.',
            '@_lang': 'en',
            '@_purpose': 'usage notes',
          },
        ],
        '@_name': 'BlockAddIDValue',
        '@_path': '\\Segment\\Tracks\\TrackEntry\\BlockAdditionMapping\\BlockAddIDValue',
        '@_id': '0x41F0',
        '@_type': 'uinteger',
        '@_minver': '4',
        '@_range': '>=2',
        '@_maxOccurs': '1',
      },
      {
        documentation: {
          '#text':
            'A human-friendly name describing the type of BlockAdditional data,\nas defined by the associated Block Additional Mapping.',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        '@_name': 'BlockAddIDName',
        '@_path': '\\Segment\\Tracks\\TrackEntry\\BlockAdditionMapping\\BlockAddIDName',
        '@_id': '0x41A4',
        '@_type': 'string',
        '@_minver': '4',
        '@_maxOccurs': '1',
      },
      {
        documentation: [
          {
            '#text':
              'Stores the registered identifier of the Block Additional Mapping\nto define how the BlockAdditional data should be handled.',
            '@_lang': 'en',
            '@_purpose': 'definition',
          },
          {
            '#text':
              'If BlockAddIDType is 0, the BlockAddIDValue and corresponding BlockAddID values **MUST** be 1.',
            '@_lang': 'en',
            '@_purpose': 'usage notes',
          },
        ],
        '@_name': 'BlockAddIDType',
        '@_path': '\\Segment\\Tracks\\TrackEntry\\BlockAdditionMapping\\BlockAddIDType',
        '@_id': '0x41E7',
        '@_type': 'uinteger',
        '@_minver': '4',
        '@_default': '0',
        '@_minOccurs': '1',
        '@_maxOccurs': '1',
      },
      {
        documentation: {
          '#text':
            'Extra binary data that the BlockAddIDType can use to interpret the BlockAdditional data.\nThe interpretation of the binary data depends on the BlockAddIDType value and the corresponding Block Additional Mapping.',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        '@_name': 'BlockAddIDExtraData',
        '@_path': '\\Segment\\Tracks\\TrackEntry\\BlockAdditionMapping\\BlockAddIDExtraData',
        '@_id': '0x41ED',
        '@_type': 'binary',
        '@_minver': '4',
        '@_maxOccurs': '1',
      },
      {
        documentation: {
          '#text': 'A human-readable track name.',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        extension: [
          {
            '@_type': 'libmatroska',
            '@_cppname': 'TrackName',
          },
          {
            '@_type': 'webmproject.org',
            '@_webm': '1',
          },
        ],
        '@_name': 'Name',
        '@_path': '\\Segment\\Tracks\\TrackEntry\\Name',
        '@_id': '0x536E',
        '@_type': 'utf-8',
        '@_maxOccurs': '1',
      },
      {
        documentation: {
          '#text':
            'Specifies the language of the track in the Matroska languages form;\nsee (#language-codes) on language codes.\nThis Element **MUST** be ignored if the LanguageBCP47 Element is used in the same TrackEntry.',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        extension: [
          {
            '@_type': 'libmatroska',
            '@_cppname': 'TrackLanguage',
          },
          {
            '@_type': 'webmproject.org',
            '@_webm': '1',
          },
        ],
        '@_name': 'Language',
        '@_path': '\\Segment\\Tracks\\TrackEntry\\Language',
        '@_id': '0x22B59C',
        '@_type': 'string',
        '@_default': 'eng',
        '@_minOccurs': '1',
        '@_maxOccurs': '1',
      },
      {
        documentation: {
          '#text':
            'Specifies the language of the track according to [@!BCP47]\nand using the IANA Language Subtag Registry [@!IANALangRegistry].\nIf this Element is used, then any Language Elements used in the same TrackEntry **MUST** be ignored.',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        extension: {
          '@_type': 'libmatroska',
          '@_cppname': 'LanguageIETF',
        },
        '@_name': 'LanguageBCP47',
        '@_path': '\\Segment\\Tracks\\TrackEntry\\LanguageBCP47',
        '@_id': '0x22B59D',
        '@_type': 'string',
        '@_minver': '4',
        '@_maxOccurs': '1',
      },
      {
        documentation: {
          '#text': 'An ID corresponding to the codec,\nsee [@!MatroskaCodec] for more info.',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        extension: [
          {
            '@_type': 'stream copy',
            '@_keep': '1',
          },
          {
            '@_type': 'webmproject.org',
            '@_webm': '1',
          },
        ],
        '@_name': 'CodecID',
        '@_path': '\\Segment\\Tracks\\TrackEntry\\CodecID',
        '@_id': '0x86',
        '@_type': 'string',
        '@_minOccurs': '1',
        '@_maxOccurs': '1',
      },
      {
        documentation: {
          '#text': 'Private data only known to the codec.',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        extension: [
          {
            '@_type': 'stream copy',
            '@_keep': '1',
          },
          {
            '@_type': 'webmproject.org',
            '@_webm': '1',
          },
        ],
        '@_name': 'CodecPrivate',
        '@_path': '\\Segment\\Tracks\\TrackEntry\\CodecPrivate',
        '@_id': '0x63A2',
        '@_type': 'binary',
        '@_maxOccurs': '1',
      },
      {
        documentation: {
          '#text': 'A human-readable string specifying the codec.',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        extension: {
          '@_type': 'webmproject.org',
          '@_webm': '1',
        },
        '@_name': 'CodecName',
        '@_path': '\\Segment\\Tracks\\TrackEntry\\CodecName',
        '@_id': '0x258688',
        '@_type': 'utf-8',
        '@_maxOccurs': '1',
      },
      {
        documentation: [
          {
            '#text': 'The UID of an attachment that is used by this codec.',
            '@_lang': 'en',
            '@_purpose': 'definition',
          },
          {
            '#text':
              'The value **MUST** match the `FileUID` value of an attachment found in this Segment.',
            '@_lang': 'en',
            '@_purpose': 'usage notes',
          },
        ],
        extension: {
          '@_type': 'libmatroska',
          '@_cppname': 'TrackAttachmentLink',
        },
        '@_name': 'AttachmentLink',
        '@_path': '\\Segment\\Tracks\\TrackEntry\\AttachmentLink',
        '@_id': '0x7446',
        '@_type': 'uinteger',
        '@_maxver': '3',
        '@_range': 'not 0',
        '@_maxOccurs': '1',
      },
      {
        documentation: {
          '#text': 'A string describing the encoding setting used.',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        '@_name': 'CodecSettings',
        '@_path': '\\Segment\\Tracks\\TrackEntry\\CodecSettings',
        '@_id': '0x3A9697',
        '@_type': 'utf-8',
        '@_minver': '0',
        '@_maxver': '0',
        '@_maxOccurs': '1',
      },
      {
        documentation: {
          '#text': 'A URL to find information about the codec used.',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        '@_name': 'CodecInfoURL',
        '@_path': '\\Segment\\Tracks\\TrackEntry\\CodecInfoURL',
        '@_id': '0x3B4040',
        '@_type': 'string',
        '@_minver': '0',
        '@_maxver': '0',
      },
      {
        documentation: {
          '#text': 'A URL to download about the codec used.',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        '@_name': 'CodecDownloadURL',
        '@_path': '\\Segment\\Tracks\\TrackEntry\\CodecDownloadURL',
        '@_id': '0x26B240',
        '@_type': 'string',
        '@_minver': '0',
        '@_maxver': '0',
      },
      {
        documentation: {
          '#text': 'Set to 1 if the codec can decode potentially damaged data.',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        '@_name': 'CodecDecodeAll',
        '@_path': '\\Segment\\Tracks\\TrackEntry\\CodecDecodeAll',
        '@_id': '0xAA',
        '@_type': 'uinteger',
        '@_maxver': '0',
        '@_range': '0-1',
        '@_default': '1',
        '@_minOccurs': '1',
        '@_maxOccurs': '1',
      },
      {
        documentation: {
          '#text':
            'Specify that this track is an overlay track for the Track specified (in the u-integer).\nThat means when this track has a gap, see (#silenttracks-element) on SilentTracks,\nthe overlay track **SHOULD** be used instead. The order of multiple TrackOverlay matters, the first one is the one that **SHOULD** be used.\nIf not found it **SHOULD** be the second, etc.',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        '@_name': 'TrackOverlay',
        '@_path': '\\Segment\\Tracks\\TrackEntry\\TrackOverlay',
        '@_id': '0x6FAB',
        '@_type': 'uinteger',
      },
      {
        documentation: {
          '#text':
            'CodecDelay is The codec-built-in delay, expressed in Matroska Ticks -- ie in nanoseconds; see (#timestamp-ticks).\nIt represents the amount of codec samples that will be discarded by the decoder during playback.\nThis timestamp value **MUST** be subtracted from each frame timestamp in order to get the timestamp that will be actually played.\nThe value **SHOULD** be small so the muxing of tracks with the same actual timestamp are in the same Cluster.',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        extension: [
          {
            '@_type': 'webmproject.org',
            '@_webm': '1',
          },
          {
            '@_type': 'stream copy',
            '@_keep': '1',
          },
        ],
        '@_name': 'CodecDelay',
        '@_path': '\\Segment\\Tracks\\TrackEntry\\CodecDelay',
        '@_id': '0x56AA',
        '@_type': 'uinteger',
        '@_minver': '4',
        '@_default': '0',
        '@_minOccurs': '1',
        '@_maxOccurs': '1',
      },
      {
        documentation: {
          '#text':
            'After a discontinuity, SeekPreRoll is the duration of the data\nthe decoder **MUST** decode before the decoded data is valid, expressed in Matroska Ticks -- ie in nanoseconds; see (#timestamp-ticks).',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        extension: [
          {
            '@_type': 'webmproject.org',
            '@_webm': '1',
          },
          {
            '@_type': 'stream copy',
            '@_keep': '1',
          },
        ],
        '@_name': 'SeekPreRoll',
        '@_path': '\\Segment\\Tracks\\TrackEntry\\SeekPreRoll',
        '@_id': '0x56BB',
        '@_type': 'uinteger',
        '@_minver': '4',
        '@_default': '0',
        '@_minOccurs': '1',
        '@_maxOccurs': '1',
      },
      {
        documentation: [
          {
            '#text':
              'The mapping between this `TrackEntry` and a track value in the given Chapter Codec.',
            '@_lang': 'en',
            '@_purpose': 'definition',
          },
          {
            '#text':
              'Chapter Codec may need to address content in specific track, but they may not know of the way to identify tracks in Matroska.\nThis element and its child elements add a way to map the internal tracks known to the Chapter Codec to the track IDs in Matroska.\nThis allows remuxing a file with Chapter Codec without changing the content of the codec data, just the track mapping.',
            '@_lang': 'en',
            '@_purpose': 'rationale',
          },
        ],
        '@_name': 'TrackTranslate',
        '@_path': '\\Segment\\Tracks\\TrackEntry\\TrackTranslate',
        '@_id': '0x6624',
        '@_type': 'master',
      },
      {
        documentation: {
          '#text':
            'The binary value used to represent this `TrackEntry` in the chapter codec data.\nThe format depends on the `ChapProcessCodecID` used; see (#chapprocesscodecid-element).',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        '@_name': 'TrackTranslateTrackID',
        '@_path': '\\Segment\\Tracks\\TrackEntry\\TrackTranslate\\TrackTranslateTrackID',
        '@_id': '0x66A5',
        '@_type': 'binary',
        '@_minOccurs': '1',
        '@_maxOccurs': '1',
      },
      {
        documentation: {
          '#text':
            'This `TrackTranslate` applies to this chapter codec of the given chapter edition(s); see (#chapprocesscodecid-element).',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        restriction: {
          enum: [
            {
              documentation: {
                '#text': 'Chapter commands using the Matroska Script codec.',
                '@_lang': 'en',
                '@_purpose': 'definition',
              },
              '@_value': '0',
              '@_label': 'Matroska Script',
            },
            {
              documentation: {
                '#text': 'Chapter commands using the DVD-like codec.',
                '@_lang': 'en',
                '@_purpose': 'definition',
              },
              '@_value': '1',
              '@_label': 'DVD-menu',
            },
          ],
        },
        '@_name': 'TrackTranslateCodec',
        '@_path': '\\Segment\\Tracks\\TrackEntry\\TrackTranslate\\TrackTranslateCodec',
        '@_id': '0x66BF',
        '@_type': 'uinteger',
        '@_minOccurs': '1',
        '@_maxOccurs': '1',
      },
      {
        documentation: [
          {
            '#text': 'Specify a chapter edition UID on which this `TrackTranslate` applies.',
            '@_lang': 'en',
            '@_purpose': 'definition',
          },
          {
            '#text':
              'When no `TrackTranslateEditionUID` is specified in the `TrackTranslate`, the `TrackTranslate` applies to all chapter editions found in the Segment using the given `TrackTranslateCodec`.',
            '@_lang': 'en',
            '@_purpose': 'usage notes',
          },
        ],
        '@_name': 'TrackTranslateEditionUID',
        '@_path': '\\Segment\\Tracks\\TrackEntry\\TrackTranslate\\TrackTranslateEditionUID',
        '@_id': '0x66FC',
        '@_type': 'uinteger',
      },
      {
        documentation: {
          '#text': 'Video settings.',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        extension: [
          {
            '@_type': 'libmatroska',
            '@_cppname': 'TrackVideo',
          },
          {
            '@_type': 'webmproject.org',
            '@_webm': '1',
          },
        ],
        '@_name': 'Video',
        '@_path': '\\Segment\\Tracks\\TrackEntry\\Video',
        '@_id': '0xE0',
        '@_type': 'master',
        '@_maxOccurs': '1',
      },
      {
        documentation: {
          '#text': 'Specify whether the video frames in this track are interlaced or not.',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        restriction: {
          enum: [
            {
              documentation: [
                {
                  '#text': 'Unknown status.',
                  '@_lang': 'en',
                  '@_purpose': 'definition',
                },
                {
                  '#text': 'This value **SHOULD** be avoided.',
                  '@_lang': 'en',
                  '@_purpose': 'usage notes',
                },
              ],
              '@_value': '0',
              '@_label': 'undetermined',
            },
            {
              documentation: {
                '#text': 'Interlaced frames.',
                '@_lang': 'en',
                '@_purpose': 'definition',
              },
              '@_value': '1',
              '@_label': 'interlaced',
            },
            {
              documentation: {
                '#text': 'No interlacing.',
                '@_lang': 'en',
                '@_purpose': 'definition',
              },
              '@_value': '2',
              '@_label': 'progressive',
            },
          ],
        },
        extension: [
          {
            '@_type': 'webmproject.org',
            '@_webm': '1',
          },
          {
            '@_type': 'libmatroska',
            '@_cppname': 'VideoFlagInterlaced',
          },
          {
            '@_type': 'stream copy',
            '@_keep': '1',
          },
        ],
        '@_name': 'FlagInterlaced',
        '@_path': '\\Segment\\Tracks\\TrackEntry\\Video\\FlagInterlaced',
        '@_id': '0x9A',
        '@_type': 'uinteger',
        '@_minver': '2',
        '@_default': '0',
        '@_minOccurs': '1',
        '@_maxOccurs': '1',
      },
      {
        documentation: [
          {
            '#text': 'Specify the field ordering of video frames in this track.',
            '@_lang': 'en',
            '@_purpose': 'definition',
          },
          {
            '#text': 'If FlagInterlaced is not set to 1, this Element **MUST** be ignored.',
            '@_lang': 'en',
            '@_purpose': 'usage notes',
          },
        ],
        restriction: {
          enum: [
            {
              documentation: [
                {
                  '#text': 'Interlaced frames.',
                  '@_lang': 'en',
                  '@_purpose': 'definition',
                },
                {
                  '#text':
                    'This value **SHOULD** be avoided, setting FlagInterlaced to 2 is sufficient.',
                  '@_lang': 'en',
                  '@_purpose': 'usage notes',
                },
              ],
              '@_value': '0',
              '@_label': 'progressive',
            },
            {
              documentation: {
                '#text': 'Top field displayed first. Top field stored first.',
                '@_lang': 'en',
                '@_purpose': 'definition',
              },
              '@_value': '1',
              '@_label': 'tff',
            },
            {
              documentation: [
                {
                  '#text': 'Unknown field order.',
                  '@_lang': 'en',
                  '@_purpose': 'definition',
                },
                {
                  '#text': 'This value **SHOULD** be avoided.',
                  '@_lang': 'en',
                  '@_purpose': 'usage notes',
                },
              ],
              '@_value': '2',
              '@_label': 'undetermined',
            },
            {
              documentation: {
                '#text': 'Bottom field displayed first. Bottom field stored first.',
                '@_lang': 'en',
                '@_purpose': 'definition',
              },
              '@_value': '6',
              '@_label': 'bff',
            },
            {
              documentation: {
                '#text':
                  'Top field displayed first. Fields are interleaved in storage\nwith the top line of the top field stored first.',
                '@_lang': 'en',
                '@_purpose': 'definition',
              },
              '@_value': '9',
              '@_label': 'bff(swapped)',
            },
            {
              documentation: {
                '#text':
                  'Bottom field displayed first. Fields are interleaved in storage\nwith the top line of the top field stored first.',
                '@_lang': 'en',
                '@_purpose': 'definition',
              },
              '@_value': '14',
              '@_label': 'tff(swapped)',
            },
          ],
        },
        extension: [
          {
            '@_type': 'libmatroska',
            '@_cppname': 'VideoFieldOrder',
          },
          {
            '@_type': 'stream copy',
            '@_keep': '1',
          },
        ],
        '@_name': 'FieldOrder',
        '@_path': '\\Segment\\Tracks\\TrackEntry\\Video\\FieldOrder',
        '@_id': '0x9D',
        '@_type': 'uinteger',
        '@_minver': '4',
        '@_default': '2',
        '@_minOccurs': '1',
        '@_maxOccurs': '1',
      },
      {
        documentation: {
          '#text':
            'Stereo-3D video mode. There are some more details in (#multi-planar-and-3d-videos).',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        restriction: {
          enum: [
            {
              '@_value': '0',
              '@_label': 'mono',
            },
            {
              '@_value': '1',
              '@_label': 'side by side (left eye first)',
            },
            {
              '@_value': '2',
              '@_label': 'top - bottom (right eye is first)',
            },
            {
              '@_value': '3',
              '@_label': 'top - bottom (left eye is first)',
            },
            {
              '@_value': '4',
              '@_label': 'checkboard (right eye is first)',
            },
            {
              '@_value': '5',
              '@_label': 'checkboard (left eye is first)',
            },
            {
              '@_value': '6',
              '@_label': 'row interleaved (right eye is first)',
            },
            {
              '@_value': '7',
              '@_label': 'row interleaved (left eye is first)',
            },
            {
              '@_value': '8',
              '@_label': 'column interleaved (right eye is first)',
            },
            {
              '@_value': '9',
              '@_label': 'column interleaved (left eye is first)',
            },
            {
              '@_value': '10',
              '@_label': 'anaglyph (cyan/red)',
            },
            {
              '@_value': '11',
              '@_label': 'side by side (right eye first)',
            },
            {
              '@_value': '12',
              '@_label': 'anaglyph (green/magenta)',
            },
            {
              '@_value': '13',
              '@_label': 'both eyes laced in one Block (left eye is first)',
            },
            {
              '@_value': '14',
              '@_label': 'both eyes laced in one Block (right eye is first)',
            },
          ],
        },
        extension: [
          {
            '@_type': 'webmproject.org',
            '@_webm': '1',
          },
          {
            '@_type': 'libmatroska',
            '@_cppname': 'VideoStereoMode',
          },
          {
            '@_type': 'stream copy',
            '@_keep': '1',
          },
        ],
        '@_name': 'StereoMode',
        '@_path': '\\Segment\\Tracks\\TrackEntry\\Video\\StereoMode',
        '@_id': '0x53B8',
        '@_type': 'uinteger',
        '@_minver': '3',
        '@_default': '0',
        '@_minOccurs': '1',
        '@_maxOccurs': '1',
      },
      {
        documentation: {
          '#text':
            'Indicate whether the BlockAdditional Element with BlockAddID of "1" contains Alpha data, as defined by to the Codec Mapping for the `CodecID`.\nUndefined values **SHOULD NOT** be used as the behavior of known implementations is different (considered either as 0 or 1).',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        restriction: {
          enum: [
            {
              documentation: {
                '#text':
                  'The BlockAdditional Element with BlockAddID of "1" does not exist or **SHOULD NOT** be considered as containing such data.',
                '@_lang': 'en',
                '@_purpose': 'definition',
              },
              '@_value': '0',
              '@_label': 'none',
            },
            {
              documentation: {
                '#text':
                  'The BlockAdditional Element with BlockAddID of "1" contains alpha channel data.',
                '@_lang': 'en',
                '@_purpose': 'definition',
              },
              '@_value': '1',
              '@_label': 'present',
            },
          ],
        },
        extension: [
          {
            '@_type': 'webmproject.org',
            '@_webm': '1',
          },
          {
            '@_type': 'libmatroska',
            '@_cppname': 'VideoAlphaMode',
          },
          {
            '@_type': 'stream copy',
            '@_keep': '1',
          },
        ],
        '@_name': 'AlphaMode',
        '@_path': '\\Segment\\Tracks\\TrackEntry\\Video\\AlphaMode',
        '@_id': '0x53C0',
        '@_type': 'uinteger',
        '@_minver': '3',
        '@_default': '0',
        '@_minOccurs': '1',
        '@_maxOccurs': '1',
      },
      {
        documentation: [
          {
            '#text': 'Bogus StereoMode value used in old versions of libmatroska.',
            '@_lang': 'en',
            '@_purpose': 'definition',
          },
          {
            '#text':
              'This Element **MUST NOT** be used. It was an incorrect value used in libmatroska up to 0.9.0.',
            '@_lang': 'en',
            '@_purpose': 'usage notes',
          },
        ],
        restriction: {
          enum: [
            {
              '@_value': '0',
              '@_label': 'mono',
            },
            {
              '@_value': '1',
              '@_label': 'right eye',
            },
            {
              '@_value': '2',
              '@_label': 'left eye',
            },
            {
              '@_value': '3',
              '@_label': 'both eyes',
            },
          ],
        },
        '@_name': 'OldStereoMode',
        '@_path': '\\Segment\\Tracks\\TrackEntry\\Video\\OldStereoMode',
        '@_id': '0x53B9',
        '@_type': 'uinteger',
        '@_minver': '1',
        '@_maxver': '2',
        '@_maxOccurs': '1',
      },
      {
        documentation: {
          '#text': 'Width of the encoded video frames in pixels.',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        extension: [
          {
            '@_type': 'libmatroska',
            '@_cppname': 'VideoPixelWidth',
          },
          {
            '@_type': 'stream copy',
            '@_keep': '1',
          },
          {
            '@_type': 'webmproject.org',
            '@_webm': '1',
          },
        ],
        '@_name': 'PixelWidth',
        '@_path': '\\Segment\\Tracks\\TrackEntry\\Video\\PixelWidth',
        '@_id': '0xB0',
        '@_type': 'uinteger',
        '@_range': 'not 0',
        '@_minOccurs': '1',
        '@_maxOccurs': '1',
      },
      {
        documentation: {
          '#text': 'Height of the encoded video frames in pixels.',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        extension: [
          {
            '@_type': 'libmatroska',
            '@_cppname': 'VideoPixelHeight',
          },
          {
            '@_type': 'stream copy',
            '@_keep': '1',
          },
          {
            '@_type': 'webmproject.org',
            '@_webm': '1',
          },
        ],
        '@_name': 'PixelHeight',
        '@_path': '\\Segment\\Tracks\\TrackEntry\\Video\\PixelHeight',
        '@_id': '0xBA',
        '@_type': 'uinteger',
        '@_range': 'not 0',
        '@_minOccurs': '1',
        '@_maxOccurs': '1',
      },
      {
        documentation: {
          '#text': 'The number of video pixels to remove at the bottom of the image.',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        extension: [
          {
            '@_type': 'libmatroska',
            '@_cppname': 'VideoPixelCropBottom',
          },
          {
            '@_type': 'stream copy',
            '@_keep': '1',
          },
          {
            '@_type': 'webmproject.org',
            '@_webm': '1',
          },
        ],
        '@_name': 'PixelCropBottom',
        '@_path': '\\Segment\\Tracks\\TrackEntry\\Video\\PixelCropBottom',
        '@_id': '0x54AA',
        '@_type': 'uinteger',
        '@_default': '0',
        '@_minOccurs': '1',
        '@_maxOccurs': '1',
      },
      {
        documentation: {
          '#text': 'The number of video pixels to remove at the top of the image.',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        extension: [
          {
            '@_type': 'libmatroska',
            '@_cppname': 'VideoPixelCropTop',
          },
          {
            '@_type': 'stream copy',
            '@_keep': '1',
          },
          {
            '@_type': 'webmproject.org',
            '@_webm': '1',
          },
        ],
        '@_name': 'PixelCropTop',
        '@_path': '\\Segment\\Tracks\\TrackEntry\\Video\\PixelCropTop',
        '@_id': '0x54BB',
        '@_type': 'uinteger',
        '@_default': '0',
        '@_minOccurs': '1',
        '@_maxOccurs': '1',
      },
      {
        documentation: {
          '#text': 'The number of video pixels to remove on the left of the image.',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        extension: [
          {
            '@_type': 'libmatroska',
            '@_cppname': 'VideoPixelCropLeft',
          },
          {
            '@_type': 'stream copy',
            '@_keep': '1',
          },
          {
            '@_type': 'webmproject.org',
            '@_webm': '1',
          },
        ],
        '@_name': 'PixelCropLeft',
        '@_path': '\\Segment\\Tracks\\TrackEntry\\Video\\PixelCropLeft',
        '@_id': '0x54CC',
        '@_type': 'uinteger',
        '@_default': '0',
        '@_minOccurs': '1',
        '@_maxOccurs': '1',
      },
      {
        documentation: {
          '#text': 'The number of video pixels to remove on the right of the image.',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        extension: [
          {
            '@_type': 'libmatroska',
            '@_cppname': 'VideoPixelCropRight',
          },
          {
            '@_type': 'stream copy',
            '@_keep': '1',
          },
          {
            '@_type': 'webmproject.org',
            '@_webm': '1',
          },
        ],
        '@_name': 'PixelCropRight',
        '@_path': '\\Segment\\Tracks\\TrackEntry\\Video\\PixelCropRight',
        '@_id': '0x54DD',
        '@_type': 'uinteger',
        '@_default': '0',
        '@_minOccurs': '1',
        '@_maxOccurs': '1',
      },
      {
        documentation: {
          '#text':
            'Width of the video frames to display. Applies to the video frame after cropping (PixelCrop* Elements).',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        implementation_note: {
          '#text':
            'If the DisplayUnit of the same TrackEntry is 0, then the default value for DisplayWidth is equal to\nPixelWidth - PixelCropLeft - PixelCropRight, else there is no default value.',
          '@_note_attribute': 'default',
        },
        extension: [
          {
            '@_type': 'libmatroska',
            '@_cppname': 'VideoDisplayWidth',
          },
          {
            '@_type': 'stream copy',
            '@_keep': '1',
          },
          {
            '@_type': 'webmproject.org',
            '@_webm': '1',
          },
        ],
        '@_name': 'DisplayWidth',
        '@_path': '\\Segment\\Tracks\\TrackEntry\\Video\\DisplayWidth',
        '@_id': '0x54B0',
        '@_type': 'uinteger',
        '@_range': 'not 0',
        '@_maxOccurs': '1',
      },
      {
        documentation: {
          '#text':
            'Height of the video frames to display. Applies to the video frame after cropping (PixelCrop* Elements).',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        implementation_note: {
          '#text':
            'If the DisplayUnit of the same TrackEntry is 0, then the default value for DisplayHeight is equal to\nPixelHeight - PixelCropTop - PixelCropBottom, else there is no default value.',
          '@_note_attribute': 'default',
        },
        extension: [
          {
            '@_type': 'libmatroska',
            '@_cppname': 'VideoDisplayHeight',
          },
          {
            '@_type': 'stream copy',
            '@_keep': '1',
          },
          {
            '@_type': 'webmproject.org',
            '@_webm': '1',
          },
        ],
        '@_name': 'DisplayHeight',
        '@_path': '\\Segment\\Tracks\\TrackEntry\\Video\\DisplayHeight',
        '@_id': '0x54BA',
        '@_type': 'uinteger',
        '@_range': 'not 0',
        '@_maxOccurs': '1',
      },
      {
        documentation: {
          '#text': 'How DisplayWidth & DisplayHeight are interpreted.',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        restriction: {
          enum: [
            {
              '@_value': '0',
              '@_label': 'pixels',
            },
            {
              '@_value': '1',
              '@_label': 'centimeters',
            },
            {
              '@_value': '2',
              '@_label': 'inches',
            },
            {
              '@_value': '3',
              '@_label': 'display aspect ratio',
            },
            {
              '@_value': '4',
              '@_label': 'unknown',
            },
          ],
        },
        extension: [
          {
            '@_type': 'libmatroska',
            '@_cppname': 'VideoDisplayUnit',
          },
          {
            '@_type': 'webmproject.org',
            '@_webm': '1',
          },
        ],
        '@_name': 'DisplayUnit',
        '@_path': '\\Segment\\Tracks\\TrackEntry\\Video\\DisplayUnit',
        '@_id': '0x54B2',
        '@_type': 'uinteger',
        '@_default': '0',
        '@_minOccurs': '1',
        '@_maxOccurs': '1',
      },
      {
        documentation: {
          '#text': 'Specify the possible modifications to the aspect ratio.',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        restriction: {
          enum: [
            {
              '@_value': '0',
              '@_label': 'free resizing',
            },
            {
              '@_value': '1',
              '@_label': 'keep aspect ratio',
            },
            {
              '@_value': '2',
              '@_label': 'fixed',
            },
          ],
        },
        extension: {
          '@_type': 'libmatroska',
          '@_cppname': 'VideoAspectRatio',
        },
        '@_name': 'AspectRatioType',
        '@_path': '\\Segment\\Tracks\\TrackEntry\\Video\\AspectRatioType',
        '@_id': '0x54B3',
        '@_type': 'uinteger',
        '@_minver': '0',
        '@_maxver': '0',
        '@_default': '0',
        '@_maxOccurs': '1',
      },
      {
        documentation: {
          '#text':
            "Specify the uncompressed pixel format used for the Track's data as a FourCC.\nThis value is similar in scope to the biCompression value of AVI's `BITMAPINFO` [@?AVIFormat]. See the YUV video formats [@?FourCC-YUV] and RGB video formats [@?FourCC-RGB] for common values.",
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        implementation_note: {
          '#text':
            'UncompressedFourCC **MUST** be set (minOccurs=1) in TrackEntry, when the CodecID Element of the TrackEntry is set to "V_UNCOMPRESSED".',
          '@_note_attribute': 'minOccurs',
        },
        extension: [
          {
            '@_type': 'libmatroska',
            '@_cppname': 'VideoColourSpace',
          },
          {
            '@_type': 'stream copy',
            '@_keep': '1',
          },
        ],
        '@_name': 'UncompressedFourCC',
        '@_path': '\\Segment\\Tracks\\TrackEntry\\Video\\UncompressedFourCC',
        '@_id': '0x2EB524',
        '@_type': 'binary',
        '@_length': '4',
        '@_maxOccurs': '1',
      },
      {
        documentation: {
          '#text': 'Gamma Value.',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        extension: {
          '@_type': 'libmatroska',
          '@_cppname': 'VideoGamma',
        },
        '@_name': 'GammaValue',
        '@_path': '\\Segment\\Tracks\\TrackEntry\\Video\\GammaValue',
        '@_id': '0x2FB523',
        '@_type': 'float',
        '@_minver': '0',
        '@_maxver': '0',
        '@_range': '> 0x0p+0',
        '@_maxOccurs': '1',
      },
      {
        documentation: {
          '#text':
            'Number of frames per second. This value is Informational only. It is intended for constant frame rate streams, and **SHOULD NOT** be used for a variable frame rate TrackEntry.',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        extension: {
          '@_type': 'libmatroska',
          '@_cppname': 'VideoFrameRate',
        },
        '@_name': 'FrameRate',
        '@_path': '\\Segment\\Tracks\\TrackEntry\\Video\\FrameRate',
        '@_id': '0x2383E3',
        '@_type': 'float',
        '@_minver': '0',
        '@_maxver': '0',
        '@_range': '> 0x0p+0',
        '@_maxOccurs': '1',
      },
      {
        documentation: {
          '#text': 'Settings describing the colour format.',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        extension: [
          {
            '@_type': 'webmproject.org',
            '@_webm': '1',
          },
          {
            '@_type': 'libmatroska',
            '@_cppname': 'VideoColour',
          },
          {
            '@_type': 'stream copy',
            '@_keep': '1',
          },
        ],
        '@_name': 'Colour',
        '@_path': '\\Segment\\Tracks\\TrackEntry\\Video\\Colour',
        '@_id': '0x55B0',
        '@_type': 'master',
        '@_minver': '4',
        '@_maxOccurs': '1',
      },
      {
        documentation: {
          '#text':
            'The Matrix Coefficients of the video used to derive luma and chroma values from red, green, and blue color primaries.\nFor clarity, the value and meanings for MatrixCoefficients are adopted from Table 4 of ISO/IEC 23001-8:2016 or ITU-T H.273.',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        restriction: {
          enum: [
            {
              '@_value': '0',
              '@_label': 'Identity',
            },
            {
              '@_value': '1',
              '@_label': 'ITU-R BT.709',
            },
            {
              '@_value': '2',
              '@_label': 'unspecified',
            },
            {
              '@_value': '3',
              '@_label': 'reserved',
            },
            {
              '@_value': '4',
              '@_label': 'US FCC 73.682',
            },
            {
              '@_value': '5',
              '@_label': 'ITU-R BT.470BG',
            },
            {
              '@_value': '6',
              '@_label': 'SMPTE 170M',
            },
            {
              '@_value': '7',
              '@_label': 'SMPTE 240M',
            },
            {
              '@_value': '8',
              '@_label': 'YCoCg',
            },
            {
              '@_value': '9',
              '@_label': 'BT2020 Non-constant Luminance',
            },
            {
              '@_value': '10',
              '@_label': 'BT2020 Constant Luminance',
            },
            {
              '@_value': '11',
              '@_label': 'SMPTE ST 2085',
            },
            {
              '@_value': '12',
              '@_label': 'Chroma-derived Non-constant Luminance',
            },
            {
              '@_value': '13',
              '@_label': 'Chroma-derived Constant Luminance',
            },
            {
              '@_value': '14',
              '@_label': 'ITU-R BT.2100-0',
            },
          ],
        },
        extension: [
          {
            '@_type': 'webmproject.org',
            '@_webm': '1',
          },
          {
            '@_type': 'libmatroska',
            '@_cppname': 'VideoColourMatrix',
          },
          {
            '@_type': 'stream copy',
            '@_keep': '1',
          },
        ],
        '@_name': 'MatrixCoefficients',
        '@_path': '\\Segment\\Tracks\\TrackEntry\\Video\\Colour\\MatrixCoefficients',
        '@_id': '0x55B1',
        '@_type': 'uinteger',
        '@_minver': '4',
        '@_default': '2',
        '@_minOccurs': '1',
        '@_maxOccurs': '1',
      },
      {
        documentation: {
          '#text':
            'Number of decoded bits per channel. A value of 0 indicates that the BitsPerChannel is unspecified.',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        extension: [
          {
            '@_type': 'webmproject.org',
            '@_webm': '1',
          },
          {
            '@_type': 'libmatroska',
            '@_cppname': 'VideoBitsPerChannel',
          },
          {
            '@_type': 'stream copy',
            '@_keep': '1',
          },
        ],
        '@_name': 'BitsPerChannel',
        '@_path': '\\Segment\\Tracks\\TrackEntry\\Video\\Colour\\BitsPerChannel',
        '@_id': '0x55B2',
        '@_type': 'uinteger',
        '@_minver': '4',
        '@_default': '0',
        '@_minOccurs': '1',
        '@_maxOccurs': '1',
      },
      {
        documentation: {
          '#text':
            'The amount of pixels to remove in the Cr and Cb channels for every pixel not removed horizontally.\nExample: For video with 4:2:0 chroma subsampling, the ChromaSubsamplingHorz **SHOULD** be set to 1.',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        extension: [
          {
            '@_type': 'webmproject.org',
            '@_webm': '1',
          },
          {
            '@_type': 'libmatroska',
            '@_cppname': 'VideoChromaSubsampHorz',
          },
          {
            '@_type': 'stream copy',
            '@_keep': '1',
          },
        ],
        '@_name': 'ChromaSubsamplingHorz',
        '@_path': '\\Segment\\Tracks\\TrackEntry\\Video\\Colour\\ChromaSubsamplingHorz',
        '@_id': '0x55B3',
        '@_type': 'uinteger',
        '@_minver': '4',
        '@_maxOccurs': '1',
      },
      {
        documentation: {
          '#text':
            'The amount of pixels to remove in the Cr and Cb channels for every pixel not removed vertically.\nExample: For video with 4:2:0 chroma subsampling, the ChromaSubsamplingVert **SHOULD** be set to 1.',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        extension: [
          {
            '@_type': 'webmproject.org',
            '@_webm': '1',
          },
          {
            '@_type': 'libmatroska',
            '@_cppname': 'VideoChromaSubsampVert',
          },
          {
            '@_type': 'stream copy',
            '@_keep': '1',
          },
        ],
        '@_name': 'ChromaSubsamplingVert',
        '@_path': '\\Segment\\Tracks\\TrackEntry\\Video\\Colour\\ChromaSubsamplingVert',
        '@_id': '0x55B4',
        '@_type': 'uinteger',
        '@_minver': '4',
        '@_maxOccurs': '1',
      },
      {
        documentation: {
          '#text':
            'The amount of pixels to remove in the Cb channel for every pixel not removed horizontally.\nThis is additive with ChromaSubsamplingHorz. Example: For video with 4:2:1 chroma subsampling,\nthe ChromaSubsamplingHorz **SHOULD** be set to 1 and CbSubsamplingHorz **SHOULD** be set to 1.',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        extension: [
          {
            '@_type': 'webmproject.org',
            '@_webm': '1',
          },
          {
            '@_type': 'libmatroska',
            '@_cppname': 'VideoCbSubsampHorz',
          },
          {
            '@_type': 'stream copy',
            '@_keep': '1',
          },
        ],
        '@_name': 'CbSubsamplingHorz',
        '@_path': '\\Segment\\Tracks\\TrackEntry\\Video\\Colour\\CbSubsamplingHorz',
        '@_id': '0x55B5',
        '@_type': 'uinteger',
        '@_minver': '4',
        '@_maxOccurs': '1',
      },
      {
        documentation: {
          '#text':
            'The amount of pixels to remove in the Cb channel for every pixel not removed vertically.\nThis is additive with ChromaSubsamplingVert.',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        extension: [
          {
            '@_type': 'webmproject.org',
            '@_webm': '1',
          },
          {
            '@_type': 'libmatroska',
            '@_cppname': 'VideoCbSubsampVert',
          },
          {
            '@_type': 'stream copy',
            '@_keep': '1',
          },
        ],
        '@_name': 'CbSubsamplingVert',
        '@_path': '\\Segment\\Tracks\\TrackEntry\\Video\\Colour\\CbSubsamplingVert',
        '@_id': '0x55B6',
        '@_type': 'uinteger',
        '@_minver': '4',
        '@_maxOccurs': '1',
      },
      {
        documentation: {
          '#text': 'How chroma is subsampled horizontally.',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        restriction: {
          enum: [
            {
              '@_value': '0',
              '@_label': 'unspecified',
            },
            {
              '@_value': '1',
              '@_label': 'left collocated',
            },
            {
              '@_value': '2',
              '@_label': 'half',
            },
          ],
        },
        extension: [
          {
            '@_type': 'webmproject.org',
            '@_webm': '1',
          },
          {
            '@_type': 'libmatroska',
            '@_cppname': 'VideoChromaSitHorz',
          },
          {
            '@_type': 'stream copy',
            '@_keep': '1',
          },
        ],
        '@_name': 'ChromaSitingHorz',
        '@_path': '\\Segment\\Tracks\\TrackEntry\\Video\\Colour\\ChromaSitingHorz',
        '@_id': '0x55B7',
        '@_type': 'uinteger',
        '@_minver': '4',
        '@_default': '0',
        '@_minOccurs': '1',
        '@_maxOccurs': '1',
      },
      {
        documentation: {
          '#text': 'How chroma is subsampled vertically.',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        restriction: {
          enum: [
            {
              '@_value': '0',
              '@_label': 'unspecified',
            },
            {
              '@_value': '1',
              '@_label': 'top collocated',
            },
            {
              '@_value': '2',
              '@_label': 'half',
            },
          ],
        },
        extension: [
          {
            '@_type': 'webmproject.org',
            '@_webm': '1',
          },
          {
            '@_type': 'libmatroska',
            '@_cppname': 'VideoChromaSitVert',
          },
          {
            '@_type': 'stream copy',
            '@_keep': '1',
          },
        ],
        '@_name': 'ChromaSitingVert',
        '@_path': '\\Segment\\Tracks\\TrackEntry\\Video\\Colour\\ChromaSitingVert',
        '@_id': '0x55B8',
        '@_type': 'uinteger',
        '@_minver': '4',
        '@_default': '0',
        '@_minOccurs': '1',
        '@_maxOccurs': '1',
      },
      {
        documentation: {
          '#text': 'Clipping of the color ranges.',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        restriction: {
          enum: [
            {
              '@_value': '0',
              '@_label': 'unspecified',
            },
            {
              '@_value': '1',
              '@_label': 'broadcast range',
            },
            {
              '@_value': '2',
              '@_label': 'full range (no clipping)',
            },
            {
              '@_value': '3',
              '@_label': 'defined by MatrixCoefficients / TransferCharacteristics',
            },
          ],
        },
        extension: [
          {
            '@_type': 'webmproject.org',
            '@_webm': '1',
          },
          {
            '@_type': 'libmatroska',
            '@_cppname': 'VideoColourRange',
          },
          {
            '@_type': 'stream copy',
            '@_keep': '1',
          },
        ],
        '@_name': 'Range',
        '@_path': '\\Segment\\Tracks\\TrackEntry\\Video\\Colour\\Range',
        '@_id': '0x55B9',
        '@_type': 'uinteger',
        '@_minver': '4',
        '@_default': '0',
        '@_minOccurs': '1',
        '@_maxOccurs': '1',
      },
      {
        documentation: {
          '#text':
            'The transfer characteristics of the video. For clarity,\nthe value and meanings for TransferCharacteristics are adopted from Table 3 of ISO/IEC 23091-4 or ITU-T H.273.',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        restriction: {
          enum: [
            {
              '@_value': '0',
              '@_label': 'reserved',
            },
            {
              '@_value': '1',
              '@_label': 'ITU-R BT.709',
            },
            {
              '@_value': '2',
              '@_label': 'unspecified',
            },
            {
              '@_value': '3',
              '@_label': 'reserved',
            },
            {
              '@_value': '4',
              '@_label': 'Gamma 2.2 curve - BT.470M',
            },
            {
              '@_value': '5',
              '@_label': 'Gamma 2.8 curve - BT.470BG',
            },
            {
              '@_value': '6',
              '@_label': 'SMPTE 170M',
            },
            {
              '@_value': '7',
              '@_label': 'SMPTE 240M',
            },
            {
              '@_value': '8',
              '@_label': 'Linear',
            },
            {
              '@_value': '9',
              '@_label': 'Log',
            },
            {
              '@_value': '10',
              '@_label': 'Log Sqrt',
            },
            {
              '@_value': '11',
              '@_label': 'IEC 61966-2-4',
            },
            {
              '@_value': '12',
              '@_label': 'ITU-R BT.1361 Extended Colour Gamut',
            },
            {
              '@_value': '13',
              '@_label': 'IEC 61966-2-1',
            },
            {
              '@_value': '14',
              '@_label': 'ITU-R BT.2020 10 bit',
            },
            {
              '@_value': '15',
              '@_label': 'ITU-R BT.2020 12 bit',
            },
            {
              '@_value': '16',
              '@_label': 'ITU-R BT.2100 Perceptual Quantization',
            },
            {
              '@_value': '17',
              '@_label': 'SMPTE ST 428-1',
            },
            {
              '@_value': '18',
              '@_label': 'ARIB STD-B67 (HLG)',
            },
          ],
        },
        extension: [
          {
            '@_type': 'webmproject.org',
            '@_webm': '1',
          },
          {
            '@_type': 'libmatroska',
            '@_cppname': 'VideoColourTransferCharacter',
          },
          {
            '@_type': 'stream copy',
            '@_keep': '1',
          },
        ],
        '@_name': 'TransferCharacteristics',
        '@_path': '\\Segment\\Tracks\\TrackEntry\\Video\\Colour\\TransferCharacteristics',
        '@_id': '0x55BA',
        '@_type': 'uinteger',
        '@_minver': '4',
        '@_default': '2',
        '@_minOccurs': '1',
        '@_maxOccurs': '1',
      },
      {
        documentation: {
          '#text':
            'The colour primaries of the video. For clarity,\nthe value and meanings for Primaries are adopted from Table 2 of ISO/IEC 23091-4 or ITU-T H.273.',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        restriction: {
          enum: [
            {
              '@_value': '0',
              '@_label': 'reserved',
            },
            {
              '@_value': '1',
              '@_label': 'ITU-R BT.709',
            },
            {
              '@_value': '2',
              '@_label': 'unspecified',
            },
            {
              '@_value': '3',
              '@_label': 'reserved',
            },
            {
              '@_value': '4',
              '@_label': 'ITU-R BT.470M',
            },
            {
              '@_value': '5',
              '@_label': 'ITU-R BT.470BG - BT.601 625',
            },
            {
              '@_value': '6',
              '@_label': 'ITU-R BT.601 525 - SMPTE 170M',
            },
            {
              '@_value': '7',
              '@_label': 'SMPTE 240M',
            },
            {
              '@_value': '8',
              '@_label': 'FILM',
            },
            {
              '@_value': '9',
              '@_label': 'ITU-R BT.2020',
            },
            {
              '@_value': '10',
              '@_label': 'SMPTE ST 428-1',
            },
            {
              '@_value': '11',
              '@_label': 'SMPTE RP 432-2',
            },
            {
              '@_value': '12',
              '@_label': 'SMPTE EG 432-2',
            },
            {
              '@_value': '22',
              '@_label': 'EBU Tech. 3213-E - JEDEC P22 phosphors',
            },
          ],
        },
        extension: [
          {
            '@_type': 'webmproject.org',
            '@_webm': '1',
          },
          {
            '@_type': 'libmatroska',
            '@_cppname': 'VideoColourPrimaries',
          },
          {
            '@_type': 'stream copy',
            '@_keep': '1',
          },
        ],
        '@_name': 'Primaries',
        '@_path': '\\Segment\\Tracks\\TrackEntry\\Video\\Colour\\Primaries',
        '@_id': '0x55BB',
        '@_type': 'uinteger',
        '@_minver': '4',
        '@_default': '2',
        '@_minOccurs': '1',
        '@_maxOccurs': '1',
      },
      {
        documentation: {
          '#text':
            'Maximum brightness of a single pixel (Maximum Content Light Level)\nin candelas per square meter (cd/m^2^).',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        extension: [
          {
            '@_type': 'webmproject.org',
            '@_webm': '1',
          },
          {
            '@_type': 'libmatroska',
            '@_cppname': 'VideoColourMaxCLL',
          },
          {
            '@_type': 'stream copy',
            '@_keep': '1',
          },
        ],
        '@_name': 'MaxCLL',
        '@_path': '\\Segment\\Tracks\\TrackEntry\\Video\\Colour\\MaxCLL',
        '@_id': '0x55BC',
        '@_type': 'uinteger',
        '@_minver': '4',
        '@_maxOccurs': '1',
      },
      {
        documentation: {
          '#text':
            'Maximum brightness of a single full frame (Maximum Frame-Average Light Level)\nin candelas per square meter (cd/m^2^).',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        extension: [
          {
            '@_type': 'webmproject.org',
            '@_webm': '1',
          },
          {
            '@_type': 'libmatroska',
            '@_cppname': 'VideoColourMaxFALL',
          },
          {
            '@_type': 'stream copy',
            '@_keep': '1',
          },
        ],
        '@_name': 'MaxFALL',
        '@_path': '\\Segment\\Tracks\\TrackEntry\\Video\\Colour\\MaxFALL',
        '@_id': '0x55BD',
        '@_type': 'uinteger',
        '@_minver': '4',
        '@_maxOccurs': '1',
      },
      {
        documentation: {
          '#text': 'SMPTE 2086 mastering data.',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        extension: [
          {
            '@_type': 'webmproject.org',
            '@_webm': '1',
          },
          {
            '@_type': 'libmatroska',
            '@_cppname': 'VideoColourMasterMeta',
          },
          {
            '@_type': 'stream copy',
            '@_keep': '1',
          },
        ],
        '@_name': 'MasteringMetadata',
        '@_path': '\\Segment\\Tracks\\TrackEntry\\Video\\Colour\\MasteringMetadata',
        '@_id': '0x55D0',
        '@_type': 'master',
        '@_minver': '4',
        '@_maxOccurs': '1',
      },
      {
        documentation: {
          '#text': 'Red X chromaticity coordinate, as defined by [@!CIE-1931].',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        extension: [
          {
            '@_type': 'webmproject.org',
            '@_webm': '1',
          },
          {
            '@_type': 'libmatroska',
            '@_cppname': 'VideoRChromaX',
          },
          {
            '@_type': 'stream copy',
            '@_keep': '1',
          },
        ],
        '@_name': 'PrimaryRChromaticityX',
        '@_path':
          '\\Segment\\Tracks\\TrackEntry\\Video\\Colour\\MasteringMetadata\\PrimaryRChromaticityX',
        '@_id': '0x55D1',
        '@_type': 'float',
        '@_minver': '4',
        '@_range': '0-1',
        '@_maxOccurs': '1',
      },
      {
        documentation: {
          '#text': 'Red Y chromaticity coordinate, as defined by [@!CIE-1931]].',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        extension: [
          {
            '@_type': 'webmproject.org',
            '@_webm': '1',
          },
          {
            '@_type': 'libmatroska',
            '@_cppname': 'VideoRChromaY',
          },
          {
            '@_type': 'stream copy',
            '@_keep': '1',
          },
        ],
        '@_name': 'PrimaryRChromaticityY',
        '@_path':
          '\\Segment\\Tracks\\TrackEntry\\Video\\Colour\\MasteringMetadata\\PrimaryRChromaticityY',
        '@_id': '0x55D2',
        '@_type': 'float',
        '@_minver': '4',
        '@_range': '0-1',
        '@_maxOccurs': '1',
      },
      {
        documentation: {
          '#text': 'Green X chromaticity coordinate, as defined by [@!CIE-1931]].',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        extension: [
          {
            '@_type': 'webmproject.org',
            '@_webm': '1',
          },
          {
            '@_type': 'libmatroska',
            '@_cppname': 'VideoGChromaX',
          },
          {
            '@_type': 'stream copy',
            '@_keep': '1',
          },
        ],
        '@_name': 'PrimaryGChromaticityX',
        '@_path':
          '\\Segment\\Tracks\\TrackEntry\\Video\\Colour\\MasteringMetadata\\PrimaryGChromaticityX',
        '@_id': '0x55D3',
        '@_type': 'float',
        '@_minver': '4',
        '@_range': '0-1',
        '@_maxOccurs': '1',
      },
      {
        documentation: {
          '#text': 'Green Y chromaticity coordinate, as defined by [@!CIE-1931]].',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        extension: [
          {
            '@_type': 'webmproject.org',
            '@_webm': '1',
          },
          {
            '@_type': 'libmatroska',
            '@_cppname': 'VideoGChromaY',
          },
          {
            '@_type': 'stream copy',
            '@_keep': '1',
          },
        ],
        '@_name': 'PrimaryGChromaticityY',
        '@_path':
          '\\Segment\\Tracks\\TrackEntry\\Video\\Colour\\MasteringMetadata\\PrimaryGChromaticityY',
        '@_id': '0x55D4',
        '@_type': 'float',
        '@_minver': '4',
        '@_range': '0-1',
        '@_maxOccurs': '1',
      },
      {
        documentation: {
          '#text': 'Blue X chromaticity coordinate, as defined by [@!CIE-1931]].',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        extension: [
          {
            '@_type': 'webmproject.org',
            '@_webm': '1',
          },
          {
            '@_type': 'libmatroska',
            '@_cppname': 'VideoBChromaX',
          },
          {
            '@_type': 'stream copy',
            '@_keep': '1',
          },
        ],
        '@_name': 'PrimaryBChromaticityX',
        '@_path':
          '\\Segment\\Tracks\\TrackEntry\\Video\\Colour\\MasteringMetadata\\PrimaryBChromaticityX',
        '@_id': '0x55D5',
        '@_type': 'float',
        '@_minver': '4',
        '@_range': '0-1',
        '@_maxOccurs': '1',
      },
      {
        documentation: {
          '#text': 'Blue Y chromaticity coordinate, as defined by [@!CIE-1931]].',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        extension: [
          {
            '@_type': 'webmproject.org',
            '@_webm': '1',
          },
          {
            '@_type': 'libmatroska',
            '@_cppname': 'VideoBChromaY',
          },
          {
            '@_type': 'stream copy',
            '@_keep': '1',
          },
        ],
        '@_name': 'PrimaryBChromaticityY',
        '@_path':
          '\\Segment\\Tracks\\TrackEntry\\Video\\Colour\\MasteringMetadata\\PrimaryBChromaticityY',
        '@_id': '0x55D6',
        '@_type': 'float',
        '@_minver': '4',
        '@_range': '0-1',
        '@_maxOccurs': '1',
      },
      {
        documentation: {
          '#text': 'White X chromaticity coordinate, as defined by [@!CIE-1931]].',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        extension: [
          {
            '@_type': 'webmproject.org',
            '@_webm': '1',
          },
          {
            '@_type': 'libmatroska',
            '@_cppname': 'VideoWhitePointChromaX',
          },
          {
            '@_type': 'stream copy',
            '@_keep': '1',
          },
        ],
        '@_name': 'WhitePointChromaticityX',
        '@_path':
          '\\Segment\\Tracks\\TrackEntry\\Video\\Colour\\MasteringMetadata\\WhitePointChromaticityX',
        '@_id': '0x55D7',
        '@_type': 'float',
        '@_minver': '4',
        '@_range': '0-1',
        '@_maxOccurs': '1',
      },
      {
        documentation: {
          '#text': 'White Y chromaticity coordinate, as defined by [@!CIE-1931]].',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        extension: [
          {
            '@_type': 'webmproject.org',
            '@_webm': '1',
          },
          {
            '@_type': 'libmatroska',
            '@_cppname': 'VideoWhitePointChromaY',
          },
          {
            '@_type': 'stream copy',
            '@_keep': '1',
          },
        ],
        '@_name': 'WhitePointChromaticityY',
        '@_path':
          '\\Segment\\Tracks\\TrackEntry\\Video\\Colour\\MasteringMetadata\\WhitePointChromaticityY',
        '@_id': '0x55D8',
        '@_type': 'float',
        '@_minver': '4',
        '@_range': '0-1',
        '@_maxOccurs': '1',
      },
      {
        documentation: {
          '#text': 'Maximum luminance. Represented in candelas per square meter (cd/m^2^).',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        extension: [
          {
            '@_type': 'webmproject.org',
            '@_webm': '1',
          },
          {
            '@_type': 'libmatroska',
            '@_cppname': 'VideoLuminanceMax',
          },
          {
            '@_type': 'stream copy',
            '@_keep': '1',
          },
        ],
        '@_name': 'LuminanceMax',
        '@_path': '\\Segment\\Tracks\\TrackEntry\\Video\\Colour\\MasteringMetadata\\LuminanceMax',
        '@_id': '0x55D9',
        '@_type': 'float',
        '@_minver': '4',
        '@_range': '>= 0x0p+0',
        '@_maxOccurs': '1',
      },
      {
        documentation: {
          '#text': 'Minimum luminance. Represented in candelas per square meter (cd/m^2^).',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        extension: [
          {
            '@_type': 'webmproject.org',
            '@_webm': '1',
          },
          {
            '@_type': 'libmatroska',
            '@_cppname': 'VideoLuminanceMin',
          },
          {
            '@_type': 'stream copy',
            '@_keep': '1',
          },
        ],
        '@_name': 'LuminanceMin',
        '@_path': '\\Segment\\Tracks\\TrackEntry\\Video\\Colour\\MasteringMetadata\\LuminanceMin',
        '@_id': '0x55DA',
        '@_type': 'float',
        '@_minver': '4',
        '@_range': '>= 0x0p+0',
        '@_maxOccurs': '1',
      },
      {
        documentation: {
          '#text':
            'Describes the video projection details. Used to render spherical, VR videos or flipping videos horizontally/vertically.',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        extension: [
          {
            '@_type': 'webmproject.org',
            '@_webm': '1',
          },
          {
            '@_type': 'libmatroska',
            '@_cppname': 'VideoProjection',
          },
          {
            '@_type': 'stream copy',
            '@_keep': '1',
          },
        ],
        '@_name': 'Projection',
        '@_path': '\\Segment\\Tracks\\TrackEntry\\Video\\Projection',
        '@_id': '0x7670',
        '@_type': 'master',
        '@_minver': '4',
        '@_maxOccurs': '1',
      },
      {
        documentation: {
          '#text': 'Describes the projection used for this video track.',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        restriction: {
          enum: [
            {
              '@_value': '0',
              '@_label': 'rectangular',
            },
            {
              '@_value': '1',
              '@_label': 'equirectangular',
            },
            {
              '@_value': '2',
              '@_label': 'cubemap',
            },
            {
              '@_value': '3',
              '@_label': 'mesh',
            },
          ],
        },
        extension: [
          {
            '@_type': 'webmproject.org',
            '@_webm': '1',
          },
          {
            '@_type': 'libmatroska',
            '@_cppname': 'VideoProjectionType',
          },
          {
            '@_type': 'stream copy',
            '@_keep': '1',
          },
        ],
        '@_name': 'ProjectionType',
        '@_path': '\\Segment\\Tracks\\TrackEntry\\Video\\Projection\\ProjectionType',
        '@_id': '0x7671',
        '@_type': 'uinteger',
        '@_minver': '4',
        '@_default': '0',
        '@_minOccurs': '1',
        '@_maxOccurs': '1',
      },
      {
        documentation: [
          {
            '#text':
              "Private data that only applies to a specific projection.\n\n*  If `ProjectionType` equals 0 (Rectangular),\n     then this element must not be present.\n*  If `ProjectionType` equals 1 (Equirectangular), then this element must be present and contain the same binary data that would be stored inside\n      an ISOBMFF Equirectangular Projection Box ('equi').\n*  If `ProjectionType` equals 2 (Cubemap), then this element must be present and contain the same binary data that would be stored\n      inside an ISOBMFF Cubemap Projection Box ('cbmp').\n*  If `ProjectionType` equals 3 (Mesh), then this element must be present and contain the same binary data that would be stored inside\n       an ISOBMFF Mesh Projection Box ('mshp').",
            '@_lang': 'en',
            '@_purpose': 'definition',
          },
          {
            '#text':
              'ISOBMFF box size and fourcc fields are not included in the binary data,\nbut the FullBox version and flag fields are. This is to avoid\nredundant framing information while preserving versioning and semantics between the two container formats.',
            '@_lang': 'en',
            '@_purpose': 'usage notes',
          },
        ],
        extension: [
          {
            '@_type': 'webmproject.org',
            '@_webm': '1',
          },
          {
            '@_type': 'libmatroska',
            '@_cppname': 'VideoProjectionPrivate',
          },
          {
            '@_type': 'stream copy',
            '@_keep': '1',
          },
        ],
        '@_name': 'ProjectionPrivate',
        '@_path': '\\Segment\\Tracks\\TrackEntry\\Video\\Projection\\ProjectionPrivate',
        '@_id': '0x7672',
        '@_type': 'binary',
        '@_minver': '4',
        '@_maxOccurs': '1',
      },
      {
        documentation: {
          '#text':
            'Specifies a yaw rotation to the projection.\n\nValue represents a clockwise rotation, in degrees, around the up vector. This rotation must be applied\nbefore any `ProjectionPosePitch` or `ProjectionPoseRoll` rotations.\nThe value of this element **MUST** be in the -180 to 180 degree range, both included.\n\nSetting `ProjectionPoseYaw` to 180 or -180 degrees, with the `ProjectionPoseRoll` and `ProjectionPosePitch` set to 0 degrees flips the image horizontally.',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        extension: [
          {
            '@_type': 'webmproject.org',
            '@_webm': '1',
          },
          {
            '@_type': 'libmatroska',
            '@_cppname': 'VideoProjectionPoseYaw',
          },
          {
            '@_type': 'stream copy',
            '@_keep': '1',
          },
        ],
        '@_name': 'ProjectionPoseYaw',
        '@_path': '\\Segment\\Tracks\\TrackEntry\\Video\\Projection\\ProjectionPoseYaw',
        '@_id': '0x7673',
        '@_type': 'float',
        '@_range': '>= -0xB4p+0, <= 0xB4p+0',
        '@_minver': '4',
        '@_default': '0x0p+0',
        '@_minOccurs': '1',
        '@_maxOccurs': '1',
      },
      {
        documentation: {
          '#text':
            'Specifies a pitch rotation to the projection.\n\nValue represents a counter-clockwise rotation, in degrees, around the right vector. This rotation must be applied\nafter the `ProjectionPoseYaw` rotation and before the `ProjectionPoseRoll` rotation.\nThe value of this element **MUST** be in the -90 to 90 degree range, both included.',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        extension: [
          {
            '@_type': 'webmproject.org',
            '@_webm': '1',
          },
          {
            '@_type': 'libmatroska',
            '@_cppname': 'VideoProjectionPosePitch',
          },
          {
            '@_type': 'stream copy',
            '@_keep': '1',
          },
        ],
        '@_name': 'ProjectionPosePitch',
        '@_path': '\\Segment\\Tracks\\TrackEntry\\Video\\Projection\\ProjectionPosePitch',
        '@_id': '0x7674',
        '@_type': 'float',
        '@_range': '>= -0x5Ap+0, <= 0x5Ap+0',
        '@_minver': '4',
        '@_default': '0x0p+0',
        '@_minOccurs': '1',
        '@_maxOccurs': '1',
      },
      {
        documentation: {
          '#text':
            'Specifies a roll rotation to the projection.\n\nValue represents a counter-clockwise rotation, in degrees, around the forward vector. This rotation must be applied\nafter the `ProjectionPoseYaw` and `ProjectionPosePitch` rotations.\nThe value of this element **MUST** be in the -180 to 180 degree range, both included.\n\nSetting `ProjectionPoseRoll` to 180 or -180 degrees, the `ProjectionPoseYaw` to 180 or -180 degrees with `ProjectionPosePitch` set to 0 degrees flips the image vertically.\n\nSetting `ProjectionPoseRoll` to 180 or -180 degrees, with the `ProjectionPoseYaw` and `ProjectionPosePitch` set to 0 degrees flips the image horizontally and vertically.',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        extension: [
          {
            '@_type': 'webmproject.org',
            '@_webm': '1',
          },
          {
            '@_type': 'libmatroska',
            '@_cppname': 'VideoProjectionPoseRoll',
          },
          {
            '@_type': 'stream copy',
            '@_keep': '1',
          },
        ],
        '@_name': 'ProjectionPoseRoll',
        '@_path': '\\Segment\\Tracks\\TrackEntry\\Video\\Projection\\ProjectionPoseRoll',
        '@_id': '0x7675',
        '@_type': 'float',
        '@_range': '>= -0xB4p+0, <= 0xB4p+0',
        '@_minver': '4',
        '@_default': '0x0p+0',
        '@_minOccurs': '1',
        '@_maxOccurs': '1',
      },
      {
        documentation: {
          '#text': 'Audio settings.',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        extension: [
          {
            '@_type': 'libmatroska',
            '@_cppname': 'TrackAudio',
          },
          {
            '@_type': 'webmproject.org',
            '@_webm': '1',
          },
        ],
        '@_name': 'Audio',
        '@_path': '\\Segment\\Tracks\\TrackEntry\\Audio',
        '@_id': '0xE1',
        '@_type': 'master',
        '@_maxOccurs': '1',
      },
      {
        documentation: {
          '#text': 'Sampling frequency in Hz.',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        extension: [
          {
            '@_type': 'libmatroska',
            '@_cppname': 'AudioSamplingFreq',
          },
          {
            '@_type': 'stream copy',
            '@_keep': '1',
          },
          {
            '@_type': 'webmproject.org',
            '@_webm': '1',
          },
        ],
        '@_name': 'SamplingFrequency',
        '@_path': '\\Segment\\Tracks\\TrackEntry\\Audio\\SamplingFrequency',
        '@_id': '0xB5',
        '@_type': 'float',
        '@_range': '> 0x0p+0',
        '@_default': '0x1.f4p+12',
        '@_minOccurs': '1',
        '@_maxOccurs': '1',
      },
      {
        documentation: {
          '#text': 'Real output sampling frequency in Hz (used for SBR techniques).',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        implementation_note: {
          '#text':
            'The default value for OutputSamplingFrequency of the same TrackEntry is equal to the SamplingFrequency.',
          '@_note_attribute': 'default',
        },
        extension: [
          {
            '@_type': 'libmatroska',
            '@_cppname': 'AudioOutputSamplingFreq',
          },
          {
            '@_type': 'webmproject.org',
            '@_webm': '1',
          },
        ],
        '@_name': 'OutputSamplingFrequency',
        '@_path': '\\Segment\\Tracks\\TrackEntry\\Audio\\OutputSamplingFrequency',
        '@_id': '0x78B5',
        '@_type': 'float',
        '@_range': '> 0x0p+0',
        '@_maxOccurs': '1',
      },
      {
        documentation: {
          '#text': 'Numbers of channels in the track.',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        extension: [
          {
            '@_type': 'libmatroska',
            '@_cppname': 'AudioChannels',
          },
          {
            '@_type': 'stream copy',
            '@_keep': '1',
          },
          {
            '@_type': 'webmproject.org',
            '@_webm': '1',
          },
        ],
        '@_name': 'Channels',
        '@_path': '\\Segment\\Tracks\\TrackEntry\\Audio\\Channels',
        '@_id': '0x9F',
        '@_type': 'uinteger',
        '@_range': 'not 0',
        '@_default': '1',
        '@_minOccurs': '1',
        '@_maxOccurs': '1',
      },
      {
        documentation: {
          '#text': 'Table of horizontal angles for each successive channel.',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        extension: {
          '@_type': 'libmatroska',
          '@_cppname': 'AudioPosition',
        },
        '@_name': 'ChannelPositions',
        '@_path': '\\Segment\\Tracks\\TrackEntry\\Audio\\ChannelPositions',
        '@_id': '0x7D7B',
        '@_type': 'binary',
        '@_minver': '0',
        '@_maxver': '0',
        '@_maxOccurs': '1',
      },
      {
        documentation: {
          '#text': 'Bits per sample, mostly used for PCM.',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        extension: [
          {
            '@_type': 'libmatroska',
            '@_cppname': 'AudioBitDepth',
          },
          {
            '@_type': 'stream copy',
            '@_keep': '1',
          },
          {
            '@_type': 'webmproject.org',
            '@_webm': '1',
          },
        ],
        '@_name': 'BitDepth',
        '@_path': '\\Segment\\Tracks\\TrackEntry\\Audio\\BitDepth',
        '@_id': '0x6264',
        '@_type': 'uinteger',
        '@_range': 'not 0',
        '@_maxOccurs': '1',
      },
      {
        documentation: {
          '#text':
            'Operation that needs to be applied on tracks to create this virtual track.\nFor more details look at (#track-operation).',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        extension: {
          '@_type': 'stream copy',
          '@_keep': '1',
        },
        '@_name': 'TrackOperation',
        '@_path': '\\Segment\\Tracks\\TrackEntry\\TrackOperation',
        '@_id': '0xE2',
        '@_type': 'master',
        '@_minver': '3',
        '@_maxOccurs': '1',
      },
      {
        documentation: {
          '#text':
            'Contains the list of all video plane tracks that need to be combined to create this 3D track',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        extension: {
          '@_type': 'stream copy',
          '@_keep': '1',
        },
        '@_name': 'TrackCombinePlanes',
        '@_path': '\\Segment\\Tracks\\TrackEntry\\TrackOperation\\TrackCombinePlanes',
        '@_id': '0xE3',
        '@_type': 'master',
        '@_minver': '3',
        '@_maxOccurs': '1',
      },
      {
        documentation: {
          '#text': 'Contains a video plane track that need to be combined to create this 3D track',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        extension: {
          '@_type': 'stream copy',
          '@_keep': '1',
        },
        '@_name': 'TrackPlane',
        '@_path': '\\Segment\\Tracks\\TrackEntry\\TrackOperation\\TrackCombinePlanes\\TrackPlane',
        '@_id': '0xE4',
        '@_type': 'master',
        '@_minver': '3',
        '@_minOccurs': '1',
      },
      {
        documentation: {
          '#text': 'The trackUID number of the track representing the plane.',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        extension: {
          '@_type': 'stream copy',
          '@_keep': '1',
        },
        '@_name': 'TrackPlaneUID',
        '@_path':
          '\\Segment\\Tracks\\TrackEntry\\TrackOperation\\TrackCombinePlanes\\TrackPlane\\TrackPlaneUID',
        '@_id': '0xE5',
        '@_type': 'uinteger',
        '@_minver': '3',
        '@_range': 'not 0',
        '@_minOccurs': '1',
        '@_maxOccurs': '1',
      },
      {
        documentation: {
          '#text': 'The kind of plane this track corresponds to.',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        restriction: {
          enum: [
            {
              '@_value': '0',
              '@_label': 'left eye',
            },
            {
              '@_value': '1',
              '@_label': 'right eye',
            },
            {
              '@_value': '2',
              '@_label': 'background',
            },
          ],
        },
        extension: {
          '@_type': 'stream copy',
          '@_keep': '1',
        },
        '@_name': 'TrackPlaneType',
        '@_path':
          '\\Segment\\Tracks\\TrackEntry\\TrackOperation\\TrackCombinePlanes\\TrackPlane\\TrackPlaneType',
        '@_id': '0xE6',
        '@_type': 'uinteger',
        '@_minver': '3',
        '@_minOccurs': '1',
        '@_maxOccurs': '1',
      },
      {
        documentation: {
          '#text':
            'Contains the list of all tracks whose Blocks need to be combined to create this virtual track',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        extension: {
          '@_type': 'stream copy',
          '@_keep': '1',
        },
        '@_name': 'TrackJoinBlocks',
        '@_path': '\\Segment\\Tracks\\TrackEntry\\TrackOperation\\TrackJoinBlocks',
        '@_id': '0xE9',
        '@_type': 'master',
        '@_minver': '3',
        '@_maxOccurs': '1',
      },
      {
        documentation: {
          '#text':
            'The trackUID number of a track whose blocks are used to create this virtual track.',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        extension: {
          '@_type': 'stream copy',
          '@_keep': '1',
        },
        '@_name': 'TrackJoinUID',
        '@_path': '\\Segment\\Tracks\\TrackEntry\\TrackOperation\\TrackJoinBlocks\\TrackJoinUID',
        '@_id': '0xED',
        '@_type': 'uinteger',
        '@_minver': '3',
        '@_range': 'not 0',
        '@_minOccurs': '1',
      },
      {
        documentation: {
          '#text':
            'The TrackUID of the Smooth FF/RW video in the paired EBML structure corresponding to this video track. See [@?DivXTrickTrack].',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        extension: {
          '@_type': 'divx.com',
          '@_divx': '1',
        },
        '@_name': 'TrickTrackUID',
        '@_path': '\\Segment\\Tracks\\TrackEntry\\TrickTrackUID',
        '@_id': '0xC0',
        '@_type': 'uinteger',
        '@_minver': '0',
        '@_maxver': '0',
        '@_maxOccurs': '1',
      },
      {
        documentation: {
          '#text':
            'The SegmentUID of the Segment containing the track identified by TrickTrackUID. See [@?DivXTrickTrack].',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        extension: {
          '@_type': 'divx.com',
          '@_divx': '1',
        },
        '@_name': 'TrickTrackSegmentUID',
        '@_path': '\\Segment\\Tracks\\TrackEntry\\TrickTrackSegmentUID',
        '@_id': '0xC1',
        '@_type': 'binary',
        '@_minver': '0',
        '@_maxver': '0',
        '@_length': '16',
        '@_maxOccurs': '1',
      },
      {
        documentation: {
          '#text':
            'Set to 1 if this video track is a Smooth FF/RW track. If set to 1, MasterTrackUID and MasterTrackSegUID should must be present and BlockGroups for this track must contain ReferenceFrame structures.\nOtherwise, TrickTrackUID and TrickTrackSegUID must be present if this track has a corresponding Smooth FF/RW track. See [@?DivXTrickTrack].',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        extension: {
          '@_type': 'divx.com',
          '@_divx': '1',
        },
        '@_name': 'TrickTrackFlag',
        '@_path': '\\Segment\\Tracks\\TrackEntry\\TrickTrackFlag',
        '@_id': '0xC6',
        '@_type': 'uinteger',
        '@_minver': '0',
        '@_maxver': '0',
        '@_default': '0',
        '@_maxOccurs': '1',
      },
      {
        documentation: {
          '#text':
            'The TrackUID of the video track in the paired EBML structure that corresponds to this Smooth FF/RW track. See [@?DivXTrickTrack].',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        extension: {
          '@_type': 'divx.com',
          '@_divx': '1',
        },
        '@_name': 'TrickMasterTrackUID',
        '@_path': '\\Segment\\Tracks\\TrackEntry\\TrickMasterTrackUID',
        '@_id': '0xC7',
        '@_type': 'uinteger',
        '@_minver': '0',
        '@_maxver': '0',
        '@_maxOccurs': '1',
      },
      {
        documentation: {
          '#text':
            'The SegmentUID of the Segment containing the track identified by MasterTrackUID. See [@?DivXTrickTrack].',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        extension: {
          '@_type': 'divx.com',
          '@_divx': '1',
        },
        '@_name': 'TrickMasterTrackSegmentUID',
        '@_path': '\\Segment\\Tracks\\TrackEntry\\TrickMasterTrackSegmentUID',
        '@_id': '0xC4',
        '@_type': 'binary',
        '@_minver': '0',
        '@_maxver': '0',
        '@_length': '16',
        '@_maxOccurs': '1',
      },
      {
        documentation: {
          '#text':
            'Settings for several content encoding mechanisms like compression or encryption.',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        extension: [
          {
            '@_type': 'webmproject.org',
            '@_webm': '1',
          },
          {
            '@_type': 'stream copy',
            '@_keep': '1',
          },
        ],
        '@_name': 'ContentEncodings',
        '@_path': '\\Segment\\Tracks\\TrackEntry\\ContentEncodings',
        '@_id': '0x6D80',
        '@_type': 'master',
        '@_maxOccurs': '1',
      },
      {
        documentation: {
          '#text': 'Settings for one content encoding like compression or encryption.',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        extension: [
          {
            '@_type': 'webmproject.org',
            '@_webm': '1',
          },
          {
            '@_type': 'stream copy',
            '@_keep': '1',
          },
        ],
        '@_name': 'ContentEncoding',
        '@_path': '\\Segment\\Tracks\\TrackEntry\\ContentEncodings\\ContentEncoding',
        '@_id': '0x6240',
        '@_type': 'master',
        '@_minOccurs': '1',
      },
      {
        documentation: {
          '#text':
            'Tell in which order to apply each `ContentEncoding` of the `ContentEncodings`.\nThe decoder/demuxer **MUST** start with the `ContentEncoding` with the highest `ContentEncodingOrder` and work its way down to the `ContentEncoding` with the lowest `ContentEncodingOrder`.\nThis value **MUST** be unique over for each `ContentEncoding` found in the `ContentEncodings` of this `TrackEntry`.',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        extension: [
          {
            '@_type': 'webmproject.org',
            '@_webm': '1',
          },
          {
            '@_type': 'stream copy',
            '@_keep': '1',
          },
        ],
        '@_name': 'ContentEncodingOrder',
        '@_path':
          '\\Segment\\Tracks\\TrackEntry\\ContentEncodings\\ContentEncoding\\ContentEncodingOrder',
        '@_id': '0x5031',
        '@_type': 'uinteger',
        '@_default': '0',
        '@_minOccurs': '1',
        '@_maxOccurs': '1',
      },
      {
        documentation: {
          '#text':
            "A bit field that describes which Elements have been modified in this way.\nValues (big-endian) can be OR'ed.",
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        restriction: {
          enum: [
            {
              documentation: {
                '#text': 'All frame contents, excluding lacing data.',
                '@_lang': 'en',
                '@_purpose': 'definition',
              },
              '@_value': '1',
              '@_label': 'Block',
            },
            {
              documentation: {
                '#text': "The track's private data.",
                '@_lang': 'en',
                '@_purpose': 'definition',
              },
              '@_value': '2',
              '@_label': 'Private',
            },
            {
              documentation: [
                {
                  '#text':
                    'The next ContentEncoding (next `ContentEncodingOrder`. Either the data inside `ContentCompression` and/or `ContentEncryption`).',
                  '@_lang': 'en',
                  '@_purpose': 'definition',
                },
                {
                  '#text': 'This value **SHOULD NOT** be used.',
                  '@_lang': 'en',
                  '@_purpose': 'usage notes',
                },
              ],
              '@_value': '4',
              '@_label': 'Next',
            },
          ],
        },
        extension: [
          {
            '@_type': 'webmproject.org',
            '@_webm': '1',
          },
          {
            '@_type': 'stream copy',
            '@_keep': '1',
          },
        ],
        '@_name': 'ContentEncodingScope',
        '@_path':
          '\\Segment\\Tracks\\TrackEntry\\ContentEncodings\\ContentEncoding\\ContentEncodingScope',
        '@_id': '0x5032',
        '@_type': 'uinteger',
        '@_default': '1',
        '@_minOccurs': '1',
        '@_maxOccurs': '1',
      },
      {
        documentation: {
          '#text': 'A value describing what kind of transformation is applied.',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        restriction: {
          enum: [
            {
              '@_value': '0',
              '@_label': 'Compression',
            },
            {
              '@_value': '1',
              '@_label': 'Encryption',
            },
          ],
        },
        extension: [
          {
            '@_type': 'webmproject.org',
            '@_webm': '1',
          },
          {
            '@_type': 'stream copy',
            '@_keep': '1',
          },
        ],
        '@_name': 'ContentEncodingType',
        '@_path':
          '\\Segment\\Tracks\\TrackEntry\\ContentEncodings\\ContentEncoding\\ContentEncodingType',
        '@_id': '0x5033',
        '@_type': 'uinteger',
        '@_default': '0',
        '@_minOccurs': '1',
        '@_maxOccurs': '1',
      },
      {
        documentation: {
          '#text':
            'Settings describing the compression used.\nThis Element **MUST** be present if the value of ContentEncodingType is 0 and absent otherwise.\nEach block **MUST** be decompressable even if no previous block is available in order not to prevent seeking.',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        extension: {
          '@_type': 'stream copy',
          '@_keep': '1',
        },
        '@_name': 'ContentCompression',
        '@_path':
          '\\Segment\\Tracks\\TrackEntry\\ContentEncodings\\ContentEncoding\\ContentCompression',
        '@_id': '0x5034',
        '@_type': 'master',
        '@_maxOccurs': '1',
      },
      {
        documentation: [
          {
            '#text': 'The compression algorithm used.',
            '@_lang': 'en',
            '@_purpose': 'definition',
          },
          {
            '#text':
              'Compression method "1" (bzlib) and "2" (lzo1x) are lacking proper documentation on the format which limits implementation possibilities.\nDue to licensing conflicts on commonly available libraries compression methods "2" (lzo1x) does not offer widespread interoperability.\nDecoding implementations **MAY** support methods "1" and "2" as possible. The use of these compression methods **SHOULD NOT** be used as a default.',
            '@_lang': 'en',
            '@_purpose': 'usage notes',
          },
        ],
        restriction: {
          enum: [
            {
              documentation: {
                '#text': 'zlib compression [@!RFC1950].',
                '@_lang': 'en',
                '@_purpose': 'definition',
              },
              '@_value': '0',
              '@_label': 'zlib',
            },
            {
              documentation: {
                '#text': 'bzip2 compression [@!BZIP2], **SHOULD NOT** be used; see usage notes.',
                '@_lang': 'en',
                '@_purpose': 'definition',
              },
              '@_value': '1',
              '@_label': 'bzlib',
            },
            {
              documentation: {
                '#text':
                  'Lempel-Ziv-Oberhumer compression [@!LZO], **SHOULD NOT** be used; see usage notes.',
                '@_lang': 'en',
                '@_purpose': 'definition',
              },
              '@_value': '2',
              '@_label': 'lzo1x',
            },
            {
              documentation: {
                '#text':
                  'Octets in `ContentCompSettings` ((#contentcompsettings-element)) have been stripped from each frame.',
                '@_lang': 'en',
                '@_purpose': 'definition',
              },
              '@_value': '3',
              '@_label': 'Header Stripping',
            },
          ],
        },
        extension: {
          '@_type': 'stream copy',
          '@_keep': '1',
        },
        '@_name': 'ContentCompAlgo',
        '@_path':
          '\\Segment\\Tracks\\TrackEntry\\ContentEncodings\\ContentEncoding\\ContentCompression\\ContentCompAlgo',
        '@_id': '0x4254',
        '@_type': 'uinteger',
        '@_default': '0',
        '@_minOccurs': '1',
        '@_maxOccurs': '1',
      },
      {
        documentation: {
          '#text':
            'Settings that might be needed by the decompressor. For Header Stripping (`ContentCompAlgo`=3),\nthe bytes that were removed from the beginning of each frames of the track.',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        extension: {
          '@_type': 'stream copy',
          '@_keep': '1',
        },
        '@_name': 'ContentCompSettings',
        '@_path':
          '\\Segment\\Tracks\\TrackEntry\\ContentEncodings\\ContentEncoding\\ContentCompression\\ContentCompSettings',
        '@_id': '0x4255',
        '@_type': 'binary',
        '@_maxOccurs': '1',
      },
      {
        documentation: {
          '#text':
            'Settings describing the encryption used.\nThis Element **MUST** be present if the value of `ContentEncodingType` is 1 (encryption) and **MUST** be ignored otherwise.',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        extension: [
          {
            '@_type': 'webmproject.org',
            '@_webm': '1',
          },
          {
            '@_type': 'stream copy',
            '@_keep': '1',
          },
        ],
        '@_name': 'ContentEncryption',
        '@_path':
          '\\Segment\\Tracks\\TrackEntry\\ContentEncodings\\ContentEncoding\\ContentEncryption',
        '@_id': '0x5035',
        '@_type': 'master',
        '@_maxOccurs': '1',
      },
      {
        documentation: {
          '#text': 'The encryption algorithm used.',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        restriction: {
          enum: [
            {
              documentation: {
                '#text': 'The data are not encrypted.',
                '@_lang': 'en',
                '@_purpose': 'definition',
              },
              '@_value': '0',
              '@_label': 'Not encrypted',
            },
            {
              documentation: {
                '#text': 'Data Encryption Standard (DES) [@!FIPS.46-3].',
                '@_lang': 'en',
                '@_purpose': 'definition',
              },
              '@_value': '1',
              '@_label': 'DES',
            },
            {
              documentation: {
                '#text': 'Triple Data Encryption Algorithm [@!SP.800-67].',
                '@_lang': 'en',
                '@_purpose': 'definition',
              },
              '@_value': '2',
              '@_label': '3DES',
            },
            {
              documentation: {
                '#text': 'Twofish Encryption Algorithm [@!Twofish].',
                '@_lang': 'en',
                '@_purpose': 'definition',
              },
              '@_value': '3',
              '@_label': 'Twofish',
            },
            {
              documentation: {
                '#text': 'Blowfish Encryption Algorithm [@!Blowfish].',
                '@_lang': 'en',
                '@_purpose': 'definition',
              },
              '@_value': '4',
              '@_label': 'Blowfish',
            },
            {
              documentation: {
                '#text': 'Advanced Encryption Standard (AES) [@!FIPS.197].',
                '@_lang': 'en',
                '@_purpose': 'definition',
              },
              '@_value': '5',
              '@_label': 'AES',
            },
          ],
        },
        extension: [
          {
            '@_type': 'webmproject.org',
            '@_webm': '1',
          },
          {
            '@_type': 'stream copy',
            '@_keep': '1',
          },
        ],
        '@_name': 'ContentEncAlgo',
        '@_path':
          '\\Segment\\Tracks\\TrackEntry\\ContentEncodings\\ContentEncoding\\ContentEncryption\\ContentEncAlgo',
        '@_id': '0x47E1',
        '@_type': 'uinteger',
        '@_default': '0',
        '@_minOccurs': '1',
        '@_maxOccurs': '1',
      },
      {
        documentation: {
          '#text':
            'For public key algorithms this is the ID of the public key the the data was encrypted with.',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        extension: [
          {
            '@_type': 'webmproject.org',
            '@_webm': '1',
          },
          {
            '@_type': 'stream copy',
            '@_keep': '1',
          },
        ],
        '@_name': 'ContentEncKeyID',
        '@_path':
          '\\Segment\\Tracks\\TrackEntry\\ContentEncodings\\ContentEncoding\\ContentEncryption\\ContentEncKeyID',
        '@_id': '0x47E2',
        '@_type': 'binary',
        '@_maxOccurs': '1',
      },
      {
        documentation: {
          '#text': 'Settings describing the encryption algorithm used.',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        implementation_note: {
          '#text':
            'ContentEncAESSettings **MUST NOT** be set (maxOccurs=0) if ContentEncAlgo is not AES (5).',
          '@_note_attribute': 'maxOccurs',
        },
        extension: [
          {
            '@_type': 'webmproject.org',
            '@_webm': '1',
          },
          {
            '@_type': 'stream copy',
            '@_keep': '1',
          },
        ],
        '@_name': 'ContentEncAESSettings',
        '@_path':
          '\\Segment\\Tracks\\TrackEntry\\ContentEncodings\\ContentEncoding\\ContentEncryption\\ContentEncAESSettings',
        '@_id': '0x47E7',
        '@_type': 'master',
        '@_minver': '4',
        '@_maxOccurs': '1',
      },
      {
        documentation: {
          '#text': 'The AES cipher mode used in the encryption.',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        implementation_note: {
          '#text':
            'AESSettingsCipherMode **MUST NOT** be set (maxOccurs=0) if ContentEncAlgo is not AES (5).',
          '@_note_attribute': 'maxOccurs',
        },
        restriction: {
          enum: [
            {
              documentation: {
                '#text': 'Counter [@!SP.800-38A].',
                '@_lang': 'en',
                '@_purpose': 'definition',
              },
              '@_value': '1',
              '@_label': 'AES-CTR',
            },
            {
              documentation: {
                '#text': 'Cipher Block Chaining [@!SP.800-38A].',
                '@_lang': 'en',
                '@_purpose': 'definition',
              },
              '@_value': '2',
              '@_label': 'AES-CBC',
            },
          ],
        },
        extension: [
          {
            '@_type': 'webmproject.org',
            '@_webm': '1',
          },
          {
            '@_type': 'stream copy',
            '@_keep': '1',
          },
        ],
        '@_name': 'AESSettingsCipherMode',
        '@_path':
          '\\Segment\\Tracks\\TrackEntry\\ContentEncodings\\ContentEncoding\\ContentEncryption\\ContentEncAESSettings\\AESSettingsCipherMode',
        '@_id': '0x47E8',
        '@_type': 'uinteger',
        '@_minver': '4',
        '@_minOccurs': '1',
        '@_maxOccurs': '1',
      },
      {
        documentation: {
          '#text': 'A cryptographic signature of the contents.',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        '@_name': 'ContentSignature',
        '@_path':
          '\\Segment\\Tracks\\TrackEntry\\ContentEncodings\\ContentEncoding\\ContentEncryption\\ContentSignature',
        '@_id': '0x47E3',
        '@_type': 'binary',
        '@_maxver': '0',
        '@_maxOccurs': '1',
      },
      {
        documentation: {
          '#text': 'This is the ID of the private key the data was signed with.',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        '@_name': 'ContentSigKeyID',
        '@_path':
          '\\Segment\\Tracks\\TrackEntry\\ContentEncodings\\ContentEncoding\\ContentEncryption\\ContentSigKeyID',
        '@_id': '0x47E4',
        '@_type': 'binary',
        '@_maxver': '0',
        '@_maxOccurs': '1',
      },
      {
        documentation: {
          '#text': 'The algorithm used for the signature.',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        restriction: {
          enum: [
            {
              '@_value': '0',
              '@_label': 'Not signed',
            },
            {
              '@_value': '1',
              '@_label': 'RSA',
            },
          ],
        },
        '@_name': 'ContentSigAlgo',
        '@_path':
          '\\Segment\\Tracks\\TrackEntry\\ContentEncodings\\ContentEncoding\\ContentEncryption\\ContentSigAlgo',
        '@_id': '0x47E5',
        '@_type': 'uinteger',
        '@_maxver': '0',
        '@_default': '0',
        '@_maxOccurs': '1',
      },
      {
        documentation: {
          '#text': 'The hash algorithm used for the signature.',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        restriction: {
          enum: [
            {
              '@_value': '0',
              '@_label': 'Not signed',
            },
            {
              '@_value': '1',
              '@_label': 'SHA1-160',
            },
            {
              '@_value': '2',
              '@_label': 'MD5',
            },
          ],
        },
        '@_name': 'ContentSigHashAlgo',
        '@_path':
          '\\Segment\\Tracks\\TrackEntry\\ContentEncodings\\ContentEncoding\\ContentEncryption\\ContentSigHashAlgo',
        '@_id': '0x47E6',
        '@_type': 'uinteger',
        '@_maxver': '0',
        '@_default': '0',
        '@_maxOccurs': '1',
      },
      {
        documentation: {
          '#text':
            'A Top-Level Element to speed seeking access.\nAll entries are local to the Segment.',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        implementation_note: {
          '#text':
            'This Element **SHOULD** be set when the Segment is not transmitted as a live stream (see #livestreaming).',
          '@_note_attribute': 'minOccurs',
        },
        extension: {
          '@_type': 'webmproject.org',
          '@_webm': '1',
        },
        '@_name': 'Cues',
        '@_path': '\\Segment\\Cues',
        '@_id': '0x1C53BB6B',
        '@_type': 'master',
        '@_maxOccurs': '1',
      },
      {
        documentation: {
          '#text': 'Contains all information relative to a seek point in the Segment.',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        extension: {
          '@_type': 'webmproject.org',
          '@_webm': '1',
        },
        '@_name': 'CuePoint',
        '@_path': '\\Segment\\Cues\\CuePoint',
        '@_id': '0xBB',
        '@_type': 'master',
        '@_minOccurs': '1',
      },
      {
        documentation: {
          '#text':
            'Absolute timestamp of the seek point, expressed in Matroska Ticks -- ie in nanoseconds; see (#timestamp-ticks).',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        extension: {
          '@_type': 'webmproject.org',
          '@_webm': '1',
        },
        '@_name': 'CueTime',
        '@_path': '\\Segment\\Cues\\CuePoint\\CueTime',
        '@_id': '0xB3',
        '@_type': 'uinteger',
        '@_minOccurs': '1',
        '@_maxOccurs': '1',
      },
      {
        documentation: {
          '#text': 'Contain positions for different tracks corresponding to the timestamp.',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        extension: {
          '@_type': 'webmproject.org',
          '@_webm': '1',
        },
        '@_name': 'CueTrackPositions',
        '@_path': '\\Segment\\Cues\\CuePoint\\CueTrackPositions',
        '@_id': '0xB7',
        '@_type': 'master',
        '@_minOccurs': '1',
      },
      {
        documentation: {
          '#text': 'The track for which a position is given.',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        extension: {
          '@_type': 'webmproject.org',
          '@_webm': '1',
        },
        '@_name': 'CueTrack',
        '@_path': '\\Segment\\Cues\\CuePoint\\CueTrackPositions\\CueTrack',
        '@_id': '0xF7',
        '@_type': 'uinteger',
        '@_range': 'not 0',
        '@_minOccurs': '1',
        '@_maxOccurs': '1',
      },
      {
        documentation: {
          '#text':
            'The Segment Position ((#segment-position)) of the Cluster containing the associated Block.',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        extension: {
          '@_type': 'webmproject.org',
          '@_webm': '1',
        },
        '@_name': 'CueClusterPosition',
        '@_path': '\\Segment\\Cues\\CuePoint\\CueTrackPositions\\CueClusterPosition',
        '@_id': '0xF1',
        '@_type': 'uinteger',
        '@_minOccurs': '1',
        '@_maxOccurs': '1',
      },
      {
        documentation: {
          '#text':
            'The relative position inside the Cluster of the referenced SimpleBlock or BlockGroup\nwith 0 being the first possible position for an Element inside that Cluster.',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        extension: {
          '@_type': 'webmproject.org',
          '@_webm': '1',
        },
        '@_name': 'CueRelativePosition',
        '@_path': '\\Segment\\Cues\\CuePoint\\CueTrackPositions\\CueRelativePosition',
        '@_id': '0xF0',
        '@_type': 'uinteger',
        '@_minver': '4',
        '@_maxOccurs': '1',
      },
      {
        documentation: {
          '#text':
            "The duration of the block, expressed in Segment Ticks which is based on TimestampScale; see (#timestamp-ticks).\nIf missing, the track's DefaultDuration does not apply and no duration information is available in terms of the cues.",
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        extension: {
          '@_type': 'webmproject.org',
          '@_webm': '1',
        },
        '@_name': 'CueDuration',
        '@_path': '\\Segment\\Cues\\CuePoint\\CueTrackPositions\\CueDuration',
        '@_id': '0xB2',
        '@_type': 'uinteger',
        '@_minver': '4',
        '@_maxOccurs': '1',
      },
      {
        documentation: {
          '#text': 'Number of the Block in the specified Cluster.',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        extension: {
          '@_type': 'webmproject.org',
          '@_webm': '1',
        },
        '@_name': 'CueBlockNumber',
        '@_path': '\\Segment\\Cues\\CuePoint\\CueTrackPositions\\CueBlockNumber',
        '@_id': '0x5378',
        '@_type': 'uinteger',
        '@_range': 'not 0',
        '@_maxOccurs': '1',
      },
      {
        documentation: {
          '#text':
            'The Segment Position ((#segment-position)) of the Codec State corresponding to this Cue Element.\n0 means that the data is taken from the initial Track Entry.',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        '@_name': 'CueCodecState',
        '@_path': '\\Segment\\Cues\\CuePoint\\CueTrackPositions\\CueCodecState',
        '@_id': '0xEA',
        '@_type': 'uinteger',
        '@_minver': '2',
        '@_default': '0',
        '@_minOccurs': '1',
        '@_maxOccurs': '1',
      },
      {
        documentation: {
          '#text': 'The Clusters containing the referenced Blocks.',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        '@_name': 'CueReference',
        '@_path': '\\Segment\\Cues\\CuePoint\\CueTrackPositions\\CueReference',
        '@_id': '0xDB',
        '@_type': 'master',
        '@_minver': '2',
      },
      {
        documentation: {
          '#text':
            'Timestamp of the referenced Block, expressed in Matroska Ticks -- ie in nanoseconds; see (#timestamp-ticks).',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        '@_name': 'CueRefTime',
        '@_path': '\\Segment\\Cues\\CuePoint\\CueTrackPositions\\CueReference\\CueRefTime',
        '@_id': '0x96',
        '@_type': 'uinteger',
        '@_minver': '2',
        '@_minOccurs': '1',
        '@_maxOccurs': '1',
      },
      {
        documentation: {
          '#text': 'The Segment Position of the Cluster containing the referenced Block.',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        '@_name': 'CueRefCluster',
        '@_path': '\\Segment\\Cues\\CuePoint\\CueTrackPositions\\CueReference\\CueRefCluster',
        '@_id': '0x97',
        '@_type': 'uinteger',
        '@_minver': '0',
        '@_maxver': '0',
        '@_minOccurs': '1',
        '@_maxOccurs': '1',
      },
      {
        documentation: {
          '#text': 'Number of the referenced Block of Track X in the specified Cluster.',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        '@_name': 'CueRefNumber',
        '@_path': '\\Segment\\Cues\\CuePoint\\CueTrackPositions\\CueReference\\CueRefNumber',
        '@_id': '0x535F',
        '@_type': 'uinteger',
        '@_minver': '0',
        '@_maxver': '0',
        '@_range': 'not 0',
        '@_default': '1',
        '@_maxOccurs': '1',
      },
      {
        documentation: {
          '#text':
            'The Segment Position of the Codec State corresponding to this referenced Element.\n0 means that the data is taken from the initial Track Entry.',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        '@_name': 'CueRefCodecState',
        '@_path': '\\Segment\\Cues\\CuePoint\\CueTrackPositions\\CueReference\\CueRefCodecState',
        '@_id': '0xEB',
        '@_type': 'uinteger',
        '@_minver': '0',
        '@_maxver': '0',
        '@_default': '0',
        '@_maxOccurs': '1',
      },
      {
        documentation: {
          '#text': 'Contain attached files.',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        '@_name': 'Attachments',
        '@_path': '\\Segment\\Attachments',
        '@_id': '0x1941A469',
        '@_type': 'master',
        '@_maxOccurs': '1',
      },
      {
        documentation: {
          '#text': 'An attached file.',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        extension: {
          '@_type': 'libmatroska',
          '@_cppname': 'Attached',
        },
        '@_name': 'AttachedFile',
        '@_path': '\\Segment\\Attachments\\AttachedFile',
        '@_id': '0x61A7',
        '@_type': 'master',
        '@_minOccurs': '1',
      },
      {
        documentation: {
          '#text': 'A human-friendly name for the attached file.',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        '@_name': 'FileDescription',
        '@_path': '\\Segment\\Attachments\\AttachedFile\\FileDescription',
        '@_id': '0x467E',
        '@_type': 'utf-8',
        '@_maxOccurs': '1',
      },
      {
        documentation: {
          '#text': 'Filename of the attached file.',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        '@_name': 'FileName',
        '@_path': '\\Segment\\Attachments\\AttachedFile\\FileName',
        '@_id': '0x466E',
        '@_type': 'utf-8',
        '@_minOccurs': '1',
        '@_maxOccurs': '1',
      },
      {
        documentation: {
          '#text': 'MIME type of the file.',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        extension: [
          {
            '@_type': 'libmatroska',
            '@_cppname': 'MimeType',
          },
          {
            '@_type': 'stream copy',
            '@_keep': '1',
          },
        ],
        '@_name': 'FileMimeType',
        '@_path': '\\Segment\\Attachments\\AttachedFile\\FileMimeType',
        '@_id': '0x4660',
        '@_type': 'string',
        '@_minOccurs': '1',
        '@_maxOccurs': '1',
      },
      {
        documentation: {
          '#text': 'The data of the file.',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        extension: {
          '@_type': 'stream copy',
          '@_keep': '1',
        },
        '@_name': 'FileData',
        '@_path': '\\Segment\\Attachments\\AttachedFile\\FileData',
        '@_id': '0x465C',
        '@_type': 'binary',
        '@_minOccurs': '1',
        '@_maxOccurs': '1',
      },
      {
        documentation: {
          '#text': 'Unique ID representing the file, as random as possible.',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        extension: {
          '@_type': 'stream copy',
          '@_keep': '1',
        },
        '@_name': 'FileUID',
        '@_path': '\\Segment\\Attachments\\AttachedFile\\FileUID',
        '@_id': '0x46AE',
        '@_type': 'uinteger',
        '@_range': 'not 0',
        '@_minOccurs': '1',
        '@_maxOccurs': '1',
      },
      {
        documentation: {
          '#text': 'A binary value that a track/codec can refer to when the attachment is needed.',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        '@_name': 'FileReferral',
        '@_path': '\\Segment\\Attachments\\AttachedFile\\FileReferral',
        '@_id': '0x4675',
        '@_type': 'binary',
        '@_minver': '0',
        '@_maxver': '0',
        '@_maxOccurs': '1',
      },
      {
        documentation: [
          {
            '#text':
              'The timestamp at which this optimized font attachment comes into context, expressed in Segment Ticks which is based on TimestampScale. See [@?DivXWorldFonts].',
            '@_lang': 'en',
            '@_purpose': 'definition',
          },
          {
            '#text':
              'This element is reserved for future use and if written **MUST** be the segment start timestamp.',
            '@_lang': 'en',
            '@_purpose': 'usage notes',
          },
        ],
        extension: {
          '@_type': 'divx.com',
          '@_divx': '1',
        },
        '@_name': 'FileUsedStartTime',
        '@_path': '\\Segment\\Attachments\\AttachedFile\\FileUsedStartTime',
        '@_id': '0x4661',
        '@_type': 'uinteger',
        '@_minver': '0',
        '@_maxver': '0',
        '@_maxOccurs': '1',
      },
      {
        documentation: [
          {
            '#text':
              'The timestamp at which this optimized font attachment goes out of context, expressed in Segment Ticks which is based on TimestampScale. See [@?DivXWorldFonts].',
            '@_lang': 'en',
            '@_purpose': 'definition',
          },
          {
            '#text':
              'This element is reserved for future use and if written **MUST** be the segment end timestamp.',
            '@_lang': 'en',
            '@_purpose': 'usage notes',
          },
        ],
        extension: {
          '@_type': 'divx.com',
          '@_divx': '1',
        },
        '@_name': 'FileUsedEndTime',
        '@_path': '\\Segment\\Attachments\\AttachedFile\\FileUsedEndTime',
        '@_id': '0x4662',
        '@_type': 'uinteger',
        '@_minver': '0',
        '@_maxver': '0',
        '@_maxOccurs': '1',
      },
      {
        documentation: {
          '#text':
            'A system to define basic menus and partition data.\nFor more detailed information, look at the Chapters explanation in (#chapters).',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        extension: {
          '@_type': 'webmproject.org',
          '@_webm': '1',
        },
        '@_name': 'Chapters',
        '@_path': '\\Segment\\Chapters',
        '@_id': '0x1043A770',
        '@_type': 'master',
        '@_maxOccurs': '1',
        '@_recurring': '1',
      },
      {
        documentation: {
          '#text': 'Contains all information about a Segment edition.',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        extension: {
          '@_type': 'webmproject.org',
          '@_webm': '1',
        },
        '@_name': 'EditionEntry',
        '@_path': '\\Segment\\Chapters\\EditionEntry',
        '@_id': '0x45B9',
        '@_type': 'master',
        '@_minOccurs': '1',
      },
      {
        documentation: {
          '#text': "A unique ID to identify the edition. It's useful for tagging an edition.",
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        extension: {
          '@_type': 'stream copy',
          '@_keep': '1',
        },
        '@_name': 'EditionUID',
        '@_path': '\\Segment\\Chapters\\EditionEntry\\EditionUID',
        '@_id': '0x45BC',
        '@_type': 'uinteger',
        '@_range': 'not 0',
        '@_maxOccurs': '1',
      },
      {
        documentation: {
          '#text':
            'Set to 1 if an edition is hidden. Hidden editions **SHOULD NOT** be available to the user interface\n(but still to Control Tracks; see (#chapter-flags) on Chapter flags).',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        extension: {
          '@_type': 'other document',
          '@_spec': 'control-track',
        },
        '@_name': 'EditionFlagHidden',
        '@_path': '\\Segment\\Chapters\\EditionEntry\\EditionFlagHidden',
        '@_id': '0x45BD',
        '@_type': 'uinteger',
        '@_range': '0-1',
        '@_default': '0',
        '@_minOccurs': '1',
        '@_maxOccurs': '1',
      },
      {
        documentation: {
          '#text': 'Set to 1 if the edition **SHOULD** be used as the default one.',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        '@_name': 'EditionFlagDefault',
        '@_path': '\\Segment\\Chapters\\EditionEntry\\EditionFlagDefault',
        '@_id': '0x45DB',
        '@_type': 'uinteger',
        '@_range': '0-1',
        '@_default': '0',
        '@_minOccurs': '1',
        '@_maxOccurs': '1',
      },
      {
        documentation: {
          '#text':
            'Set to 1 if the chapters can be defined multiple times and the order to play them is enforced; see (#editionflagordered).',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        '@_name': 'EditionFlagOrdered',
        '@_path': '\\Segment\\Chapters\\EditionEntry\\EditionFlagOrdered',
        '@_id': '0x45DD',
        '@_type': 'uinteger',
        '@_range': '0-1',
        '@_default': '0',
        '@_minOccurs': '1',
        '@_maxOccurs': '1',
      },
      {
        documentation: {
          '#text':
            'Contains the atom information to use as the chapter atom (apply to all tracks).',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        extension: {
          '@_type': 'webmproject.org',
          '@_webm': '1',
        },
        '@_name': 'ChapterAtom',
        '@_path': '\\Segment\\Chapters\\EditionEntry\\+ChapterAtom',
        '@_id': '0xB6',
        '@_type': 'master',
        '@_minOccurs': '1',
        '@_recursive': '1',
      },
      {
        documentation: {
          '#text': 'A unique ID to identify the Chapter.',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        extension: [
          {
            '@_type': 'webmproject.org',
            '@_webm': '1',
          },
          {
            '@_type': 'stream copy',
            '@_keep': '1',
          },
        ],
        '@_name': 'ChapterUID',
        '@_path': '\\Segment\\Chapters\\EditionEntry\\+ChapterAtom\\ChapterUID',
        '@_id': '0x73C4',
        '@_type': 'uinteger',
        '@_range': 'not 0',
        '@_minOccurs': '1',
        '@_maxOccurs': '1',
      },
      {
        documentation: {
          '#text':
            'A unique string ID to identify the Chapter.\nUse for WebVTT cue identifier storage [@!WebVTT].',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        extension: {
          '@_type': 'webmproject.org',
          '@_webm': '1',
        },
        '@_name': 'ChapterStringUID',
        '@_path': '\\Segment\\Chapters\\EditionEntry\\+ChapterAtom\\ChapterStringUID',
        '@_id': '0x5654',
        '@_type': 'utf-8',
        '@_minver': '3',
        '@_maxOccurs': '1',
      },
      {
        documentation: {
          '#text':
            'Timestamp of the start of Chapter, expressed in Matroska Ticks -- ie in nanoseconds; see (#timestamp-ticks).',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        extension: {
          '@_type': 'webmproject.org',
          '@_webm': '1',
        },
        '@_name': 'ChapterTimeStart',
        '@_path': '\\Segment\\Chapters\\EditionEntry\\+ChapterAtom\\ChapterTimeStart',
        '@_id': '0x91',
        '@_type': 'uinteger',
        '@_minOccurs': '1',
        '@_maxOccurs': '1',
      },
      {
        documentation: [
          {
            '#text':
              'Timestamp of the end of Chapter timestamp excluded, expressed in Matroska Ticks -- ie in nanoseconds; see (#timestamp-ticks).\nThe value **MUST** be greater than or equal to the `ChapterTimeStart` of the same `ChapterAtom`.',
            '@_lang': 'en',
            '@_purpose': 'definition',
          },
          {
            '#text':
              'The `ChapterTimeEnd` timestamp value being excluded, it **MUST** take in account the duration of\nthe last frame it includes, especially for the `ChapterAtom` using the last frames of the `Segment`.',
            '@_lang': 'en',
            '@_purpose': 'usage notes',
          },
        ],
        implementation_note: {
          '#text':
            "ChapterTimeEnd **MUST** be set (minOccurs=1) if the Edition is an ordered edition; see (#editionflagordered), unless it's a `Parent Chapter`; see (#nested-chapters)",
          '@_note_attribute': 'minOccurs',
        },
        extension: {
          '@_type': 'webmproject.org',
          '@_webm': '1',
        },
        '@_name': 'ChapterTimeEnd',
        '@_path': '\\Segment\\Chapters\\EditionEntry\\+ChapterAtom\\ChapterTimeEnd',
        '@_id': '0x92',
        '@_type': 'uinteger',
        '@_maxOccurs': '1',
      },
      {
        documentation: {
          '#text':
            'Set to 1 if a chapter is hidden. Hidden chapters **SHOULD NOT** be available to the user interface\n(but still to Control Tracks; see (#chapterflaghidden) on Chapter flags).',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        '@_name': 'ChapterFlagHidden',
        '@_path': '\\Segment\\Chapters\\EditionEntry\\+ChapterAtom\\ChapterFlagHidden',
        '@_id': '0x98',
        '@_type': 'uinteger',
        '@_range': '0-1',
        '@_default': '0',
        '@_minOccurs': '1',
        '@_maxOccurs': '1',
      },
      {
        documentation: {
          '#text':
            'Set to 1 if the chapter is enabled. It can be enabled/disabled by a Control Track.\nWhen disabled, the movie **SHOULD** skip all the content between the TimeStart and TimeEnd of this chapter; see (#chapter-flags) on Chapter flags.',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        extension: {
          '@_type': 'other document',
          '@_spec': 'control-track',
        },
        '@_name': 'ChapterFlagEnabled',
        '@_path': '\\Segment\\Chapters\\EditionEntry\\+ChapterAtom\\ChapterFlagEnabled',
        '@_id': '0x4598',
        '@_type': 'uinteger',
        '@_range': '0-1',
        '@_default': '1',
        '@_minOccurs': '1',
        '@_maxOccurs': '1',
      },
      {
        documentation: [
          {
            '#text':
              'The SegmentUUID of another Segment to play during this chapter (128 bits).\nLike the SegmentUUID, it is a Universally Unique IDentifier stored in binary form [@!RFC4122].',
            '@_lang': 'en',
            '@_purpose': 'definition',
          },
          {
            '#text':
              'The value **MUST NOT** be the `SegmentUUID` value of the `Segment` it belongs to.',
            '@_lang': 'en',
            '@_purpose': 'usage notes',
          },
        ],
        implementation_note: {
          '#text':
            'ChapterSegmentUUID **MUST** be set (minOccurs=1) if ChapterSegmentEditionUID is used; see (#medium-linking) on medium-linking Segments.',
          '@_note_attribute': 'minOccurs',
        },
        extension: {
          '@_type': 'libmatroska',
          '@_cppname': 'ChapterSegmentUID',
        },
        '@_name': 'ChapterSegmentUUID',
        '@_path': '\\Segment\\Chapters\\EditionEntry\\+ChapterAtom\\ChapterSegmentUUID',
        '@_id': '0x6E67',
        '@_type': 'binary',
        '@_range': '>0',
        '@_length': '16',
        '@_maxOccurs': '1',
      },
      {
        documentation: {
          '#text':
            'The EditionUID to play from the Segment linked in ChapterSegmentUUID.\nIf ChapterSegmentEditionUID is undeclared, then no Edition of the linked Segment is used; see (#medium-linking) on medium-linking Segments.',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        '@_name': 'ChapterSegmentEditionUID',
        '@_path': '\\Segment\\Chapters\\EditionEntry\\+ChapterAtom\\ChapterSegmentEditionUID',
        '@_id': '0x6EBC',
        '@_type': 'uinteger',
        '@_range': 'not 0',
        '@_maxOccurs': '1',
      },
      {
        documentation: {
          '#text':
            'Specify the physical equivalent of this ChapterAtom like "DVD" (60) or "SIDE" (50);\nsee (#physical-types) for a complete list of values.',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        '@_name': 'ChapterPhysicalEquiv',
        '@_path': '\\Segment\\Chapters\\EditionEntry\\+ChapterAtom\\ChapterPhysicalEquiv',
        '@_id': '0x63C3',
        '@_type': 'uinteger',
        '@_maxOccurs': '1',
      },
      {
        documentation: {
          '#text':
            'List of tracks on which the chapter applies. If this Element is not present, all tracks apply',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        extension: {
          '@_type': 'other document',
          '@_spec': 'control-track',
        },
        '@_name': 'ChapterTrack',
        '@_path': '\\Segment\\Chapters\\EditionEntry\\+ChapterAtom\\ChapterTrack',
        '@_id': '0x8F',
        '@_type': 'master',
        '@_maxOccurs': '1',
      },
      {
        documentation: {
          '#text':
            'UID of the Track to apply this chapter to.\nIn the absence of a control track, choosing this chapter will select the listed Tracks and deselect unlisted tracks.\nAbsence of this Element indicates that the Chapter **SHOULD** be applied to any currently used Tracks.',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        extension: [
          {
            '@_type': 'libmatroska',
            '@_cppname': 'ChapterTrackNumber',
          },
          {
            '@_type': 'other document',
            '@_spec': 'control-track',
          },
        ],
        '@_name': 'ChapterTrackUID',
        '@_path': '\\Segment\\Chapters\\EditionEntry\\+ChapterAtom\\ChapterTrack\\ChapterTrackUID',
        '@_id': '0x89',
        '@_type': 'uinteger',
        '@_range': 'not 0',
        '@_minOccurs': '1',
      },
      {
        documentation: {
          '#text': 'Contains all possible strings to use for the chapter display.',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        extension: {
          '@_type': 'webmproject.org',
          '@_webm': '1',
        },
        '@_name': 'ChapterDisplay',
        '@_path': '\\Segment\\Chapters\\EditionEntry\\+ChapterAtom\\ChapterDisplay',
        '@_id': '0x80',
        '@_type': 'master',
      },
      {
        documentation: {
          '#text': 'Contains the string to use as the chapter atom.',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        extension: [
          {
            '@_type': 'webmproject.org',
            '@_webm': '1',
          },
          {
            '@_type': 'libmatroska',
            '@_cppname': 'ChapterString',
          },
        ],
        '@_name': 'ChapString',
        '@_path': '\\Segment\\Chapters\\EditionEntry\\+ChapterAtom\\ChapterDisplay\\ChapString',
        '@_id': '0x85',
        '@_type': 'utf-8',
        '@_minOccurs': '1',
        '@_maxOccurs': '1',
      },
      {
        documentation: {
          '#text':
            'A language corresponding to the string,\nin the bibliographic ISO-639-2 form [@!ISO639-2].\nThis Element **MUST** be ignored if a ChapLanguageBCP47 Element is used within the same ChapterDisplay Element.',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        extension: [
          {
            '@_type': 'webmproject.org',
            '@_webm': '1',
          },
          {
            '@_type': 'libmatroska',
            '@_cppname': 'ChapterLanguage',
          },
        ],
        '@_name': 'ChapLanguage',
        '@_path': '\\Segment\\Chapters\\EditionEntry\\+ChapterAtom\\ChapterDisplay\\ChapLanguage',
        '@_id': '0x437C',
        '@_type': 'string',
        '@_default': 'eng',
        '@_minOccurs': '1',
      },
      {
        documentation: {
          '#text':
            'Specifies a language corresponding to the ChapString in the format defined in [@!BCP47]\nand using the IANA Language Subtag Registry [@!IANALangRegistry].\nIf a ChapLanguageBCP47 Element is used, then any ChapLanguage and ChapCountry Elements used in the same ChapterDisplay **MUST** be ignored.',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        extension: {
          '@_type': 'libmatroska',
          '@_cppname': 'ChapLanguageIETF',
        },
        '@_name': 'ChapLanguageBCP47',
        '@_path':
          '\\Segment\\Chapters\\EditionEntry\\+ChapterAtom\\ChapterDisplay\\ChapLanguageBCP47',
        '@_id': '0x437D',
        '@_type': 'string',
        '@_minver': '4',
      },
      {
        documentation: {
          '#text':
            'A country corresponding to the string, using the same 2 octets country-codes as in Internet domains [@!IANADomains] based on [@!ISO3166-1] alpha-2 codes.\nThis Element **MUST** be ignored if a ChapLanguageBCP47 Element is used within the same ChapterDisplay Element.',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        extension: [
          {
            '@_type': 'webmproject.org',
            '@_webm': '1',
          },
          {
            '@_type': 'libmatroska',
            '@_cppname': 'ChapterCountry',
          },
        ],
        '@_name': 'ChapCountry',
        '@_path': '\\Segment\\Chapters\\EditionEntry\\+ChapterAtom\\ChapterDisplay\\ChapCountry',
        '@_id': '0x437E',
        '@_type': 'string',
      },
      {
        documentation: {
          '#text': 'Contains all the commands associated to the Atom.',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        extension: {
          '@_type': 'libmatroska',
          '@_cppname': 'ChapterProcess',
        },
        '@_name': 'ChapProcess',
        '@_path': '\\Segment\\Chapters\\EditionEntry\\+ChapterAtom\\ChapProcess',
        '@_id': '0x6944',
        '@_type': 'master',
      },
      {
        documentation: {
          '#text':
            'Contains the type of the codec used for the processing.\nA value of 0 means native Matroska processing (to be defined), a value of 1 means the DVD command set is used; see (#menu-features) on DVD menus.\nMore codec IDs can be added later.',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        extension: {
          '@_type': 'libmatroska',
          '@_cppname': 'ChapterProcessCodecID',
        },
        '@_name': 'ChapProcessCodecID',
        '@_path':
          '\\Segment\\Chapters\\EditionEntry\\+ChapterAtom\\ChapProcess\\ChapProcessCodecID',
        '@_id': '0x6955',
        '@_type': 'uinteger',
        '@_default': '0',
        '@_minOccurs': '1',
        '@_maxOccurs': '1',
      },
      {
        documentation: {
          '#text':
            'Some optional data attached to the ChapProcessCodecID information.\n    For ChapProcessCodecID = 1, it is the "DVD level" equivalent; see (#menu-features) on DVD menus.',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        extension: {
          '@_type': 'libmatroska',
          '@_cppname': 'ChapterProcessPrivate',
        },
        '@_name': 'ChapProcessPrivate',
        '@_path':
          '\\Segment\\Chapters\\EditionEntry\\+ChapterAtom\\ChapProcess\\ChapProcessPrivate',
        '@_id': '0x450D',
        '@_type': 'binary',
        '@_maxOccurs': '1',
      },
      {
        documentation: {
          '#text': 'Contains all the commands associated to the Atom.',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        extension: {
          '@_type': 'libmatroska',
          '@_cppname': 'ChapterProcessCommand',
        },
        '@_name': 'ChapProcessCommand',
        '@_path':
          '\\Segment\\Chapters\\EditionEntry\\+ChapterAtom\\ChapProcess\\ChapProcessCommand',
        '@_id': '0x6911',
        '@_type': 'master',
      },
      {
        documentation: {
          '#text': 'Defines when the process command **SHOULD** be handled',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        restriction: {
          enum: [
            {
              '@_value': '0',
              '@_label': 'during the whole chapter',
            },
            {
              '@_value': '1',
              '@_label': 'before starting playback',
            },
            {
              '@_value': '2',
              '@_label': 'after playback of the chapter',
            },
          ],
        },
        extension: {
          '@_type': 'libmatroska',
          '@_cppname': 'ChapterProcessTime',
        },
        '@_name': 'ChapProcessTime',
        '@_path':
          '\\Segment\\Chapters\\EditionEntry\\+ChapterAtom\\ChapProcess\\ChapProcessCommand\\ChapProcessTime',
        '@_id': '0x6922',
        '@_type': 'uinteger',
        '@_minOccurs': '1',
        '@_maxOccurs': '1',
      },
      {
        documentation: {
          '#text':
            'Contains the command information.\nThe data **SHOULD** be interpreted depending on the ChapProcessCodecID value. For ChapProcessCodecID = 1,\nthe data correspond to the binary DVD cell pre/post commands; see (#menu-features) on DVD menus.',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        extension: {
          '@_type': 'libmatroska',
          '@_cppname': 'ChapterProcessData',
        },
        '@_name': 'ChapProcessData',
        '@_path':
          '\\Segment\\Chapters\\EditionEntry\\+ChapterAtom\\ChapProcess\\ChapProcessCommand\\ChapProcessData',
        '@_id': '0x6933',
        '@_type': 'binary',
        '@_minOccurs': '1',
        '@_maxOccurs': '1',
      },
      {
        documentation: {
          '#text':
            'Element containing metadata describing Tracks, Editions, Chapters, Attachments, or the Segment as a whole.\nA list of valid tags can be found in [@!MatroskaTags].',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        extension: {
          '@_type': 'webmproject.org',
          '@_webm': '1',
        },
        '@_name': 'Tags',
        '@_path': '\\Segment\\Tags',
        '@_id': '0x1254C367',
        '@_type': 'master',
      },
      {
        documentation: {
          '#text': 'A single metadata descriptor.',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        extension: {
          '@_type': 'webmproject.org',
          '@_webm': '1',
        },
        '@_name': 'Tag',
        '@_path': '\\Segment\\Tags\\Tag',
        '@_id': '0x7373',
        '@_type': 'master',
        '@_minOccurs': '1',
      },
      {
        documentation: {
          '#text':
            'Specifies which other elements the metadata represented by the Tag applies to.\nIf empty or not present, then the Tag describes everything in the Segment.',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        extension: [
          {
            '@_type': 'webmproject.org',
            '@_webm': '1',
          },
          {
            '@_type': 'libmatroska',
            '@_cppname': 'TagTargets',
          },
        ],
        '@_name': 'Targets',
        '@_path': '\\Segment\\Tags\\Tag\\Targets',
        '@_id': '0x63C0',
        '@_type': 'master',
        '@_minOccurs': '1',
        '@_maxOccurs': '1',
      },
      {
        documentation: {
          '#text': 'A number to indicate the logical level of the target.',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        restriction: {
          enum: [
            {
              documentation: {
                '#text': 'The highest hierarchical level that tags can describe.',
                '@_lang': 'en',
                '@_purpose': 'definition',
              },
              '@_value': '70',
              '@_label': 'COLLECTION',
            },
            {
              documentation: {
                '#text': 'A list of lower levels grouped together.',
                '@_lang': 'en',
                '@_purpose': 'definition',
              },
              '@_value': '60',
              '@_label': 'EDITION / ISSUE / VOLUME / OPUS / SEASON / SEQUEL',
            },
            {
              documentation: {
                '#text':
                  'The most common grouping level of music and video (equals to an episode for TV series).',
                '@_lang': 'en',
                '@_purpose': 'definition',
              },
              '@_value': '50',
              '@_label': 'ALBUM / OPERA / CONCERT / MOVIE / EPISODE',
            },
            {
              documentation: {
                '#text': 'When an album or episode has different logical parts.',
                '@_lang': 'en',
                '@_purpose': 'definition',
              },
              '@_value': '40',
              '@_label': 'PART / SESSION',
            },
            {
              documentation: {
                '#text': 'The common parts of an album or movie.',
                '@_lang': 'en',
                '@_purpose': 'definition',
              },
              '@_value': '30',
              '@_label': 'TRACK / SONG / CHAPTER',
            },
            {
              documentation: {
                '#text': 'Corresponds to parts of a track for audio (like a movement).',
                '@_lang': 'en',
                '@_purpose': 'definition',
              },
              '@_value': '20',
              '@_label': 'SUBTRACK / PART / MOVEMENT / SCENE',
            },
            {
              documentation: {
                '#text': 'The lowest hierarchy found in music or movies.',
                '@_lang': 'en',
                '@_purpose': 'definition',
              },
              '@_value': '10',
              '@_label': 'SHOT',
            },
          ],
        },
        extension: [
          {
            '@_type': 'webmproject.org',
            '@_webm': '1',
          },
          {
            '@_type': 'libmatroska',
            '@_cppname': 'TagTargetTypeValue',
          },
        ],
        '@_name': 'TargetTypeValue',
        '@_path': '\\Segment\\Tags\\Tag\\Targets\\TargetTypeValue',
        '@_id': '0x68CA',
        '@_type': 'uinteger',
        '@_default': '50',
        '@_minOccurs': '1',
        '@_maxOccurs': '1',
      },
      {
        documentation: {
          '#text':
            'An informational string that can be used to display the logical level of the target like "ALBUM", "TRACK", "MOVIE", "CHAPTER", etc\n; see Section 6.4 of [@!MatroskaTags].',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        restriction: {
          enum: [
            {
              '@_value': 'COLLECTION',
              '@_label': 'TargetTypeValue 70',
            },
            {
              '@_value': 'EDITION',
              '@_label': 'TargetTypeValue 60',
            },
            {
              '@_value': 'ISSUE',
              '@_label': 'TargetTypeValue 60',
            },
            {
              '@_value': 'VOLUME',
              '@_label': 'TargetTypeValue 60',
            },
            {
              '@_value': 'OPUS',
              '@_label': 'TargetTypeValue 60',
            },
            {
              '@_value': 'SEASON',
              '@_label': 'TargetTypeValue 60',
            },
            {
              '@_value': 'SEQUEL',
              '@_label': 'TargetTypeValue 60',
            },
            {
              '@_value': 'ALBUM',
              '@_label': 'TargetTypeValue 50',
            },
            {
              '@_value': 'OPERA',
              '@_label': 'TargetTypeValue 50',
            },
            {
              '@_value': 'CONCERT',
              '@_label': 'TargetTypeValue 50',
            },
            {
              '@_value': 'MOVIE',
              '@_label': 'TargetTypeValue 50',
            },
            {
              '@_value': 'EPISODE',
              '@_label': 'TargetTypeValue 50',
            },
            {
              '@_value': 'PART',
              '@_label': 'TargetTypeValue 40',
            },
            {
              '@_value': 'SESSION',
              '@_label': 'TargetTypeValue 40',
            },
            {
              '@_value': 'TRACK',
              '@_label': 'TargetTypeValue 30',
            },
            {
              '@_value': 'SONG',
              '@_label': 'TargetTypeValue 30',
            },
            {
              '@_value': 'CHAPTER',
              '@_label': 'TargetTypeValue 30',
            },
            {
              '@_value': 'SUBTRACK',
              '@_label': 'TargetTypeValue 20',
            },
            {
              '@_value': 'PART',
              '@_label': 'TargetTypeValue 20',
            },
            {
              '@_value': 'MOVEMENT',
              '@_label': 'TargetTypeValue 20',
            },
            {
              '@_value': 'SCENE',
              '@_label': 'TargetTypeValue 20',
            },
            {
              '@_value': 'SHOT',
              '@_label': 'TargetTypeValue 10',
            },
          ],
        },
        extension: [
          {
            '@_type': 'webmproject.org',
            '@_webm': '1',
          },
          {
            '@_type': 'libmatroska',
            '@_cppname': 'TagTargetType',
          },
        ],
        '@_name': 'TargetType',
        '@_path': '\\Segment\\Tags\\Tag\\Targets\\TargetType',
        '@_id': '0x63CA',
        '@_type': 'string',
        '@_maxOccurs': '1',
      },
      {
        documentation: [
          {
            '#text': 'A unique ID to identify the Track(s) the tags belong to.',
            '@_lang': 'en',
            '@_purpose': 'definition',
          },
          {
            '#text':
              'If the value is 0 at this level, the tags apply to all tracks in the Segment.\nIf set to any other value, it **MUST** match the `TrackUID` value of a track found in this Segment.',
            '@_lang': 'en',
            '@_purpose': 'usage notes',
          },
        ],
        extension: {
          '@_type': 'webmproject.org',
          '@_webm': '1',
        },
        '@_name': 'TagTrackUID',
        '@_path': '\\Segment\\Tags\\Tag\\Targets\\TagTrackUID',
        '@_id': '0x63C5',
        '@_type': 'uinteger',
        '@_default': '0',
      },
      {
        documentation: [
          {
            '#text': 'A unique ID to identify the EditionEntry(s) the tags belong to.',
            '@_lang': 'en',
            '@_purpose': 'definition',
          },
          {
            '#text':
              'If the value is 0 at this level, the tags apply to all editions in the Segment.\nIf set to any other value, it **MUST** match the `EditionUID` value of an edition found in this Segment.',
            '@_lang': 'en',
            '@_purpose': 'usage notes',
          },
        ],
        '@_name': 'TagEditionUID',
        '@_path': '\\Segment\\Tags\\Tag\\Targets\\TagEditionUID',
        '@_id': '0x63C9',
        '@_type': 'uinteger',
        '@_default': '0',
      },
      {
        documentation: [
          {
            '#text': 'A unique ID to identify the Chapter(s) the tags belong to.',
            '@_lang': 'en',
            '@_purpose': 'definition',
          },
          {
            '#text':
              'If the value is 0 at this level, the tags apply to all chapters in the Segment.\nIf set to any other value, it **MUST** match the `ChapterUID` value of a chapter found in this Segment.',
            '@_lang': 'en',
            '@_purpose': 'usage notes',
          },
        ],
        '@_name': 'TagChapterUID',
        '@_path': '\\Segment\\Tags\\Tag\\Targets\\TagChapterUID',
        '@_id': '0x63C4',
        '@_type': 'uinteger',
        '@_default': '0',
      },
      {
        documentation: [
          {
            '#text': 'A unique ID to identify the Attachment(s) the tags belong to.',
            '@_lang': 'en',
            '@_purpose': 'definition',
          },
          {
            '#text':
              'If the value is 0 at this level, the tags apply to all the attachments in the Segment.\nIf set to any other value, it **MUST** match the `FileUID` value of an attachment found in this Segment.',
            '@_lang': 'en',
            '@_purpose': 'usage notes',
          },
        ],
        '@_name': 'TagAttachmentUID',
        '@_path': '\\Segment\\Tags\\Tag\\Targets\\TagAttachmentUID',
        '@_id': '0x63C6',
        '@_type': 'uinteger',
        '@_default': '0',
      },
      {
        documentation: {
          '#text': 'Contains general information about the target.',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        extension: [
          {
            '@_type': 'webmproject.org',
            '@_webm': '1',
          },
          {
            '@_type': 'libmatroska',
            '@_cppname': 'TagSimple',
          },
        ],
        '@_name': 'SimpleTag',
        '@_path': '\\Segment\\Tags\\Tag\\+SimpleTag',
        '@_id': '0x67C8',
        '@_type': 'master',
        '@_minOccurs': '1',
        '@_recursive': '1',
      },
      {
        documentation: {
          '#text': 'The name of the Tag that is going to be stored.',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        extension: {
          '@_type': 'webmproject.org',
          '@_webm': '1',
        },
        '@_name': 'TagName',
        '@_path': '\\Segment\\Tags\\Tag\\+SimpleTag\\TagName',
        '@_id': '0x45A3',
        '@_type': 'utf-8',
        '@_minOccurs': '1',
        '@_maxOccurs': '1',
      },
      {
        documentation: {
          '#text':
            'Specifies the language of the tag specified, in the Matroska languages form;\nsee (#language-codes) on language codes.\nThis Element **MUST** be ignored if the TagLanguageBCP47 Element is used within the same SimpleTag Element.',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        extension: [
          {
            '@_type': 'webmproject.org',
            '@_webm': '1',
          },
          {
            '@_type': 'libmatroska',
            '@_cppname': 'TagLangue',
          },
        ],
        '@_name': 'TagLanguage',
        '@_path': '\\Segment\\Tags\\Tag\\+SimpleTag\\TagLanguage',
        '@_id': '0x447A',
        '@_type': 'string',
        '@_default': 'und',
        '@_minOccurs': '1',
        '@_maxOccurs': '1',
      },
      {
        documentation: {
          '#text':
            'Specifies the language used in the TagString according to [@!BCP47]\nand using the IANA Language Subtag Registry [@!IANALangRegistry].\nIf this Element is used, then any TagLanguage Elements used in the same SimpleTag **MUST** be ignored.',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        extension: {
          '@_type': 'libmatroska',
          '@_cppname': 'TagLanguageIETF',
        },
        '@_name': 'TagLanguageBCP47',
        '@_path': '\\Segment\\Tags\\Tag\\+SimpleTag\\TagLanguageBCP47',
        '@_id': '0x447B',
        '@_type': 'string',
        '@_minver': '4',
        '@_maxOccurs': '1',
      },
      {
        documentation: {
          '#text':
            'A boolean value to indicate if this is the default/original language to use for the given tag.',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        extension: {
          '@_type': 'webmproject.org',
          '@_webm': '1',
        },
        '@_name': 'TagDefault',
        '@_path': '\\Segment\\Tags\\Tag\\+SimpleTag\\TagDefault',
        '@_id': '0x4484',
        '@_type': 'uinteger',
        '@_range': '0-1',
        '@_default': '1',
        '@_minOccurs': '1',
        '@_maxOccurs': '1',
      },
      {
        documentation: {
          '#text':
            'A variant of the TagDefault element with a bogus Element ID; see (#tagdefault-element).',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        '@_name': 'TagDefaultBogus',
        '@_path': '\\Segment\\Tags\\Tag\\+SimpleTag\\TagDefaultBogus',
        '@_id': '0x44B4',
        '@_type': 'uinteger',
        '@_minver': '0',
        '@_maxver': '0',
        '@_range': '0-1',
        '@_default': '1',
        '@_minOccurs': '1',
        '@_maxOccurs': '1',
      },
      {
        documentation: {
          '#text': 'The value of the Tag.',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        extension: {
          '@_type': 'webmproject.org',
          '@_webm': '1',
        },
        '@_name': 'TagString',
        '@_path': '\\Segment\\Tags\\Tag\\+SimpleTag\\TagString',
        '@_id': '0x4487',
        '@_type': 'utf-8',
        '@_maxOccurs': '1',
      },
      {
        documentation: {
          '#text':
            'The values of the Tag, if it is binary. Note that this cannot be used in the same SimpleTag as TagString.',
          '@_lang': 'en',
          '@_purpose': 'definition',
        },
        extension: {
          '@_type': 'webmproject.org',
          '@_webm': '1',
        },
        '@_name': 'TagBinary',
        '@_path': '\\Segment\\Tags\\Tag\\+SimpleTag\\TagBinary',
        '@_id': '0x4485',
        '@_type': 'binary',
        '@_maxOccurs': '1',
      },
    ],
    '@_xmlns': 'urn:ietf:rfc:8794',
    '@_docType': 'matroska',
    '@_version': '4',
  },
};
