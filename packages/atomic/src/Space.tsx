import { BaseProps } from '@unstyled-ui/core';
import React from 'react';
import { Atomic } from './Atomic';

export type SpaceProps = {
  size: number;
} & BaseProps;

export const Space: React.FC<SpaceProps> = props => {
  const { css = {}, size, ...restProps } = props;
  return (
    //@ts-ignore
    <Atomic
      as="u-space"
      css={{ display: 'block', w: size, h: size, ...css }}
      {...restProps}
    />
  );
};
