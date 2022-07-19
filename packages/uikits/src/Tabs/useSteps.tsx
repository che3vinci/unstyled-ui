import { useExclusive } from '@c3/hooks';
import { HVDirection } from '@c3/utils';
import { BaseProps } from '@unstyled-ui/core';
import React, { useCallback, useMemo, useState } from 'react';
import { BaseSwitchItem, MenuConfig, Switcher } from './Switcher';

export type Props<T> = {
  menuConfig: MenuConfig<T>;
  updateConfig: (menu: MenuConfig<T>) => void;
  direction: HVDirection;
} & BaseProps;

export const useSteps = <T extends BaseSwitchItem>(props: Props<T>) => {
  const { menuConfig, updateConfig, direction, ...restProps } = props;
  const on = useExclusive(menuConfig, 'isSelected', updateConfig);
  const activeIndex = useMemo(
    () => menuConfig.findIndex(e => e.isSelected),
    [menuConfig]
  );

  const goNext = useCallback(() => {
    if (activeIndex < menuConfig.length - 1) {
      on(menuConfig[activeIndex + 1].id);
    }
  }, [activeIndex, menuConfig, on]);

  const goPrev = useCallback(() => {
    if (activeIndex > 0) {
      on(menuConfig[activeIndex - 1].id);
    }
  }, [activeIndex, menuConfig, on]);

  const _Switcher = useMemo(
    () => (
      <Switcher menuConfig={menuConfig} direction={direction} {...restProps} />
    ),
    [direction, menuConfig, restProps]
  );

  return [_Switcher, goNext, goPrev] as const;
};
