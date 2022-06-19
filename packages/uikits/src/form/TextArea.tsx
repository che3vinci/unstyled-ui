import { ThKind } from '@c3/css';
import React, { ForwardRefRenderFunction } from 'react';
import { Col } from '..';
import { BaseProps } from '../Common';
import { RawTextArea } from './RawTextArea';

export type TextAreaProps = {
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
  value?: string;
  addon?: React.ReactElement;
  textareaProps?: BaseProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>>;
  kind?: ThKind | ThKind[];
} & BaseProps;

export const TextArea: ForwardRefRenderFunction<
  HTMLAreaElement,
  TextAreaProps
> = (props, ref) => {
  const { onChange, value, addon, textareaProps, kind, ...restProps } = props;
  return (
    <Col {...restProps}>
      <RawTextArea
        value={value}
        onChange={onChange}
        kind={kind}
        // ref={ref}
        {...textareaProps}
      />
      {addon}
    </Col>
  );
};
