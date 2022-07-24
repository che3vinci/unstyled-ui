import {
  useBoundingClientRect,
  useEventListener,
  useHover,
  useSwitch,
} from '@c3/hooks';
import { IBox } from '@c3/utils';
import { BaseProps } from '@unstyled-ui/core';
import { absXCenter, absYCenter, col, Relative } from '@unstyled-ui/layout';
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { IPosition } from '@unstyled-ui/layout';
import { toggleDisplay, toggleVisibility } from '@unstyled-ui/css';
import { ForwardRefRenderFunction } from 'react';

export type PopoverProps = {
  overlay: JSX.Element;
  trigger?: ('click' | 'hover')[];
  placement?: 'top' | 'bottom' | 'left' | 'right';
  visible: boolean;
  updateVisible: (visible: boolean) => void;
} & BaseProps;

const _Popover: ForwardRefRenderFunction<HTMLElement, PopoverProps> = (
  props,
  ref
) => {
  const {
    trigger = ['click'],
    overlay,
    placement = 'bottom',
    children,
    visible,
    updateVisible,
    css = {},
    ...restProps
  } = props;
  if (!React.isValidElement(children)) {
    throw new Error('TypeError:children must be reactElement');
  }
  const btnRef = useRef<HTMLButtonElement>(null);

  const clickOutside = useCallback(() => {
    visible && updateVisible(false);
  }, [updateVisible, visible]);

  const forbidClick = useCallback((e: Event) => {
    e.stopPropagation();
  }, []);

  useEventListener(document, 'click', clickOutside);

  const { hovered, ...restEvent } = useHover();

  useEffect(() => {
    if (!trigger.includes('hover')) {
      return;
    }
    hovered
      ? updateVisible(true)
      : setTimeout(() => {
          updateVisible(false);
        }, 2000);
  }, [hovered, trigger, updateVisible]);

  const childProps = useMemo(() => {
    return {
      ...children.props,
      ...(trigger.includes('click')
        ? {
            onClick: (e: Event) => {
              e.stopPropagation();
              updateVisible(true);
            },
          }
        : {}),
      ...(trigger.includes('hover') ? restEvent : {}),
    };
  }, [children.props, restEvent, trigger, updateVisible]);

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
    btnRef?.current && watch(btnRef?.current);
  }, [watch]);
  const { css: overlayCss, className, ...restOverlayProps } = overlay.props;

  return (
    //@ts-ignore
    <Relative
      // as="u-popover"
      //@ts-ignore
      css={{ w: 'max-content', ...css }}
      {...restProps}
      onClick={onClickContainer}
      ref={ref}
    >
      <children.type {...childProps} ref={btnRef} />
      {/* @ts-ignore */}
      <overlay.type
        css={{
          ...overlayCss,
          position: 'absolute',
          ...pos,
          ...col(),
          ...toggleVisibility(visible),
        }}
        className={className + ' u-popover'}
        {...restOverlayProps}
      />
    </Relative>
  );
};

export const Popover = React.forwardRef(_Popover);
