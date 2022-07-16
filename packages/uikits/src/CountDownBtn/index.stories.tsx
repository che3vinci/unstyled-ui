import React from 'react';
import { CountDownBtn, ICountDownProps } from '.';
export default {
  component: CountDownBtn,
  title: 'uikits/CountDownBtn',
};

export const Normal = () => (
  <CountDownBtn
    count={10}
    onStart={() => {
      console.log('start...');
    }}
    onChange={left => {
      console.log('leftTime', left);
    }}
    onFinish={() => {
      console.log('finished');
    }}
    defaultText="click me"
  />
);
