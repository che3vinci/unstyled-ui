import { BaseProps } from '@unstyled-ui/core';
import { Item } from '@unstyled-ui/uikits';
import { Row } from '@unstyled-ui/layout';
import React, { InputHTMLAttributes } from 'react';

export type InputProps = {
  prefix?: JSX.Element;
  suffix?: JSX.Element;
  allowClear?: boolean;
  status?: 'warning' | 'error' | 'success';
} & BaseProps<InputHTMLAttributes<HTMLInputElement>>;

export const InputContainer: React.FC<InputProps> = props => {
  const {
    prefix,
    suffix,
    allowClear,
    children,
    css = {},
    ...restProps
  } = props;
  if (!React.isValidElement(props.children)) {
    throw new Error('TypeError:children must be reactElement');
  }
  return (
    <Row
      as="u-input-container"
      css={{
        fx: 'flex-start',
        fy: 'center',
        '& input': {
          h: '100%',
          // w: 'max-content',
          background: 'transparent',
          outline: 'none',
          border: 'none',
        },
        '&:focus-within': {
          // border: '1px solid $gray600',
        },
        ...css,
      }}
      {...restProps}
    >
      {prefix}
      {children}
      {suffix}
    </Row>
  );
};
