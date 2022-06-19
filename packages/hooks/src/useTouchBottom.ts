import { addEventListener, isTouchBottom } from '@c3/dom';
import { dbg } from '@c3/utils';
import { useEffect } from 'react';

export const useTouchBottom = (
  el: HTMLElement | null,
  cb: (e: Event) => void
) => {
  useEffect(() => {
    if (!el) {
      return;
    }
    return addEventListener(el, 'scroll', e => {
      if (isTouchBottom(el)) {
        dbg('@useTouchBottom:isTouchBottom==true');
        cb(e);
      }
    });
  }, [cb, el]);
};
