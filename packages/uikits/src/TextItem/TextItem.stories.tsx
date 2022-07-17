import { mock } from '@c3/utils';
import { Image } from '@unstyled-ui/atomic';
import React from 'react';
import { TextItem } from '.';

export default {
  title: 'uikits/TextItem',
  component: TextItem,
};

export const Vertial = () => {
  return (
    <TextItem
      css={{ '& > .uu-icon': { w: 100 } }}
      direction="column"
      icon={mock.getRandomPic()}
      text="FindingNothing"
    />
  );
};

export const Horizontal = () => {
  return (
    <TextItem
      css={{ '& >.uu-icon': { w: 100, h: 100 } }}
      direction="row"
      icon={mock.getRandomPic()}
      text="FindingNothing"
    />
  );
};
export const IconComponent = () => {
  return (
    <TextItem
      direction="row"
      icon={<Image css={{ w: 100 }} src={mock.getRandomPic()}></Image>}
      text="FindingNothing"
    />
  );
};
