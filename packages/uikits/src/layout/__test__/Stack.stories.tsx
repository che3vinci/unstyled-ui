import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Text } from '../../Text';
import { Stack, StackProps } from '../Stack';

const Template = (args: any) => (
  <ThemeProvider theme={{ color: {} }}>
    <Stack {...args} />;
  </ThemeProvider>
);
export const Default = Template.bind({});
Default.args = {
  height: [200],
  as: 'img',
  children: [
    <Text key={'hello'} bgc="red" opacity="0.2">
      hello
    </Text>,
    <Text key="world" bgc="blue" opacity="0.3" left="100px" top="20px">
      world
    </Text>,
  ],
} as StackProps;

export default {
  component: Stack,
  title: 'Stack',
};
