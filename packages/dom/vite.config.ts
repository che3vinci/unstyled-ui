import commonjs from '@rollup/plugin-commonjs';
import rollupTypescript from '@rollup/plugin-typescript';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: './src/index.ts',
      name: 'dom',
      formats: ['iife', 'es', 'umd'],
    },
    rollupOptions: {
      external: [
        'styled-components',
        'polished',
        'react',
        'tslib',

        '@ant-design/icons',
        'antd',
        /@c3\/*/,
        'react-dom',
        'lodash',
      ],
      plugins: [commonjs(), rollupTypescript()], // `commonjs` plugin include 'required' to single file
    },
  },
});
