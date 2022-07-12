import { mock } from '@c3/utils';
import React from 'react';
import { Image, ImageProps } from './Image';

const Template = (args: any) => <Image {...args} />;

export const Default = Template.bind({});
Default.args = {
  src: mock.getRandomPic(),
  css: {
    round: true,
    w: 100,
    aspectRatio: 1,
  },
} as ImageProps;

export default {
  component: Image,
  title: 'Image',
};
