import { defineConfig } from 'tsdown';

export default defineConfig({
  entry: {
    index: 'src/index.ts',
    VideoChunkGenerator: 'src/VideoChunkGenerator.ts',
    VideoFrameGenerator: 'src/VideoFrameGenerator.ts',
    FadeTransform: 'src/FadeTransform.ts',
    ReducingValve: 'src/ReducingValve.ts',
    RangeFetcher: 'src/RangeFetcher.ts',
    CancelError: 'src/CancelError.ts',
  },
  outDir: 'build',
  format: ['esm', 'cjs'],
  dts: {
    cjsReexport: true,
  },
  clean: true,
  sourcemap: true,
  target: 'es2024',
  platform: 'neutral',
  outputOptions: {
    exports: 'named',
  },
  outExtensions: ({ format }) => ({
    js: format === 'cjs' ? '.cjs' : '.mjs',
    dts: format === 'cjs' ? '.d.cts' : '.d.mts',
  }),
});
