import { useExclusive } from '@c3/hooks';
import { HVDirection } from '@c3/utils';
import React, { useCallback, useMemo, useState } from 'react';
import { BaseSwitchItem, MenuConfig, Switcher } from './Switcher';

export const useSteps = <T extends BaseSwitchItem>(
  menuConfig: MenuConfig<T>,
  updateConfig: (menu: MenuConfig<T>) => void,
  direction: HVDirection
) => {
  // const [menuConfig, setMenuconfig] = useState(menuconfig);
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
    () => <Switcher menuConfig={menuConfig} direction={direction} />,
    [direction, menuConfig]
  );

  return [_Switcher, goNext, goPrev] as const;
};
