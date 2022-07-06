import { LoadingOutlined } from '@ant-design/icons';
import React, { useCallback } from 'react';

import { BaseProps } from '../../stitches';
import { Atomic } from '../Atomic';

export type ButtonProps = BaseProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>
> & {
  loading?: boolean;
  preventDefault?: boolean;
  debounce?: boolean;
  disabled?: boolean;
};

export const Button: React.FC<ButtonProps> = ({
  preventDefault,
  onClick,
  loading,
  children,
  ...restProps
}) => {
  const handleClick = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    if (preventDefault) {
      e.preventDefault();
    }
    onClick && onClick(e);
  }, [onClick, preventDefault]);

  return (
    <Atomic
      as="button"
      onClick={handleClick}
      {...(loading ? { gap: '1em' } : {})}
      {...restProps}
    >
      {loading && <LoadingOutlined className="loading-icon" />}
      {children}
    </Atomic>
  );
};
