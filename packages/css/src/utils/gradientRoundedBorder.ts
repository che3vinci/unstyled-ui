import { ResponsiveCSSProperties } from '../responsive';

export const gradientRoundedBorder = (
  bgColor: string,
  gradient: string
): ResponsiveCSSProperties => {
  return {
    border: '1px solid transparent',
    backgroundImage: `linear-gradient(${bgColor}, ${bgColor}),${gradient}`,
    backgroundOrigin: 'border-box',
    backgroundClip: 'content-box, border-box',
  };
};
