import { mock } from '@c3/utils';
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
