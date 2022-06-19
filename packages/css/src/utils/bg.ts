import { CSSProperties } from './../responsive/type';

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
