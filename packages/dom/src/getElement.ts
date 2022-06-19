import { assert, isString, Selector } from '@c3/utils';
import { query } from './query';

export const getElement = <T extends HTMLElement = HTMLElement>(
  el: Selector | T
): T => {
  if (isString(el)) {
    const _el = query<T>(el);
    assert(!!_el, `${el} doesnt exist `);
    return _el;
  }
  return el;
};
