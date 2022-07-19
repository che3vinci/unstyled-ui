import {
  useBoundingClientRect,
  useEventListener,
  useHover,
  useSwitch,
} from '@c3/hooks';
import { IBox } from '@c3/utils';
import { BaseProps } from '@unstyled-ui/core';
import {
  absXCenter,
  absYCenter,
  Box,
  col,
  Relative,
} from '@unstyled-ui/layout';
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { IPosition } from '@unstyled-ui/layout';
import { show } from '@unstyled-ui/css';

export type PopoverProps = {
  overlay: JSX.Element;
  trigger?: ('click' | 'hover')[];
  placement?: 'top' | 'bottom' | 'left' | 'right';
} & BaseProps;

export const Popover: React.FC<PopoverProps> = props => {
  const {
    trigger = ['click'],
    overlay,
    placement = 'bottom',
    children,
    css = {},
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
        setPos(absXCenter({ top: box.height }));
        break;
      case 'top':
        setPos(absXCenter({ bottom: box.height }));
        break;
      case 'left':
        setPos(absYCenter({ right: box.width }));
        break;
      case 'right':
        setPos(absYCenter({ left: box.width }));
        break;
      default:
        throw new Error(
          'TypeError:placement must be one of top, bottom, left, right'
        );
    }
  });
  useEffect(() => {
    ref.current && watch(ref.current);
  }, [watch]);
  const { css: overlayCss, ...restOverlayProps } = overlay.props;

  return (
    //@ts-ignore
    <Relative
      //@ts-ignore
      css={{ w: 'max-content', ...css }}
      {...restProps}
      onClick={onClickContainer}
      ref={ref}
    >
      <children.type {...childProps} />
      {/* @ts-ignore */}
      <overlay.type
        css={{
          ...overlayCss,
          position: 'absolute',
          ...pos,
          ...show(visible),
          ...col(),
        }}
        {...restOverlayProps}
      />
    </Relative>
  );
};
