import { Default } from '../List/List.stories';
import { Dropdown } from './Dropdown';
import React from 'react';
export default {
  component: Dropdown,
  title: 'uikits/Dropdown',
};
const overlay = (
  <Default css={{ overflow: 'hidden', border: '1px solid black' }} />
);
const defaultArgs = {
  css: { border: '1px solid green', ml: '100px', mt: 100 },
  // dbg: true,
  overlay: overlay,
};
export const ClickDropdown = () => {
  return (
    <Dropdown
      {...defaultArgs}
      useAnime
    >
      <button>clickMe</button>
    </Dropdown>
  );
};
