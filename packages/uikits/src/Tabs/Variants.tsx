import React from 'react';
import { BaseSwitchItemType, Switcher, SwitcherProps } from './Switcher';

export type SideBarProps<T extends BaseSwitchItemType> = Omit<
  SwitcherProps<T>,
  'direction'
>;

export const SideBar = <T extends BaseSwitchItemType>(props: SideBarProps<T>) => (
  //@ts-ignore
  <Switcher direction="vertical" {...props} />
);


export const Menus = Switcher;
export const Tabs = <T extends BaseSwitchItemType>(props: SideBarProps<T>) => (
  //@ts-ignore
  <Switcher direction="horizontal" {...props} />
);
