import commonjs from '@rollup/plugin-commonjs';
import rollupTypescript from '@rollup/plugin-typescript';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: './src/index.tsx',
      name: 'uikits',
      formats: ['iife', 'es', 'umd'],
    },
    rollupOptions: {
      external: [
        /node:*/,
        'styled-components',
        'polished',
        'tslib',

        'react',
        'react-dom',
        '@ant-design/icons',
        'antd',
        '@c3/css',
        '@c3/utils',
        '@c3/hooks',
        '@c3/dom',
        'echarts',
        'react-slick',
        'slick-carousel',
        'lodash',
        'deepmerge',
        'classnames',
      ],
      plugins: [commonjs(), rollupTypescript()], // `commonjs` plugin include 'required' to single file
    },
  },
});
