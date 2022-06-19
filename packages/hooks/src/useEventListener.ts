import { addEventListener } from '@c3/dom';
import { MutableRefObject, useEffect } from 'react';

export const useEventListener = (
  target: HTMLElement | MutableRefObject<HTMLElement> | Window | Document,
  eventName: string,
  cb: EventListener,
  option?: boolean | AddEventListenerOptions
) => {
  useEffect(() => {
    const _target = 'current' in target ? target.current : target;
    return addEventListener(_target, eventName, cb, option);
  }, [cb, eventName, option, target]);
};
