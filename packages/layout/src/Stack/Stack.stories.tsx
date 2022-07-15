import React from 'react';
import { Stack, StackProps } from '../Stack';

const Template = (args: any) => <Stack {...args} />;
export const WidthInstrinticChildren = Template.bind({});
WidthInstrinticChildren.args = {
  children: [
    <div style={{ background: 'red', opacity: 0.2, top: 100 }} key="1">
      hello
    </div>,
    <p style={{ background: 'blue', opacity: 0.3, left: 100, top: 20 }} key="2">
      world
    </p>,
  ],
  css: { border: '1px solid grey' },
  width: 500,
  height: 500,
} as StackProps;
// export const NormalChildren = Template.bind({});
// NormalChildren.args = {
//   children: [
//     <Text style={{ background: 'red', opacity: 0.2, top: 100 }} key="1">
//       hello
//     </Text>,
//   ],
//   css: { width: 500, height: 500, border: '1px solid grey' },
// } as StackProps;

export default {
  component: Stack,
  title: 'Stack',
};
