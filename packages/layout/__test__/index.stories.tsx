import React from 'react';
import { Text } from '../src';

const Template = (args: any) => <Text {...args} />;
export const Default = Template.bind({}) as any as { args: any };
Default.args = {};

export default {
  component: Text,
  title: 'Text',
};
