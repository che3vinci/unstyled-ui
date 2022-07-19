import { atomic } from './Input';
import { InputContainer } from './InputContainer';
import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
export default {
  title: 'form/input',
  component: atomic.input,
};

export const MyRawInput = () => {
  return (
    <atomic.input
      css={{
        w: 480,
        h: 44,
        pl: '1em',
        background: '#1C152B',
        _placeholder: {
          typo: { fontSize: 14, fontWeight: 400, lineHeight: 1.33 },
          color: 'rgba(255, 255, 255, 0.4)',
        },
        caretColor: 'red',
        _before: {},
      }}
      placeholder="Search name or contract address"
    />
  );
};
export const Placeholder = () => {
  return <input placeholder="Search name or contract address" />;
};

export const InputContainerX = () => {
  return (
    <InputContainer prefix={<span>hello</span>}>
      <atomic.input placeholder="Search name or contract address" />
    </InputContainer>
  );
};
