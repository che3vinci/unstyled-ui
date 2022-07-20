import { mock } from '@c3/utils';
import { styled } from '@unstyled-ui/core';
import React from 'react';
import { Stack, StackProps } from '../Stack';

const Image = styled('img', {});
const Text = styled('p', {});

export default {
  component: Stack,
  title: 'layout/Stack',
};
export const StackWithBody = (props: StackProps) => {
  return (
    <Stack
      body={<Image src={mock.getRandomPic(400, 300)} css={{ opacity: 0.2 }} />}
    >
      <Text css={{ left: 100, top: 10 }}>hello</Text>
      <Text css={{ left: 10, top: 10 }}>hello</Text>
      <Text>center-no-specified-left-top</Text>
      <Text css={{ left: 100, top: 100 }}>hello</Text>
      <Text css={{ left: 100, top: 250, h: 300, bg: 'red' }}>overflow</Text>
    </Stack>
  );
};
