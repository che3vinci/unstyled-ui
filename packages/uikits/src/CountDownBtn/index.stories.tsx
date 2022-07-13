import React from 'react';
import { CountDownBtn, ICountDownProps } from '.';

const Template = (args: any) => <CountDownBtn {...args} />;

export const Default = Template.bind({});

Default.args = {
  count: 10,
  onStart: () => {
    console.log('start...');
  },
  onChange: left => {
    console.log('leftTime', left);
  },
  onFinish: () => {
    console.log('finished');
  },
  defaultText: 'click me',
} as ICountDownProps;

export default {
  component: CountDownBtn,
  title: 'CountDownBtn',
};
