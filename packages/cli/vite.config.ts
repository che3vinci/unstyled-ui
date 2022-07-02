import commonjs from '@rollup/plugin-commonjs';
import rollupTypescript from '@rollup/plugin-typescript';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: './src/index.ts',
      name: 'cli',
      formats: ['es'],
      fileName: () => 'cli.mjs',
    },
    rollupOptions: {
      external: [/node:*/, 'fs', 'path', 'zx', 'lodash', '@c3/utils', 'tslib'],
    },
  },
  plugins: [commonjs(), rollupTypescript()],
});
