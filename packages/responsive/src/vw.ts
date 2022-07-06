import { isNumber } from '@c3/utils';
// import { isMobile } from '../base/device';
// import { desktopDesignWidth, mobileDesignWidth } from '../theme';
import { FixedPxReg } from './constants';

export const pxToVw = (px: number, refWidth: number) =>
  `${(px / refWidth) * 100}vw`;

export const vw = (px: string | number, refWidth: number) => {
  if (typeof px === 'number') {
    return pxToVw(px, refWidth);
  }
  if (typeof px === 'string') {
    if (FixedPxReg.test(px)) {
      return px.replace('_', '');
    }
    return px.replace(/(\d+)px/g, (m, p) => pxToVw(+p, refWidth));
  }

  throw new Error(`px is ${JSON.stringify(px)}`);
};

export const fontVw = (px: number, refWidth: number) => {
  const base = 12;
  return `calc(${base}px + ${vw(px - base, refWidth)})`;
};

// export const rvw = (px: string | number, refWidth: number) => {
//   // return isMobile ? vw(px, mobileDesignWidth) : vw(px, desktopDesignWidth);
// };

export const origin = (x: string | number) => {
  if (typeof x === 'string') {
    if (FixedPxReg.test(x)) {
      return x.replace('_', '');
    }
    return x;
  }
  if (isNumber(x)) {
    return `${x}px`;
  }
  throw new Error(`invalid args:${x}`);
};
