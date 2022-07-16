import React from 'react';
import { Button } from './Button';
export default {
  component: Button,
  title: 'atomic/Button',
};

const Template = (args: any) => <Button {...args} />;

export const NormalButton = () => <Button>normal button</Button>;

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
