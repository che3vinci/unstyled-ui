import React from 'react';
import { Box } from '../Box';
import { BaseProps, CSSProperties } from '@unstyled-ui/core';
import { col } from './col.utils';
import { vgap } from '../utils';
import classNames from 'classnames';

export type ColProps = {
  fx?: CSSProperties['alignItems'];
  fy?: CSSProperties['justifyContent'];
  gap?: CSSProperties['gap'];
} & BaseProps;
export const Col: React.FC<BaseProps> = props => {
  const { css = {}, fx, fy, gap, className, ...restProps } = props;
  return (
    <Box
      //@ts-ignore
      css={{ ...col(fx, fy), ...vgap(gap), ...css }}
      className={classNames('uu-col', className)}
      {...restProps}
    />
  );
};
