import { Select } from './Select';
import React from 'react';

export default {
  title: 'form/select',
  component: Select,
};

export const styledSelect = () => {
  return (
    <Select
      css={{ background: 'red', _after: { content: 'he' } }}
      name="select"
    >
      <opt>1</opt>
      <option>2</option>
      <option>3</option>
      <option>4</option>
    </Select>
  );
};
