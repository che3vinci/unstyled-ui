import React from 'react';
import _ from 'lodash';
import { Grid, GridProps } from './Grid';
import { mock } from '@c3/utils';

const Template = (args: any) => <Grid {...args} />;

export const Default = Template.bind({});
Default.args = {
  cols: 3,
  cellWidth: 100,
  cellHeight: 200,
  children: _.times(9, i => <img src={mock.getRandomPic()} />),
  css: { width: 300 },
} as GridProps;

export default {
  component: Grid,
  title: 'layout/Grid',
};
