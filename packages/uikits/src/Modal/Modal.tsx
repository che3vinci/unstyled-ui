import { absXYCenter, mask } from '@c3/css';
import { Fn, omit } from '@c3/utils';
import classNames from 'classnames';
import React from 'react';
import { Col } from '../';
import { BaseProps } from '../Common';
import { Abs, Fixed } from '../layout';

export type ModalProps = Omit<BaseProps, 'content'> & {
  visible: boolean;
  closeBtn?: React.ReactElement;
  okBtn?: React.ReactElement;
  cancelBtn?: React.ReactElement;
  body: React.ReactElement;
  onCancel?: Fn;
  onOK?: Fn;
  showLoading?: boolean;
  loadingIcon?: JSX.Element;
  onClose?: Fn;
  maskProps?: BaseProps;
};

export const Modal: React.FC<ModalProps> = ({
  visible,
  closeBtn,
  body,
  maskProps,
  onCancel,
  onOK,
  onClose,
  okBtn,
  showLoading,
  loadingIcon,
  cancelBtn,
  className,
  ...props
}) => {
  const display = visible ? 'flex' : 'none';

  return (
    <Fixed style={{ display }} {...mask} bg="rgba(0,0,0,0.8)" {...maskProps}>
      <Col
        position="relative"
        className={classNames('c3-modal', className)}
        {...props}
      >
        {closeBtn && (
          <closeBtn.type
            onClick={onClose}
            cursor="pointer"
            {...closeBtn?.props}
          />
        )}
        {body}

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
        {showLoading && <Abs {...absXYCenter()}>{loadingIcon}</Abs>}
      </Col>
    </Fixed>
  );
};
