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
  const {
    css: { fx: _fx, fy: _fy, ...restCss } = {},
    fx,
    fy,
    gap,
    className,
    ...restProps
  } = props;
  return (
    <Box
      //@ts-ignore
      css={{ ...col(_fx || fx, _fy || fy), ...vgap(gap), ...restCss }}
      className={classNames('uu-col', className)}
      {...restProps}
    />
  );
};
