
import React from 'react';
import * as CSS from 'csstype';
import { BaseProps } from '../../stitches';
import { Atomic } from '../Atomic';

export type TextProps = BaseProps & { rows?: number }
export const Text: React.FC<TextProps> = (props) => {
  const { css, rows, ...restProps } = props;
  let rowsCss: CSS.Properties = {};
  if (rows) {
    rowsCss = {
      display: '-webkit-flex',
      WebkitLineClamp: rows,
      WebkitBoxOrient: 'vertical',
      overflow: 'hidden'
    };
  }
  return (
    <Atomic as="p" css={{ ...rowsCss, ...css }} {...restProps} />
  );
};
