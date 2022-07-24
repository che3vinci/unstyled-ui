import { mock } from '@c3/utils';
import React from 'react';
import { Atomic } from '../Atomic';
import { Image } from './Image';
import { styled } from '@unstyled-ui/core';

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

export const XXRoleAsButtonBUG = () => {
  const XX = styled(Atomic, {
    objectFit: 'cover',
    objectPosition: 'center',
    flexShrink: 0,
    maxWidth: '100%',
  });
  return (
    <XX
      as="div" // 这里导致了atomic的样式失效。没有继承下来
      css={{ w: 200, h: 40, border: '1px solid blue' }}
      role="button"
    >
      xxx
    </XX>
  );
};


export const ImageRoleAsButton = () => {
  return (
    <Image src={mock.getRandomPic()} css={{ w: 200, h: 40 }} role="button" />
  );
};
