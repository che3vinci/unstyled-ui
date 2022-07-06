import React, { HTMLAttributes } from 'react';
import { BaseProps } from '../../stitches';
import { Atomic } from '../Atomic';
import { memo } from '../../utils';
import { getRows, linearGradientText } from './styles';
import { CSSProperties } from '@styless/css';

export type TextProps = BaseProps<HTMLAttributes<HTMLParagraphElement>> & {
  rows?: number;
  gradient?: CSSProperties['background'];
};

export const Text = React.memo((props: React.PropsWithChildren<TextProps>) => {
  const { css, rows, gradient, ...restProps } = props;
  let newCss: CSSProperties = {};
  if (rows) {
    newCss = getRows(rows);
  }
  if (gradient) {
    newCss = { ...newCss, ...linearGradientText(gradient) };
  }
  return <Atomic as="p" css={{ ...newCss, ...css }} {...restProps} />;
});
Text.displayName = 'Text';
