import { css } from 'styled-components';

export const resetAntdStyle = () => css`
  *,
  p,
  span,
  div,
  img,
  body,
  button,
  table,
  h1,
  h2,
  h3,
  h4,
  figure {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: ${props => props.theme.fontFamily};
    line-height: normal;
    ${props => props.theme.mobile} {
      max-width: 100vw;
    }
  }
  img {
    max-width: 100%;
    height: auto;
  }
  ol,
  ul,
  dl {
    margin-bottom: 0;
  }
  a {
    text-decoration: none;
    cursor: pointer;
  }
  input {
    border: none;
    outline: none;
  }
  button,
  [type='button'],
  [type='reset'],
  [type='submit'] {
    outline: none;
    border: none;
    appearance: none;
    -moz-appearance: none;
    -webkit-appearance: none;
    cursor: pointer;
    white-space: nowrap;
  }
  [disabled] {
    cursor: not-allowed;
  }
`;
