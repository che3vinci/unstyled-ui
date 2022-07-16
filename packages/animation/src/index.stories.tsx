import { styled } from '@unstyled-ui/core';
import React from 'react';
import { spin } from './spin';
import { fade } from './fade';
import { translate } from './translate';
import { s } from '@c3/utils';

export default {
  title: 'Animation',
  component: () => {
    return <div></div>;
  },
};

const Box = styled('div', {});
const Row = styled('div', { display: 'flex' });
export const Spin = () => (
  <Box
    css={{
      w: 100,
      h: 100,
      animation: `${spin} 2000ms infinite`,
      borderBottom: '1px solid red',
    }}
  ></Box>
);
export const Fade = () => (
  <Box
    css={{
      w: 100,
      h: 100,
      opacity: 0.7,
      anime: { animationName: s(fade(0.1)), animationDuration: '2s' },
      background: 'red',
    }}
  ></Box>
);

export const Fade2 = () => (
  <Box
    css={{
      w: 100,
      h: 100,
      opacity: 0.2,
      anime: { animationName: s(fade(0.8)), animationDuration: '2s' },
      background: 'red',
    }}
  ></Box>
);

export const Translate = () => {
  return (
    <Row>
      <Box
        css={{
          w: 100,
          h: 100,
          mr: 20,
          anime: {
            animationName: s(translate(-100, 0)),
            animationDuration: '2s',
          },
          background: 'red',
        }}
      />
      <Box
        css={{
          w: 100,
          h: 100,
          anime: {
            animationName: s(translate(-100, 0)),
            animationDuration: '2s',
          },
          background: 'red',
        }}
      />
    </Row>
  );
};
