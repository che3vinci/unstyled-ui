import { noop, __DEV__ } from '@c3/utils';
import { BaseProps } from '@unstyled-ui/core';
import { hidden } from '@unstyled-ui/css';
import React, { useMemo } from 'react';
import { Item } from '../Item';
import { List } from '../List/List';

export type BaseSwitchItemType = {
  id: string;
  active: boolean;
  renderContent?: <T>(item: T) => JSX.Element;
};

const anti = (direction: 'row' | 'column') =>
  direction === 'row' ? 'column' : 'row';
export type MenuConfig<T> = T[];

export type SwitcherProps<ItemType> = {
  direction: 'row' | 'column';
  menuConfig: MenuConfig<ItemType>;
  updateConfig: (config: MenuConfig<ItemType>) => void;
  renderItem: (item: ItemType) => JSX.Element;
  renderContent?: (item: ItemType) => JSX.Element;
} & BaseProps;

export const Switcher = <ItemType extends BaseSwitchItemType>({
  menuConfig,
  updateConfig,
  direction,
  renderItem,
  renderContent,
  ...restProps
}: SwitcherProps<ItemType>) => {
  // const activeItem = useMemo(
  //   () => menuConfig.find((e: ItemType) => e.active),
  //   [menuConfig]
  // );
  // if (__DEV__) {
  //   if (!activeItem) {
  //     throw new Error('active item not found');
  //   }
  // }

  return (
    <Item
      as="u-switcher"
      //@ts-ignore
      prefix={
        <List
          as="u-nav"
          data={menuConfig}
          direction={anti(direction)}
          renderItem={renderItem}
          updateData={updateConfig}
        />
      }
      direction={direction}
      {...restProps}
    >
      <List
        data={menuConfig}
        direction={anti(direction)}
        renderItem={(e: any) => renderContent?.(e) || e?.renderContent?.(e)}
        css={{ '&>*:not([active])': { ...hidden } }}
        updateData={noop}
      />
    </Item>
  );
};
