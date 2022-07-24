import { BaseProps, styled } from '@unstyled-ui/core';
import { Item } from '@unstyled-ui/uikits';
import { Row } from '@unstyled-ui/layout';
import React, { InputHTMLAttributes, useMemo } from 'react';

export type InputProps = {
  prefix?: JSX.Element;
  suffix?: JSX.Element;
  allowClear?: boolean;
  status?: 'warning' | 'error' | 'success';
} & BaseProps<InputHTMLAttributes<HTMLInputElement>>;

export const InputContainer: React.FC<InputProps> = props => {
  const { prefix, suffix, allowClear, children, ...restProps } = props;
  if (!React.isValidElement(props.children)) {
    throw new Error('TypeError:children must be reactElement');
  }
  const _Row = useMemo(
    () =>
      styled(Row, {
        '& > input': {
          h: '100%',
          // w: 'max-content',
          background: 'transparent',
          outline: 'none',
          border: 'none',
        },
        '&:focus-within': {
          border: '1px solid $gray600',
        },
      }),
    []
  );
  return (
    //@ts-ignore
    <_Row as="u-input-container" {...restProps}>
      {prefix}
      {children}
      {suffix}
    </_Row>
    // <Item direction="row" prefix={prefix} suffix={suffix} {...restProps}>
    //   {children}
    // </Item>
  );
};
