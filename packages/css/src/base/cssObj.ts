import { kebabCase } from 'lodash';
import { CSSProperties } from '../responsive';

export const cssObj2Str = (css: CSSProperties) => {
  let res = '';
  for (const [key, value] of Object.entries(css)) {
    res += `${kebabCase(key)}:${value};\n`;
  }
  return res;
};
