import { Popover, PopoverProps } from './Popover';
import React from 'react';
import { useRef } from 'react';
import { useCallback } from 'react';
import { useAnime } from '@unstyled-ui/animation';
import { wait } from '@c3/utils';
import anime from 'animejs';
window.anime = anime;
export type DropdownProps = Omit<PopoverProps, 'visible' | 'updateVisible'> & {
  useAnime?: boolean;
};
const HIDE_DURATION = 200;
export const Dropdown: React.FC<DropdownProps> = props => {
  const [visible, setVisible] = React.useState(false);
  const { overlay, useAnime: _useAnime = true, ...restProps } = props;
  const { onClick, ...restOverlayProps } = overlay.props;
  const ref = useRef<HTMLElement>(null);
  const [showAnime, hideAnime] = useAnime({
    targets: () => ref.current?.querySelector('.u-popover'),
    from: { height: 0, easing: 'linear', duration: HIDE_DURATION },
    to: { height: (el: HTMLElement) => el.scrollHeight },
  });

  const updateVisible = useCallback(
    async (visible: boolean) => {
      if (visible) {
        setVisible(visible);
        _useAnime && setTimeout(showAnime);
      } else {
        _useAnime && setTimeout(hideAnime);
        await wait(HIDE_DURATION);
        setVisible(visible);
      }
    },
    [_useAnime, hideAnime, showAnime]
  );
  return (
    //@ts-ignore
    <Popover
      ref={ref}
      // as="u-dropdown"
      placement={'bottom'}
      visible={visible}
      updateVisible={updateVisible}
      overlay={
        <overlay.type
          onClick={(e: MouseEvent) => {
            updateVisible(false);
            onClick && onClick(e);
          }}
          {...restOverlayProps}
        />
      }
      {...restProps}
    />
  );
};
