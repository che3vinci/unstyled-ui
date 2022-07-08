import React from 'react';
import { Box } from '../Box';
import { BaseProps } from '@unstyled-ui/core';
import { col } from './col.utils';
import { vgap } from '../utils';
import classNames from 'classnames';

export const Col: React.FC<BaseProps> = props => {
  const {
    css: { gap, fx, fy, ...restCss } = {},
    className,
    ...restProps
  } = props;
  return (
    <Box
      //@ts-ignore
      css={{ ...col(fx, fy), ...vgap(gap), ...restCss }}
      className={classNames('uu-col', className)}
      {...restProps}
    />
  );
};
