import { Dropdown } from './Dropdown';
import React from 'react';

import { Default } from '../List/index.stories';
export default {
  component: Dropdown,
  title: 'uikits/Dropdown',
};
const Overlay = <Default />;
const defaultArgs = {
  css: { w: 100, border: '1px solid green', margin: '100px' },
  dbg: true,
  overlay: Overlay,
};

export const ClickDropdown = () => (
  <Dropdown {...defaultArgs}>
    <button>click</button>
  </Dropdown>
);
export const HoverDropdown = () => (
  <Dropdown {...defaultArgs} trigger={['hover']}>
    <button>click</button>
  </Dropdown>
);
export const Top = () => (
  <Dropdown {...defaultArgs} placement="top">
    <button>click</button>
  </Dropdown>
);
export const Bottom = () => (
  <Dropdown {...defaultArgs} placement="bottom">
    <button>click</button>
  </Dropdown>
);

export const Left = () => (
  <Dropdown {...defaultArgs} placement="left">
    <button>click</button>
  </Dropdown>
);
export const Right = () => (
  <Dropdown {...defaultArgs} placement="right">
    <button>click</button>
  </Dropdown>
);
