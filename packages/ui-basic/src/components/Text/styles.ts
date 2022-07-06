import { CSSProperties } from '@c3/css';

export const linearGradientText = (
  bg: CSSProperties['background']
): CSSProperties => ({
  background: bg,
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
});

export const getRows = (rows: number): CSSProperties => ({
  display: '-webkit-box',
  WebkitLineClamp: rows,
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
});
