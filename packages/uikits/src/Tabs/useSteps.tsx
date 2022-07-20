import { useExclusive } from '@c3/hooks';
import React, { useCallback, useMemo } from 'react';
import { BaseSwitchItemType, Switcher, SwitcherProps } from './Switcher';

export const useSteps = <T extends BaseSwitchItemType>(
  props: SwitcherProps<T>
) => {
  const { menuConfig, updateConfig, ...restProps } = props;
  const on = useExclusive<T>(menuConfig, 'active', updateConfig);
  const activeIndex = useMemo(
    () => menuConfig.findIndex((e: T) => e.active),
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
      <Switcher
        menuConfig={menuConfig}
        updateConfig={updateConfig}
        {...restProps}
      />
    ),
    [menuConfig, restProps, updateConfig]
  );

  return [_Switcher, goNext, goPrev] as const;
};
