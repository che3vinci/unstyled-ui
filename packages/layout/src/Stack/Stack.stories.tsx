import React from 'react';
import { Stack, StackProps } from '../Stack';

const Template = (args: any) => <Stack {...args} />;
export const Default = Template.bind({});
Default.args = {
  height: [200],
  as: 'img',
  children: [
    <div style={{ background: 'red', opacity: 0.2 }} key="1">
      hello
    </div>,
    <p style={{ background: 'blue', opacity: 0.3, left: 100, top: 20 }} key="2">
      world
    </p>,
  ],
} as StackProps;

export default {
  component: Stack,
  title: 'Stack',
};
