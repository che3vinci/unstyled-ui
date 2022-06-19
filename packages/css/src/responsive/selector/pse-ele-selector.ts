import { css } from 'styled-components';
import { rcss } from '../rcss';
import { ResponsiveCSSProperties } from './../type';

const pseEleSelector = (pseEle: string) => (obj: ResponsiveCSSProperties) => {
  return css`
    position: relative;
    &::${[pseEle]} {
      /* position: absolute; */
      display: inline-block;
      content: '';
      ${rcss(obj)}
    }
  `;
};

export const _after = pseEleSelector('after');
export const _before = pseEleSelector('before');

export const supportedPseEles = { _after, _before };
