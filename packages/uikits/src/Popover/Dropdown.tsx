import { Popover, PopoverProps } from './Popover';
import React from 'react';

export type DropdownProps = Omit<PopoverProps, 'visible' | 'updateVisible'>;

export const Dropdown: React.FC<DropdownProps> = props => {
  const [visible, setVisible] = React.useState(false);
  const { overlay, ...restProps } = props;
  const { onClick, ...restOverlayProps } = overlay.props;
  console.log('visible', visible);
  return (
    //@ts-ignore
    <Popover
      // as="u-dropdown"
      placement={'bottom'}
      visible={visible}
      updateVisible={setVisible}
      overlay={
        <overlay.type
          onClick={(e: MouseEvent) => {
            setVisible(false);
            onClick && onClick(e);
          }}
          {...restOverlayProps}
        />
      }
      {...restProps}
    />
  );
};
