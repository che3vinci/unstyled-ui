import commonjs from '@rollup/plugin-commonjs';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: './src/index.tsx',
      name: 'charts',
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
        '@c3/dom',
        'lodash',
        'deepmerge',
        'classnames',
      ],
      plugins: [commonjs()], 
    },
  },
});
