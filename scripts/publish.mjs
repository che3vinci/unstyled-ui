#!/usr/bin/env zx
import { run } from '@c3/cli';
import utils from '@c3/utils';
const { remove } = utils;
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
  async before(options) {
    const { beforePub } = options;
    for (const pkg of remove(pkgs, '@unstyled-ui/stitches')) {
      const files = ['main', 'module', 'types'];
      for (const file of files) {
        if (beforePub) {
          const { stdout: name } =
            await $`pnpm --filter ${pkg} exec npm pkg get publishConfig.${file}`;
          const newName = name.replace(/"|\n/g, '');
          await $`pnpm --filter ${pkg} exec npm pkg set ${file}=${newName}`;
        } else {
          await $`pnpm --filter ${pkg} exec npm pkg set ${file}=src/index.ts`;
        }
      }
    }
  },
  async publish(options) {
    const { buildOnly } = options;
    await this.before({ beforePub: true });
    await this.build();
    if (!buildOnly) {
      await $`pnpm publish -r  --no-git-checks `;
    }
  },
});
