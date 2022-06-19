import {
  entries,
  hasSameValue,
  isNullish,
  makeArray,
  toArray,
} from '@c3/utils';
import { cssObj2Str } from '../base/cssObj';
import { notLengthProp } from './constants';
import {
  CSSProperties,
  ResponsiveCSSProperties,
  ResponsiveInputValueType,
  ResponsiveOutputValueType,
} from './type';
export type ObjectKeys<T> = T extends object ? keyof T : never;

export const genCss = (
  css: ResponsiveCSSProperties,
  covertRuleFn: (values: ResponsiveInputValueType) => ResponsiveOutputValueType,
  bks: number[]
): string => {
  const actualCss = makeArray(bks.length + 1, {} as CSSProperties);

  for (const [prty, values] of entries(css)) {
    if (isNullish(values)) {
      //TODO: fixme later
      // console.warn(`invalid prty '${prty}', value is undefined`);
      continue;
    }

    const _values = toArray(values).map(e => {
      if (notLengthProp.includes(prty)) {
        return `_${e}`;
      }
      return e;
    });
    covertRuleFn(_values).forEach((e, idx) => {
      (actualCss[idx] as any)[prty] = e;
    });
  }
  // when value of property is string, it's has the same value
  if (hasSameValue(actualCss)) {
    return `${cssObj2Str(actualCss[0])}`;
  }

  return `@media screen and (max-width:${bks[0]}px){
    ${cssObj2Str(actualCss[0])}
  }
  @media screen and (min-width: ${bks[0] + 1}px) and (max-width:${bks[1]}px){
    ${cssObj2Str(actualCss[1])}
  }
  @media screen and (min-width: ${bks[1] + 1}px){
    ${cssObj2Str(actualCss[2])}
  }
  `;
};
