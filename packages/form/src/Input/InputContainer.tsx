import { BaseProps, styled } from '@unstyled-ui/core';
import { absYCenter, Row } from '@unstyled-ui/layout';
import React, { InputHTMLAttributes } from 'react';
import { atomic } from './Input';
import classnames from 'classnames';


export type InputProps = {
  prefix?: JSX.Element;
  suffix?: JSX.Element;
  allowClear?: boolean;
  addonBefore?: JSX.Element;
  addonAfter?: JSX.Element;
  status?: 'warning' | 'error' | 'success';
} & BaseProps<InputHTMLAttributes<HTMLInputElement>>;

export const InputContainer: React.FC<InputProps> = props => {
  const {
    prefix,
    suffix,
    allowClear,
    addonAfter,
    addonBefore,
    className,
    css = {},
    ...restProps
  } = props;
  if (props.children) {
  }
  return (
    <Row
      css={{
        fx: 'flex-start',
        fy: 'center',
        '& input': {
          h: '100%',
          w: '100%',
          background: 'transparent',
        },
        ...css,
      }}
      className={classnames(className, 'input-container')}
      {...restProps}
    ></Row>
  );
};
