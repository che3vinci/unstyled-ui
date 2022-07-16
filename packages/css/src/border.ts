import { RCSSProperties } from '@unstyled-ui/core';
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

export const roundBorderValue = (height: number) => {
  return height / 2;
};
