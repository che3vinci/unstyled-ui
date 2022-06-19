import { css } from 'styled-components';

/**
 * child div height can not be 100% when height of parent is auto
 * @returns
 */
export const eqHeight = () => css`
  display: flex;
  align-items: stretch;
  && > * {
    height: auto;
  }
`;
