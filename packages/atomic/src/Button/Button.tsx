import { LoadingOutlined } from '@ant-design/icons';
import React, { useCallback } from 'react';

import { BaseProps } from '@unstyled-ui/core';
import { Atomic } from '../Atomic';
import { button } from './button.utils';

export type ButtonProps = BaseProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>
> & {
  loading?: boolean;
  preventDefault?: boolean;
  debounce?: boolean;
  disabled?: boolean;
};

export const Button: React.FC<ButtonProps> = props => {
  const { preventDefault, onClick, loading, children, css, ...restProps } =
    props;

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      if (preventDefault) {
        e.preventDefault();
      }
      onClick && onClick(e);
    },
    [onClick, preventDefault]
  );

  return (
    <Atomic
      as="button"
      onClick={handleClick}
      //@ts-ignore
      css={{ ...(loading ? { gap: '1em' } : {}), ...button(), ...css }}
      {...restProps}
    >
      {loading && <LoadingOutlined className="loading-icon" />}
      {children}
    </Atomic>
  );
};
