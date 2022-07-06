import commonjs from '@rollup/plugin-commonjs';
import rollupTypescript from '@rollup/plugin-typescript';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: './src/index.tsx',
      name: 'uibasic',
      formats: ['iife', 'es', 'umd'],
    },
    rollupOptions: {
      external: [
        /node:*/,
        'tslib',
        'react',
        'react-dom',
        '@ant-design/icons',
        '@styless/css',
        '@c3/utils',
        '@c3/hooks',
        '@styless/stitches',
        '@c3/dom',
        'lodash',
        'deepmerge',
        'classnames',
      ],
      plugins: [commonjs()], // `commonjs` plugin include 'required' to single file
    },
  },
});
