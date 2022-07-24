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
const PopoverApp = props => {
  const [visible, setVisible] = React.useState(false);
  return (
    <Popover
      {...defaultArgs}
      visible={visible}
      updateVisible={setVisible}
      {...props}
    >
      <button>click</button>
    </Popover>
  );
};

export const ClickDropdown = () => (
  <PopoverApp>
    <button>click</button>
  </PopoverApp>
);
export const HoverDropdown = () => (
  <PopoverApp trigger={['hover']}>
    <button>click</button>
  </PopoverApp>
);
export const Top = () => (
  <PopoverApp placement="top">
    <button>click</button>
  </PopoverApp>
);
export const Bottom = () => (
  <PopoverApp placement="bottom">
    <button>click</button>
  </PopoverApp>
);

export const Left = () => (
  <PopoverApp placement="left">
    <button>click</button>
  </PopoverApp>
);
export const Right = () => (
  <PopoverApp placement="right">
    <button>click</button>
  </PopoverApp>
);
