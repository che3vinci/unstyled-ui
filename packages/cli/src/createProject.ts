import { $, cd } from 'zx';
import { getNpx } from './getNpx';

type ProjectOption = Required<Omit<IOption, 'before'>>;
export const projects = {
  a: async ({ projectName, npm }: ProjectOption) => {
    await $`${getNpx(
      npm
    )} degit fabien-ml/react-ts-vite-template ${projectName}`;
  },
  viteTs: async ({ projectName, npm }: ProjectOption) => {
    await $`${npm} create vite ${projectName} --template react-ts`;
  },
  bone: async ({ projectName, npm }: ProjectOption) => {
    await $`mkdir ${projectName}`;
    cd(projectName);
    await $`${npm} init `;
  },
  cra: async ({ projectName, npm }: ProjectOption) => {
    await $`${getNpx(
      npm
    )} create-react-app ${projectName} --template typescript`;
  },
};
interface IOption {
  projectName?: string;
  baseDir?: string;
  type?: keyof typeof projects;
  npm?: 'npm' | 'pnpm' | 'yarn';
  before?: () => Promise<void>;
}

export const createProject = async (option?: IOption) => {
  $.quote = e => e;
  const {
    projectName = 'my-app',
    baseDir = '/tmp',
    type = 'viteTs',
    npm = 'pnpm',
    before,
  } = option || {};

  const projectDir = `${baseDir}/${projectName}`;
  await cd(baseDir);
  await $`rm -rf ${projectName}`;
  await projects[type].call(projects, { projectName, baseDir, type, npm });
  await cd(projectDir);
  before && (await before());
  npm === 'pnpm' && (await $`echo 'auto-install-peers=true' >> .npmrc`);
  await $`${npm} install`;
};
