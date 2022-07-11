module.exports = {
  stories: [
    '../stories/**/*.stories.mdx',
    '../stories/**/*.stories.@(js|jsx|ts|tsx)',
    '../packages/atomic/src/**/*.stories.@(js|jsx|ts|tsx)',
    '../packages/uikits/src/**/*.stories.@(js|jsx|ts|tsx)',
    '../packages/layout/src/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: '@storybook/react',
};
