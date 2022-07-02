import { $ } from 'zx';
export async function installIfNeeded(cmd: string, installCmd: string) {
  try {
    await $`which ${cmd}`;
  } catch (e) {
    await $`${installCmd}`;
  }
}
