import { BaseProps } from '@unstyled-ui/core';
import React from 'react';
import { Box } from '../Box';
import { vgap } from '../utils';
import { col } from './col.utils';

export type ColProps = BaseProps;
export const Col: React.FC<BaseProps> = props => {
  const { css: { fx, fy, gap, ...restCss } = {}, ...restProps } = props;
  return (
    <Box
      as="u-col"
      //@ts-ignore
      css={{ ...col(fx, fy), ...vgap(gap), ...restCss }}
      {...restProps}
    />
  );
};
