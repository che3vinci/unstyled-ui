import { HVDirection } from '@c3/utils';
import React, { useCallback, useState } from 'react';
import { BaseSwitchItem, MenuConfig, Switcher } from './Switcher';

export const useSwitcher = <T extends BaseSwitchItem>(
  menuconfig: MenuConfig<T>,
  direction: HVDirection
) => {
  const [menuConfig, setMenuconfig] = useState(menuconfig);
  const updateConfig = useCallback((newConfig: MenuConfig<T>) => {
    setMenuconfig(newConfig);
  }, []);
  return (
    <Switcher
      menuConfig={menuConfig}
      direction={direction}
      updateConfig={updateConfig}
    />
  );
};
