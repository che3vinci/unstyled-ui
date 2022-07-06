import { getAnimiationFromChains } from '@styless/css';
import { css } from 'styled-components';

export const deaultToastAnimation = css`
  @keyframes toast-start {
    from {
      top: 0;
    }
    to {
      top: 0.5em;
    }
  }
  @keyframes toast-show {
    from {
      top: 0.5em;
    }
    to {
      top: 0.5em;
    }
  }
  @keyframes toast-end {
    from {
      top: 0.5em;
    }
    to {
      top: -100px;
    }
  }
`;

export const getDefaultAnimation = (duration: number) =>
  getAnimiationFromChains(
    { animation: 'toast-start forwards', duration: 500 },
    { animation: 'toast-show forwards', duration: duration },
    { animation: 'toast-end forwards', duration: 500 }
  );
