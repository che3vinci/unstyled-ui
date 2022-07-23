import { CSSProperties, RCSSProperties } from '@unstyled-ui/core';
import { HVDirection } from '@c3/utils';

export const borderRadiusForGroup = (
  borderRadius: RCSSProperties['borderRadius'],
  direction: HVDirection
) => {
  const isVertical = direction === 'vertical';
  const firstElementProp = isVertical
    ? {
        borderTopRightRadius: borderRadius,
        borderTopLeftRadius: borderRadius,
      }
    : {
        borderTopLeftRadius: borderRadius,
        borderBottomLeftRadius: borderRadius,
      };
  const lastElementProp = isVertical
    ? {
        borderBottomLeftRadius: borderRadius,
        borderBottomRightRadius: borderRadius,
      }
    : {
        borderBottomRightRadius: borderRadius,
        borderTopRightRadius: borderRadius,
      };
  return {
    '& > *:first-child': firstElementProp,
    '& > *:last-child': lastElementProp,
  };
};

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

export const roundBorderValue = (height: number) => {
  return height / 2;
};

export const gradientBorder = (gradient: string): RCSSProperties => ({
  borderStyle: 'solid',
  borderImageWidth: '1px',
  borderImageSlice: 1,
  borderImageSource: gradient,
});
