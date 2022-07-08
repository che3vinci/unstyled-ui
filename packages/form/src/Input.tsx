import React from 'react';
import { Row } from '@unstyled-ui/layout';
import { BaseProps } from '@unstyled-ui/core';
import { RawInput } from './RawInput';

export interface IInputProps extends BaseProps {
  value?: string | number | readonly string[];
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  inputProps?: BaseProps<React.InputHTMLAttributes<HTMLInputElement>>;
  prevNode?: React.ReactNode;
  nextNode?: React.ReactNode;
}
export const Input: React.FC<IInputProps> = ({
  value,
  onChange,
  inputProps,
  prevNode,
  nextNode,
  ...props
}) => {
  return (
    <Row fx="flex-start" {...props}>
      {prevNode}
      <RawInput value={value} onChange={onChange} {...inputProps}></RawInput>
      {nextNode}
    </Row>
  );
};
