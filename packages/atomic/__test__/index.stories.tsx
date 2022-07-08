import React from 'react';
import { Text } from '../src';

const Template = (args: any) => <Text {...args} />;
export const Default = Template.bind({}) as any as { args: any };
Default.args = {
  children:
    'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat et ipsam id culpa facere ea repudiandae dicta qui? Asperiores dolores nihil provident magnam autem est ut quaerat eaque corporis odit.',
};

export default {
  component: Text,
  title: 'Text',
};
