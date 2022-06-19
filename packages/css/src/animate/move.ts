import { css } from 'styled-components';

export const move = () => css`
  @keyframes move {
    from {
      transform: translate(0);
    }
    to {
      transform: translate('100vw');
    }
  }
`;
