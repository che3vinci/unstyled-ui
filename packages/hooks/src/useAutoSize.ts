import { px } from '@c3/css';
import { addEventListener, getElement, getTarget } from '@c3/dom';
import { assert } from '@c3/utils';
import { useEffect } from 'react';

//auto adjust the height of textarea
type Selector = string;
export const useAutoSize = (el: Selector | HTMLAreaElement) => {
  useEffect(() => {
    const _el = getElement<HTMLAreaElement>(el);
    return addEventListener(_el, 'input', e => {
      const target = getTarget(e);
      assert(!!target);
      target.style.boxSizing = 'border-box';
      target.style.overflow = 'hidden';
      const scrollHeight = target.scrollHeight || 0;
      const clientHeight = target.clientHeight || 0;
      const offsetHeight = target.offsetHeight || 0;
      _el.style.height = px(scrollHeight + (offsetHeight - clientHeight));
    });
  }, [el]);
};
