import commonjs from '@rollup/plugin-commonjs';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    sourcemap: 'inline',
    minify: false,
    lib: {
      entry: './src/index.js',
      name: 'stitches',
      formats: ['iife', 'es', 'umd'],
    },
    rollupOptions: {
      external: [
        /node:*/,
        'tslib',
        '@stitches/core',
        '@unstyled-ui/css',
        '@unstyled-ui/responsive',
        '@c3/utils',
        'react',
      ],
      plugins: [commonjs()],
    },
  },
});
