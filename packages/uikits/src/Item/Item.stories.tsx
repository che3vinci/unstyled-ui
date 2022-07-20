import { mock } from '@c3/utils';
import { Image, Text } from '@unstyled-ui/atomic';
import React from 'react';
import { Item } from '.';

export default {
  title: 'uikits/Item',
  component: Item,
};

export const Row = () => {
  return (
    <Item
      direction="row"
      prefix={<Image src={mock.getRandomPic()} css={{ w: 100 }}></Image>}
      suffix={<Image src={mock.getRandomPic()} css={{ w: 100 }}></Image>}
      css={{ w: 500, h: 100 }}
    >
      <Text css={{ color: 'red' }}>hello</Text>
    </Item>
  );
};
export const Column = () => {
  return (
    <Item
      direction="column"
      prefix={<Image css={{ w: 100 }} src={mock.getRandomPic()}></Image>}
    >
      <Text>hello</Text>
    </Item>
  );
};
