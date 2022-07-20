#!/usr/bin/env zx
import { run } from '@c3/cli';
import { $, cd } from 'zx';
const pkgs = [
  '@unstyled-ui/stitches',
  '@unstyled-ui/core',
  '@unstyled-ui/responsive',
  '@unstyled-ui/animation',
  '@unstyled-ui/atomic',
  '@unstyled-ui/css',
  '@unstyled-ui/layout',
  '@unstyled-ui/form',
  '@unstyled-ui/uikits',
];
run({
  async version() {
    await $`pnpm changeset version`;
    await $`pnpm install`;
  },
  async build() {
    for (const pkg of pkgs) {
      await $`pnpm --filter ${pkg} buildOnly`;
      await $`pnpm --filter ${pkg} type`;
    }
  },
  async publish(options) {
    const { buildOnly } = options;
    await this.build();
    if (!buildOnly) {
      await $`pnpm publish -r  --no-git-checks `;
    }
  },
});
