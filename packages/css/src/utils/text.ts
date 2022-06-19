import { CSSProperties } from './../responsive/type';

export const linearGradientText = (bg: string): CSSProperties => ({
  background: bg,
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
});
