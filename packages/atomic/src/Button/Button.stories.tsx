import React from 'react';
import { Button } from './Button';

const Template = (args: any) => <Button {...args} />;

export const NormalButton = Template.bind({});
NormalButton.args = {
  children: 'normal button',
};

export const RoundButton = Template.bind({});
RoundButton.args = {
  children: 'hello',
  css: {
    round: true,
    w: 100,
    h: 40,
  },
};

export const ResponsiveButton = Template.bind({});
ResponsiveButton.args = {
  children: 'hello',
  css: {
    round: true,
    w: [100, 300],
    h: 40,
  },
};

export default {
  component: Button,
  title: 'Button',
};
