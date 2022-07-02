import { LoadingOutlined } from '@ant-design/icons';
import { cssProps } from '@c3/css';
import React from 'react';
import styled from 'styled-components';
import { BaseProps, setComponentCssForStatus } from '../Common/index';
import { notInBlackList } from '../layout';

export type IButtonProps = BaseProps & {
  preventDefault?: boolean;
  debounce?: boolean;
  loading?: boolean;
  disabled?: boolean;
};

const InnerButton = styled.button.withConfig({
  componentId: 'c3-button',
  shouldForwardProp: prop => notInBlackList(prop),
})<IButtonProps>`
  ${props => setComponentCssForStatus(props, 'button')}
  ${props => cssProps(props)}
` as React.FC<IButtonProps>;

export const Button: React.FC<IButtonProps> = ({
  preventDefault,
  onClick,
  loading,
  children,
  ...restProps
}) => {
  return (
    <InnerButton
      onClick={e => {
        if (preventDefault) {
          e.preventDefault();
        }
        onClick && onClick(e);
      }}
      {...(loading ? { gap: '1em' } : {})}
      {...restProps}
    >
      {loading && <LoadingOutlined className="loading-icon" />}
      {children}
    </InnerButton>
  );
};
