import React from 'react';
import { Text } from '../..';
const Template = (args: any) => <Text {...args} />;

export const TwoLineText = Template.bind({}) as any as { args: any };
TwoLineText.args = {
  children:
    'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat et ipsam id culpa facere ea repudiandae dicta qui? Asperiores dolores nihil provident magnam autem est ut quaerat eaque corporis odit.',
  rows: 2,
  gradient: 'linear-gradient(to right, red, #3f3)',
  css: {
    w: 300,
    color: 'green',
    typo: { fontSize: 20, fontWeight: 200 },
  },
};

export default {
  component: Text,
  title: 'Text',
};
