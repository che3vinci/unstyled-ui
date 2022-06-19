import { css } from 'styled-components';
import { rcss } from '../rcss';
import { ResponsiveCSSProperties } from './../type';

export const _cls_selector = (cls: string) => (obj: ResponsiveCSSProperties) =>
  css`
    && .${cls} {
      ${rcss(obj)}
    }
  `;
