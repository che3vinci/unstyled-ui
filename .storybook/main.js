module.exports = {
  stories: [
    '../packages/atomic/src/**/*.stories.@(js|jsx|ts|tsx)',
    '../packages/uikits/src/**/*.stories.@(js|jsx|ts|tsx)',
    '../packages/layout/src/**/*.stories.@(js|jsx|ts|tsx)',
    '../packages/core/src/**/*.stories.@(js|jsx|ts|tsx)',
    '../packages/animation/src/**/*.stories.@(js|jsx|ts|tsx)',
    '../packages/form/src/**/*.stories.@(js|jsx|ts|tsx)',
    '../packages/css/src/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: '@storybook/react',
};
