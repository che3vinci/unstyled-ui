import { mask } from '@unstyled-ui/css';
import { Fn, omit } from '@c3/utils';
import classNames from 'classnames';
import React, { ForwardRefRenderFunction, useCallback } from 'react';
import { BaseProps } from '@unstyled-ui/core';
import { Abs, Fixed, Col, absXYCenter, Relative } from '@unstyled-ui/layout';

export type ModalProps = {
  visible: boolean;
  closeBtn?: JSX.Element;
  okBtn?: JSX.Element;
  cancelBtn?: JSX.Element;
  body: JSX.Element;
  onCancel?: Fn;
  onOK?: Fn;
  showLoading?: boolean;
  loadingIcon?: JSX.Element;
  onClose?: Fn;
} & BaseProps;

const _Modal: ForwardRefRenderFunction<HTMLDivElement, ModalProps> = (
  props,
  ref
) => {
  const {
    visible,
    closeBtn,
    body,
    onCancel,
    onOK,
    onClose,
    okBtn,
    showLoading,
    loadingIcon,
    cancelBtn,
    css,
    ...restProps
  } = props;
  const display = visible ? 'flex' : 'none';
  console.log('xxx,in modal', ref);
  const handleClose = useCallback(
    async e => {
      await closeBtn?.props.onClick?.(e);
      await onClose?.();
    },
    [closeBtn?.props, onClose]
  );
  const handleCancel = useCallback(
    async e => {
      try {
        await cancelBtn?.props.onClick?.(e);
        await onCancel?.();
      } catch (e) {
        console.error(e);
      }
    },
    [cancelBtn?.props, onCancel]
  );
  const handleOk = useCallback(
    async e => {
      try {
        await okBtn?.props.onClick?.(e);
        await onOK?.();
      } catch (e) {
        console.log(e);
      }
    },
    [okBtn?.props, onOK]
  );

  return (
    <Fixed
      as="u-mask"
      //@ts-ignore
      css={{ ...mask, display, bg: 'rgba(0,0,0,0.8)', ...css }}
      {...restProps}
      ref={ref}
    >
      <Col css={{ position: 'relative' }} as="u-modal">
        <body.type {...body.props} as="u-body" />
        {closeBtn && (
          <closeBtn.type
            {...closeBtn?.props}
            onClick={handleClose}
            cursor="pointer"
          />
        )}

        {okBtn && (
          <okBtn.type
            onClick={handleOk}
            cursor="pointer"
            {...omit(okBtn?.props, ['onClick'])}
          />
        )}
        {cancelBtn && (
          <cancelBtn.type
            onClick={handleCancel}
            cursor="pointer"
            {...omit(cancelBtn?.props, ['onClick'])}
          />
        )}
        {showLoading && <Abs css={{ ...absXYCenter() }}>{loadingIcon}</Abs>}
      </Col>
    </Fixed>
  );
};
export const Modal = React.forwardRef<HTMLDivElement, ModalProps>(_Modal);
