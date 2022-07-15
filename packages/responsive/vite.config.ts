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
        '@c3/utils',
        '@unstyled-ui/stitches',
      ],
      plugins: [commonjs()],
    },
  },
});
