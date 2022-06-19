import { css } from 'styled-components';
import { rcss } from '../rcss';
import { ResponsiveCSSProperties } from './../type';

export const _id_selector = (id: string) => (obj: ResponsiveCSSProperties) => {
  return css`
    & #${id} {
      ${rcss(obj)}
    }
  `;
};
