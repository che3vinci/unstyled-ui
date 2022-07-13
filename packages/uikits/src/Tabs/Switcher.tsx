import { useExclusive } from '@c3/hooks';
import { HVDirection, noop } from '@c3/utils';
import { BaseProps } from '@unstyled-ui/core';
import { Col, Row } from '@unstyled-ui/layout';
import classNames from 'classnames';
import React, { useMemo } from 'react';

export type DefaultSwitchItem = {
  title: string;
  to: string;
} & BaseSwitchItem;

export type BaseSwitchItem = {
  id: string;
  isSelected: boolean;
  renderItem?: <T>(item: T) => JSX.Element;
  renderContent?: <T>(item: T) => JSX.Element;
};

export type MenuConfig<T> = T[];

export type SwitcherProps<Item> = {
  direction: HVDirection;
  menuConfig: MenuConfig<Item>;
  updateConfig?: (config: MenuConfig<Item>) => void;
  renderItem?: (item: Item) => JSX.Element;
  afterSwitch?: (item: Item) => void;
  renderContent?: (item: Item) => JSX.Element;
} & BaseProps;

export const Switcher = <Item extends BaseSwitchItem>({
  menuConfig,
  updateConfig,
  afterSwitch,
  direction,
  renderItem,
  renderContent,
  ...restProps
}: SwitcherProps<Item>) => {
  const on = useExclusive(menuConfig, 'isSelected', updateConfig || noop);
  const activeItem = useMemo(
    () => menuConfig.find(e => e.isSelected),
    [menuConfig]
  );

  const hv = useMemo(() => {
    if (direction === 'horizontal') {
      return {
        navLayout: Row,
        Layout: Col,
      };
    }
    return { navLayout: Col, Layout: Row };
  }, [direction]);
  return (
    <hv.Layout className="uu-switcher" {...restProps}>
      <hv.navLayout className="uu-switcher-bar">
        {menuConfig.map(e => {
          const NavItem = renderItem?.(e) || e.renderItem?.<Item>(e) || (
            <span>-please supply renderItem function-</span>
          );
          const { onClick, className, ...restProps } = NavItem.props;
          return (
            <NavItem.type
              onClick={(evt: React.MouseEvent) => {
                on(e.id);
                onClick && onClick(evt);
                afterSwitch && afterSwitch(e);
              }}
              className={classNames(
                className,
                'list-item',
                activeItem?.id === e.id ? 'active-item' : 'normal-item'
              )}
              {...restProps}
              key={e.id}
            />
          );
        })}
      </hv.navLayout>
      {activeItem &&
        (renderContent?.(activeItem) ||
          activeItem.renderContent?.<Item>(activeItem))}
    </hv.Layout>
  );
};
