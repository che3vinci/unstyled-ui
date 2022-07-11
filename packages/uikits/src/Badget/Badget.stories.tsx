import React from 'react';
import { BadgeProps, Badget } from './index';

const Template = (args: any) => <Badget {...args} />;

export const NormalBadget = Template.bind({}) as unknown as { args: unknown };
NormalBadget.args = {
  children: 'Badget',
  value: 2,
  css: { borderColor: ' green', w: 100 },
} as BadgeProps;

export default {
  component: Badget,
  title: 'Badget',
};
