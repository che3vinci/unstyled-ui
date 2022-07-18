import React from 'react';
import { Row } from '@unstyled-ui/layout';
import { BaseProps } from '@unstyled-ui/core';
import { RawInput } from './RawInput';

export type InputProps = BaseProps & {
  value?: string | number | readonly string[];
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  prevNode?: React.ReactNode;
  nextNode?: React.ReactNode;
};
export const Input: React.FC<InputProps> = ({
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
      {/* @ts-ignore */}
      <RawInput value={value} onChange={onChange} {...inputProps} />
      {nextNode}
    </Row>
  );
};
