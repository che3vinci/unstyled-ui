#!/usr/bin/env zx
import { run } from '@c3/cli';
import { $, cd } from 'zx';
run({
  async version() {
    await $`pnpm changeset version`;
    await $`pnpm install`;
  },
  async build() {
    await $`pnpm -r buildOnly`;
    await $`pnpm -r type`;
  },
  async publish(options) {
    const { buildOnly } = options;
    await this.build();
    if (!buildOnly) {
      await $`pnpm publish -r  --no-git-checks `;
    }
  },
});
