import React from 'react';
import { CountDownBtn, ICountDownProps } from '..';
import { BaseProps } from '../../Common';

const Template = (args: Omit<ICountDownProps, keyof BaseProps>) => (
  <CountDownBtn {...args} />
);

export const Default = Template.bind({});

Default.args = {
  count: 10,
  onStart: () => {
    console.log('start...');
  },
  onChange: left => {
    // console.log('leftTime', left);
  },
  onFinish: () => {
    console.log('finished');
  },
  defaultText: 'click me',
} as Omit<ICountDownProps, keyof BaseProps>;

export default {
  component: CountDownBtn,
  title: 'CountDownBtn',
};
