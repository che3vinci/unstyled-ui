import utils from '@c3/utils';
import { argv } from 'zx';
// import { assert, omit } from '@c3/utils';
const { assert, omit } = utils;

export type IRunOption = {
  [param: string]: <T>(value: T) => Promise<void> | void;
};

export async function run(option: IRunOption) {
  //@ts-ignore
  assert(argv._.length === 2, `provide a subcommand:${JSON.stringify(argv)}`);
  await option[argv._[1]].call(option, omit(argv, ['_']));
}
