import commonjs from '@rollup/plugin-commonjs';
import rollupTypescript from '@rollup/plugin-typescript';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: './src/index.tsx',
      name: 'atomic',
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
        '@c3/hooks',
        '@unstyled-ui/stitches',
        '@c3/dom',
        'classnames',
      ],
      plugins: [commonjs()],
    },
  },
});
