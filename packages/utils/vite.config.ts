import commonjs from '@rollup/plugin-commonjs';
import rollupTypescript from '@rollup/plugin-typescript';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    minify: true,
    lib: {
      entry: './src/index.ts',
      name: 'css',
      formats: ['iife', 'es', 'umd'],
    },
    rollupOptions: {
      external: [
        /node:*/,
        'copy-to-clipboard',
        'dayjs',
        'axios',
        'qs',
        'lodash',
        'numeral',
        'tslib',
        'dayjs/plugin/utc',
      ],
      plugins: [commonjs(), rollupTypescript()], // `commonjs` plugin include 'required' to ¨ file
    },
  },
});
