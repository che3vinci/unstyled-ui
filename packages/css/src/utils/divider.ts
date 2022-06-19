import { css } from 'styled-components';

//TODO: use ResponseInputValue
export const divider = (color: string) => css`
  & > *:not(:last-child) {
    border-bottom: 1px solid ${color};
  }
`;

export const divider_p = (color: string) => css`
  & > *:not(:last-child)::after {
    width: 1px;
    background-color: ${color};
    height: 100%;
  }
`;
