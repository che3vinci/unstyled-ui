import commonjs from '@rollup/plugin-commonjs';
import rollupTypescript from '@rollup/plugin-typescript';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: './src/index.ts',
      name: 'animation',
      formats: ['iife', 'es', 'umd'],
    },
    rollupOptions: {
      external: [
        /node:*/,
        'tslib',
        'react',
        'react-dom',
        '@c3/utils',
        'animejs',
        '@c3/hooks',
        '@ant-design/icons',
        '@unstyled-ui/core',
      ],
      plugins: [commonjs()],
    },
  },
});
