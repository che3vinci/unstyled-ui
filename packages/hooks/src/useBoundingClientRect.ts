import { IBox } from '@c3/utils';
import { useEffect } from 'react';

export const useBoundingClientReact = (
  el: Element | null,
  cb: (box: IBox<number>) => void,
  oldBox: IBox<number>
) => {
  useEffect(() => {
    if (!el) {
      return;
    }
    const box = el.getBoundingClientRect();
    console.log('new box', box);
    if (
      box.left !== oldBox.left &&
      box.top !== oldBox.top &&
      box.width !== oldBox.width &&
      box.height !== oldBox.height
    ) {
      cb(box);
    }
  }, [cb, el, oldBox.height, oldBox.left, oldBox.top, oldBox.width]);
};
