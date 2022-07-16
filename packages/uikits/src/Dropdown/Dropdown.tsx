import { useHover, useSwitch } from '@c3/hooks';
import { BaseProps } from '@unstyled-ui/core';
import { Box, Relative } from '@unstyled-ui/layout';
import React, { HTMLAttributes } from 'react';

export type DropdownProps = {
  overlay: JSX.Element;
  trigger?: ('click' | 'hover')[];
  placement?: 'top' | 'bottom' | 'left' | 'right';
} & BaseProps;

export const Dropdown: React.FC<DropdownProps> = props => {
  const {
    trigger = ['click'],
    overlay,
    placement = 'bottom',
    children,
    ...restProps
  } = props;
  const [showOverlay, on, off] = useSwitch(false);
  const hover = useHover({ onHover: on, onLeave: off });
  if (!React.isValidElement(children)) {
    throw new Error('TypeError:children must be reactElement');
  }
  const _props = {} as HTMLAttributes<HTMLDivElement>;
  if (trigger.includes('click')) {
    _props.onClick = on;
  }
  if (trigger.includes('hover')) {
    _props.onMouseEnter = hover.onMouseEnter;
    _props.onMouseLeave = hover.onMouseLeave;
  }
  return (
    <Relative {...restProps}>
      <children.type {...children.props} {..._props} />
      <Box style={{ position: 'absolute' }}>{showOverlay && overlay}</Box>
    </Relative>
  );
};
