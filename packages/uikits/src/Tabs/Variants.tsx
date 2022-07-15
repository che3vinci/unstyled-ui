import React from 'react';
import { BaseSwitchItem, Switcher, SwitcherProps } from './Switcher';

export type SideBarProps<T extends BaseSwitchItem> = Omit<
  SwitcherProps<T>,
  'direction'
>;

export const SideBar = <T extends BaseSwitchItem>(props: SideBarProps<T>) => (
  //@ts-ignore
  <Switcher direction="vertical" {...props} />
);


export const Menus = Switcher;
export const Tabs = <T extends BaseSwitchItem>(props: SideBarProps<T>) => (
  //@ts-ignore
  <Switcher direction="horizontal" {...props} />
);
