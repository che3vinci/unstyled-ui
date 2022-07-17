import { useEventListener, useHover, useSwitch } from '@c3/hooks';
import { BaseProps } from '@unstyled-ui/core';
import { Box, Relative } from '@unstyled-ui/layout';
import React, { HTMLAttributes, useCallback, useEffect, useRef } from 'react';

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
  const [visible, on, off] = useSwitch(false);
  const containerRef = useRef<HTMLDivElement>();
  const clickOutside = useCallback(() => {
    visible && off();
  }, [off, visible]);
  const forbidClick = useCallback((e: Event) => {
    e.stopPropagation();
  }, []);

  useEventListener(document, 'click', clickOutside);
  useEventListener(containerRef.current, 'click', forbidClick);

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
  console.log('containerRef', containerRef.current);

  return (
    <Relative {...restProps} ref={containerRef}>
      <children.type {...children.props} {..._props} />
      <Box style={{ position: 'absolute' }}>{visible && overlay}</Box>
    </Relative>
  );
};
