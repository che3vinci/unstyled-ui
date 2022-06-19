import { useSwitch } from '@c3/hooks';
import { Fn } from '@c3/utils';
import React, { useCallback, useMemo } from 'react';
import { Modal } from './index';
import { ModalProps } from './Modal';

export const useModal = (
  props: Omit<ModalProps, 'visible' | 'onClose' | 'onCancel' | 'onOK'>,
  afterDisappear?: Fn,
  beforeAppear?: Fn
) => {
  const { body, ...restProps } = props;
  const [visible, _on, _off] = useSwitch(false);
  const off = useCallback(() => {
    _off();
    afterDisappear && afterDisappear();
    document.body.style.overflow = 'visible';
  }, [afterDisappear, _off]);

  const on = useCallback(async () => {
    beforeAppear && (await beforeAppear());
    _on();
    document.body.style.overflow = 'hidden';
  }, [_on, beforeAppear]);

  const modal = useMemo(() => {
    return (
      <Modal
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
