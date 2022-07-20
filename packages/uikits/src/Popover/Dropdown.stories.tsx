import { Default } from '../List/List.stories';
import { Dropdown } from './Dropdown';
import React from 'react';
export default {
  component: Dropdown,
  title: 'uikits/Dropdown',
};
const overlay = <Default />;
const defaultArgs = {
  css: { w: 100, border: '1px solid green', margin: '100px' },
  dbg: true,
  overlay: overlay,
};
export const ClickDropdown = () => {
  return (
    <Dropdown {...defaultArgs}>
      <button>clickMe</button>
    </Dropdown>
  );
};
