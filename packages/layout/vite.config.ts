import commonjs from '@rollup/plugin-commonjs';
import rollupTypescript from '@rollup/plugin-typescript';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: './src/index.tsx',
      name: 'layout',
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
        '@unstyled-ui/core',
        '@c3/utils',
        '@unstyled-ui/stitches',
        '@unstyled-ui/responsive',
        'classnames',
      ],
      plugins: [commonjs()],
    },
  },
});
