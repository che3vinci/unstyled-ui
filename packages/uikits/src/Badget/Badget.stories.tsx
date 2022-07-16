import React from 'react';
import { BadgeProps, Badget } from './index';

const Template = (args: any) => <Badget {...args} />;
export default {
  component: Badget,
  title: 'uikits/Badget',
};

export const NormalBadget = () => (
  <Badget value={2} css={{ borderColor: ' green', w: 100 }}>
    Badget
  </Badget>
);
