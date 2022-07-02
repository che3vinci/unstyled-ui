import commonjs from '@rollup/plugin-commonjs';
import rollupTypescript from '@rollup/plugin-typescript';
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
        '@c3/css',
        '@c3/utils',
        'react',
      ],
      plugins: [commonjs()],
    },
  },
});
