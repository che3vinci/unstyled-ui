import { InputContainer } from './InputContainer';
import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { Input } from './Input';
import { styled } from '@unstyled-ui/core';
import { focused, statusVariants } from './cssVariants';
export default {
  title: 'form/input',
  component: Input,
};
const _Input = styled(Input, {
  variants: { ...statusVariants },
  ...focused,
});

export const ErrorInput = () => {
  return (
    <_Input
      status="error"
      css={{
        w: 480,
        h: 44,
        _placeholder: {
          typo: { fontSize: 14, fontWeight: 400, lineHeight: 1.33 },
          color: 'rgba(255, 255, 255, 0.4)',
        },
        caretColor: 'red',
      }}
      placeholder="Search name or contract address"
    />
  );
};
export const FocusInput = () => {
  return (
    <_Input
      css={{
        w: 480,
        h: 44,
        _placeholder: {
          typo: { fontSize: 14, fontWeight: 400, lineHeight: 1.33 },
          color: 'rgba(255, 255, 255, 0.4)',
        },
        caretColor: 'red',
      }}
      placeholder="Search name or contract address"
    />
  );
};

export const Placeholder = () => {
  return <input placeholder="Search name or contract address" />;
};

export const prefix = () => {
  return (
    <InputContainer prefix={<span>hello</span>}>
      <Input placeholder="Search name or contract address" />
    </InputContainer>
  );
};
