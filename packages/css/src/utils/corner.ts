import { CSSProperties } from './../types';
// only show the corner border css

export const gradientRoundedBorder = (
  bgColor: string,
  gradient: string
): CSSProperties => {
  return {
    border: '1px solid transparent',
    backgroundImage: `linear-gradient(${bgColor}, ${bgColor}),${gradient}`,
    backgroundOrigin: 'border-box',
    backgroundClip: 'content-box, border-box',
  };
};
