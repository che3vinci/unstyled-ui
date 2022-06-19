import React from 'react';
import { LineProgress, LineProgressProps } from '..';
const LineProgressTemplate = (args: any) => <LineProgress {...args} />;

export const LineProgressDefault = LineProgressTemplate.bind({});

LineProgressDefault.args = {
  progress: 0.15,
  width: [500],
  height: [20],
  bgProps: { background: 'red' },
} as LineProgressProps;

export default {
  component: LineProgress,
  title: 'LineProgress',
};
