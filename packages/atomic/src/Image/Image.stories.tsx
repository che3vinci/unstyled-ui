import { mock } from '@c3/utils';
import React from 'react';
import { Image } from './Image';

export default {
  component: Image,
  title: 'atomic/Image',
};

export const Default = () => (
  <Image
    src={mock.getRandomPic()}
    loading={false}
    css={{
      round: true,
      w: 100,
      aspectRatio: 1,
    }}
  ></Image>
);
export const Loading = () => (
  <Image
    src={mock.getRandomPic()}
    css={{
      round: true,
      w: 100,
      aspectRatio: 1,
    }}
  />
);
export const ShowDefaultFallback = () => (
  <Image
    src={'xx'}
    css={{
      round: true,
      w: 100,
      aspectRatio: 1,
    }}
  />
);
