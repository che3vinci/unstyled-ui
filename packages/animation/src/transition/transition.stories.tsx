import { useToggle } from '@c3/hooks';
import { useSwitch } from '@c3/hooks';
import { styled } from '@unstyled-ui/core';
import React from 'react';
import { useTransition } from './useTransition';

export default {
  title: 'Animation/transition',
  component: <div></div>,
};
const Box = styled('div', {});

export const BorderRadiusTransition = () => {
  const [show, toggle] = useToggle(false);
  return (
    <Box
      css={{
        w: 100,
        h: 100,
        border: show ? '4px solid yellow' : '4px solid red',
        borderRadius: show ? 50 : 0,
        transition: 'border-radius 2s,border-color 2s',
      }}
    >
      <button onClick={toggle}>active</button>
    </Box>
  );
};
export const Slidein = () => {
  const [cssState, forward, backward] = useTransition(
    { transform: 'translate(0)' },
    { transform: 'translateX(100px)' },
    'transform 300ms ease-in'
  );
  return (
    <>
      <Box
        css={{
          w: 100,
          h: 100,
          border: '2px solid skyblue',
          ...cssState,
        }}
      ></Box>
      <button onClick={forward}>slidein</button>
      <button onClick={backward}>slideout</button>
    </>
  );
};
