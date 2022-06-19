import commonjs from '@rollup/plugin-commonjs';
import rollupTypescript from '@rollup/plugin-typescript';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    sourcemap: 'inline',
    minify: false,
    lib: {
      entry: './src/index.ts',
      name: 'api',
      formats: ['iife', 'es', 'umd'],
    },
    rollupOptions: {
      external: [/node:*/, '@c3/utils', 'tslib', '@c3/hooks', 'react'],
      plugins: [commonjs(), rollupTypescript()], // `commonjs` plugin include 'required' to single file
    },
  },
});
