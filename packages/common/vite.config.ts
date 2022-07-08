import commonjs from '@rollup/plugin-commonjs';
import rollupTypescript from '@rollup/plugin-typescript';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: './src/index.ts',
      name: 'common',
      formats: ['iife', 'es', 'umd'],
    },
    rollupOptions: {
      external: [/node:*/, 'tslib', 'classnames'],
      plugins: [commonjs()], // `commonjs` plugin include 'required' to single file
    },
  },
});
