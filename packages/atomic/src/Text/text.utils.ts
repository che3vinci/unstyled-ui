import type { Typography } from './types';
import type { CSSProperties } from '@unstyled-ui/core';

export const linearGradientText = (
  bg: CSSProperties['background']
): CSSProperties => ({
  background: bg,
  backgroundClip: 'text',
  //@ts-ignore
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
});

export const getRows = (rows: number): CSSProperties => ({
  display: '-webkit-box',
  //@ts-ignore
  WebkitLineClamp: rows,
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
});

export const typo = ({
  fontSize,
  fontWeight,
  lineHeight,
  fontFamily,
  letterSpacing,
}: Typography): Typography => {
  return {
    fontSize,
    fontWeight,
    lineHeight,
    fontFamily,
    letterSpacing,
  };
};
