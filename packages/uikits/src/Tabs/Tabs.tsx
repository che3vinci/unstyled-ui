import React from 'react';
import { BaseSwitchItem, Switcher, SwitcherProps } from './Switcher';
export type TabsProps<T extends BaseSwitchItem> = Omit<
  SwitcherProps<T>,
  'direction'
>;
export const Tabs = <T extends BaseSwitchItem>(props: TabsProps<T>) => (
  <Switcher direction="horizontal" {...props}></Switcher>
);
