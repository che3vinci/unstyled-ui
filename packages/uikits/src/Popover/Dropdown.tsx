import { Popover, PopoverProps } from './Popover';
import React from 'react';

export type DropdownProps = PopoverProps;

export const Dropdown: React.FC<DropdownProps> = props => {
  return <Popover placement={'bottom'} {...props} />;
};
