import { useSwitch } from '@c3/hooks';
import { Fn, wait } from '@c3/utils';
import { useAnime } from '@unstyled-ui/animation';
import React, { useCallback, useMemo, useRef } from 'react';
import { Modal } from './index';
import { ModalProps } from './Modal';

const HIDE_DURATION = 200;
export const useModal = (
  props: Omit<ModalProps, 'visible' | 'onClose' | 'onCancel' | 'onOK'>,
  options: {
    afterDisappear?: Fn;
    beforeAppear?: Fn;
    useAnime?: boolean;
  } = {}
) => {
  const { body, ...restProps } = props;
  const { afterDisappear, beforeAppear, useAnime: _useAnime = true } = options;
  const ref = useRef<HTMLElement>(null);
  const [visible, _on, _off] = useSwitch(false);
  const [showAnime, hideAnime] = useAnime([
    {
      targets: ref.current?.querySelector('u-modal'),
      from: { scale: 0, opacity: 0, easing: 'linear', duration: HIDE_DURATION },
      to: { scale: 1, opacity: 1 },
    },
    {
      targets: ref.current,
      from: { opacity: 0, easing: 'linear', duration: HIDE_DURATION },
      to: { opacity: 1, duration: 0 },
    },
  ]);

  const off = useCallback(async () => {
    _useAnime && hideAnime();
    await wait(HIDE_DURATION);
    _off();
    afterDisappear && afterDisappear();
    document.body.style.overflow = 'visible';
  }, [_useAnime, hideAnime, _off, afterDisappear]);

  const on = useCallback(async () => {
    beforeAppear && (await beforeAppear());
    _on();
    _useAnime && showAnime();
    document.body.style.overflow = 'hidden';
  }, [_on, _useAnime, beforeAppear, showAnime]);

  const modal = useMemo(() => {
    return (
      <Modal
      //@ts-ignore
        ref={ref}
        visible={visible}
        onClose={off}
        onCancel={off}
        onOK={off}
        body={body}
        {...restProps}
      />
    );
  }, [body, restProps, off, visible]);

  return [modal, on, off, visible] as const;
};
