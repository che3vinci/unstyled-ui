export const getNpx = (npm: 'npm' | 'yarn' | 'pnpm') => {
  switch (npm) {
    case 'npm':
    case 'yarn':
      return 'npx';
    case 'pnpm':
      return 'pnpx';
    default:
      throw new Error(`${npm} is not supported`);
  }
};
