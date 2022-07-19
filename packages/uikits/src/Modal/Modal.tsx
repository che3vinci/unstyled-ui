import { mask } from '@unstyled-ui/css';
import { Fn, omit } from '@c3/utils';
import classNames from 'classnames';
import React from 'react';
import { BaseProps } from '@unstyled-ui/core';
import { Abs, Fixed, Col, absXYCenter } from '@unstyled-ui/layout';

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

export const Modal: React.FC<ModalProps> = ({
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
}) => {
  const display = visible ? 'flex' : 'none';
  return (
    <Fixed
      as="u-mask"
      //@ts-ignore
      css={{ ...mask, display, bg: 'rgba(0,0,0,0.8)', ...css }}
      {...restProps}
    >
      <Col css={{ position: 'relative' }} as="u-modal">
        <body.type {...body.props} as="u-body" />
        {closeBtn && (
          <closeBtn.type
            onClick={onClose}
            cursor="pointer"
            {...closeBtn?.props}
          />
        )}

        {okBtn && (
          <okBtn.type
            onClick={async () => {
              try {
                await okBtn.props.onClick?.();
                await onOK?.();
              } catch (e) {
                console.log(e);
              }
            }}
            cursor="pointer"
            {...omit(okBtn?.props, ['onClick'])}
          />
        )}
        {cancelBtn && (
          <cancelBtn.type
            onClick={() => {
              try {
                cancelBtn?.props.onClick?.();
                onCancel?.();
              } catch (e) {
                console.error(e);
              }
            }}
            cursor="pointer"
            {...omit(cancelBtn?.props, ['onClick'])}
          />
        )}
        {showLoading && <Abs css={{ ...absXYCenter() }}>{loadingIcon}</Abs>}
      </Col>
    </Fixed>
  );
};
