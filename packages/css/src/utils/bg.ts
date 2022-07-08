import { CSSProperties } from '../types';

export const bg = (
  url: string,
  size: CSSProperties['backgroundSize'] = 'cover',
  css: CSSProperties = {}
): CSSProperties => ({
  backgroundImage: `url(${url})`,
  backgroundPosition: 'center',
  backgroundSize: `${size}`,
  backgroundRepeat: 'no-repeat',
  ...css,
});
