import {
  useBoundingClientRect,
  useEventListener,
  useHover,
  useSwitch,
} from '@c3/hooks';
import { IBox } from '@c3/utils';
import { BaseProps } from '@unstyled-ui/core';
import { Box, Relative } from '@unstyled-ui/layout';
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { IPosition } from '@unstyled-ui/layout';

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
  if (!React.isValidElement(children)) {
    throw new Error('TypeError:children must be reactElement');
  }
  const [visible, on, off] = useSwitch(false);
  const ref = useRef<HTMLButtonElement>(null);

  const clickOutside = useCallback(() => {
    visible && off();
  }, [off, visible]);

  const forbidClick = useCallback((e: Event) => {
    e.stopPropagation();
  }, []);

  useEventListener(document, 'click', clickOutside);

  const { hovered, ...restEvent } = useHover();

  useEffect(() => {
    hovered
      ? on()
      : setTimeout(() => {
          off();
        }, 2000);
  }, [hovered, off, on]);

  const childProps = useMemo(() => {
    return {
      ...children.props,
      ...(trigger.includes('click')
        ? {
            onClick: (e: Event) => {
              console.log('xxx');
              e.stopPropagation();
              on();
            },
          }
        : {}),
      ...(trigger.includes('hover') ? restEvent : {}),
    };
  }, [children.props, on, restEvent, trigger]);

  const onClickContainer = useCallback(
    e => {
      forbidClick(e);
      restProps.onClick && restProps.onClick(e);
    },
    [forbidClick, restProps]
  );

  const [pos, setPos] = useState<IPosition>({});
  const watch = useBoundingClientRect((box: IBox<number>) => {
    switch (placement) {
      case 'bottom':
        setPos({ top: box.height });
        break;
      case 'top':
        setPos({ bottom: 0 });
        break;
      case 'left':
        setPos({ right: box.width });
        break;
      case 'right':
        setPos({ left: 0 });
        break;
      default:
        throw new Error(
          'TypeError:placement must be one of top, bottom, left, right'
        );
    }
  });
  useEffect(() => {
    watch(ref.current);
  }, [watch]);

  return (
    <Relative {...restProps} onClick={onClickContainer}>
      <children.type {...childProps} ref={ref} />
      <Box style={{ position: 'absolute', ...pos }}>{visible && overlay}</Box>
    </Relative>
  );
};
