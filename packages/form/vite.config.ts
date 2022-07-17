import commonjs from '@rollup/plugin-commonjs';
import rollupTypescript from '@rollup/plugin-typescript';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: './src/index.tsx',
      name: 'form',
      formats: ['iife', 'es', 'umd'],
    },
    rollupOptions: {
      external: [
        /node:*/,
        'tslib',
        'react',
        'react-dom',
        '@ant-design/icons',
        '@unstyled-ui/css',
        '@c3/utils',
        '@c3/hooks',
        '@unstyled-ui/stitches',
        'lodash',
        'classnames',
      ],
      plugins: [commonjs()],
    },
  },
});
