import { existsSync } from 'fs';
import { resolve } from 'path';
import { os } from 'zx';

export const getProjectDir = () => {
  let curDir = process.cwd();
  const home = os.homedir();
  while (!existsSync(`${curDir}/package.json`) && curDir !== home) {
    curDir = resolve(curDir, '..');
  }
  return curDir == home ? null : curDir;
};
