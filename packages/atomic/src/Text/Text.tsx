import React, { HTMLAttributes } from 'react';
import { BaseProps } from '@unstyled-ui/core';
import { Atomic } from '../Atomic';
import { getRows, linearGradientText } from './text.utils';
import { CSSProperties } from '@unstyled-ui/css';

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
