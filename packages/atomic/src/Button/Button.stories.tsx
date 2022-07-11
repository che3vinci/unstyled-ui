import React from 'react';
import { Button } from './Button';

const Template = (args: any) => <Button {...args} />;

export const NormalButton = Template.bind({}) as any as { args: any };
NormalButton.args = {
  children: 'normal button',
};

export const RoundButton = Template.bind({}) as any as { args: any };
RoundButton.args = {
  children: 'hello',
  css: {
    round: true,
    w: 100,
    h: 40,
  },
};

export default {
  component: Button,
  title: 'Button',
};
