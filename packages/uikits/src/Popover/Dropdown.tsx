import { Popover, PopoverProps } from './Popover';

export type DropdownProps = PopoverProps;

export const Dropdown: React.FC<DropdownProps> = props => {
  return <Popover placement={'bottom'} {...props} />;
};
