#!/usr/bin/env zx
import { run } from '@c3/cli';
import { $, cd } from 'zx';
run({
  async version() {
    await $`pnpm changeset version`;
    await $`pnpm install`;
  },
  async build() {
    await $`pnpm -r type`;
    await $`pnpm -r buildOnly`;
  },
  async publish() {
    await $`pnpm -r buildOnly`;
    // await $`pnpm publish -r  --no-git-checks `;
  },
});
