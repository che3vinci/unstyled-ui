import { Popover } from './Popover';
import React from 'react';

import { Default } from '../List/List.stories';
export default {
  component: Popover,
  title: 'uikits/popover',
};
const Overlay = <Default />;
const defaultArgs = {
  css: { w: 100, border: '1px solid green', margin: '100px' },
  dbg: true,
  overlay: Overlay,
};

export const ClickDropdown = () => (
  <Popover {...defaultArgs}>
    <button>click</button>
  </Popover>
);
export const HoverDropdown = () => (
  <Popover {...defaultArgs} trigger={['hover']}>
    <button>click</button>
  </Popover>
);
export const Top = () => (
  <Popover {...defaultArgs} placement="top">
    <button>click</button>
  </Popover>
);
export const Bottom = () => (
  <Popover {...defaultArgs} placement="bottom">
    <button>click</button>
  </Popover>
);

export const Left = () => (
  <Popover {...defaultArgs} placement="left">
    <button>click</button>
  </Popover>
);
export const Right = () => (
  <Popover {...defaultArgs} placement="right">
    <button>click</button>
  </Popover>
);
