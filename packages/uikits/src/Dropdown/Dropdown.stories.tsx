import { Dropdown } from './Dropdown';
import React from 'react';

export default {
  component: Dropdown,
  title: 'uikits/Dropdown',
};
const Overlay = (
  <ul style={{ border: '1px solid red' }}>
    <li>1</li>
    <li>2</li>
  </ul>
);
const defaultArgs = {
  css: { w: 100, border: '1px solid green', margin: '100px' },
  overlay: Overlay,
};

export const ClickDropdown = () => (
  <Dropdown {...defaultArgs} dbg>
    <button>click</button>
  </Dropdown>
);
export const HoverDropdown = () => (
  <Dropdown trigger={['hover']} {...defaultArgs}>
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
