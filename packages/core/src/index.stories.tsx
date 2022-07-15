import { mock } from '@c3/utils';
import React from 'react';
import { BaseProps, styled } from '.';

const App = styled('div', {});

const Template = (args: any) => <App {...args} />;

export const DeepClsVisitor = Template.bind({});
DeepClsVisitor.args = {
  children: [
    <div className="child-1" key={1}>
      child1
      <div className="grandson">grandson</div>
    </div>,
    <div className="child-2" key={2}>
      child2
    </div>,
  ],
  css: {
    round: true,
    w: 100,
    aspectRatio: 1,
    '& .child-1': {
      color: 'red',
    },
    '& .grandson': {
      color: 'green',
    },
  },
} as BaseProps;

export default {
  component: App,
  title: 'Core',
};
