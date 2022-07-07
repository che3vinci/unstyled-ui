export const normalizecss = () => `
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
    line-height: normal;
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
