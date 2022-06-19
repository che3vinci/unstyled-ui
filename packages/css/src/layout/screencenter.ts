import { css } from 'styled-components';

export const screenCenter = () => {
  return css`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `;
};
