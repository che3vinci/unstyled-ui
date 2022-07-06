import commonjs from '@rollup/plugin-commonjs';
import rollupTypescript from '@rollup/plugin-typescript';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: './src/index.ts',
      name: 'responsive',
      formats: ['iife', 'es', 'umd'],
    },
    rollupOptions: {
      external: [
        /node:*/,
        'tslib',
        '@ant-design/icons',
        '@unstyled-ui/css',
        '@unstyled-ui/stitches',
      ],
      plugins: [commonjs()], // `commonjs` plugin include 'required' to single file
    },
  },
});
