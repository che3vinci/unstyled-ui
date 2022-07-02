import { getHash, useExclusive, useHashChange } from '@c3/hooks';
import { HVDirection } from '@c3/utils';
import classNames from 'classnames';
import React, { useEffect, useMemo } from 'react';
import { Row } from '..';
import { BaseProps } from '../Common';
import { Col } from '../layout';
import { IRawListProps } from '../RawList';

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

export type SwitcherProps<Item> = BaseProps & {
  direction: HVDirection;
  menuConfig: MenuConfig<Item>;
  updateConfig: (config: MenuConfig<Item>) => void;
  navProps?: IRawListProps;
  enableHash?: boolean;
  renderItem?: (item: Item) => JSX.Element;
  afterSwitch?: (item: Item) => void;
  renderContent?: (item: Item) => JSX.Element;
};
export const Switcher = <Item extends BaseSwitchItem>({
  menuConfig,
  updateConfig,
  navProps,
  afterSwitch,
  direction,
  enableHash = true,
  className,
  renderItem,
  renderContent,
  ...props
}: SwitcherProps<Item>) => {
  const on = useExclusive(menuConfig, 'isSelected', updateConfig);
  const activeItem = useMemo(
    () => menuConfig.find(e => e.isSelected),
    [menuConfig]
  );
  const [, setHash] = useHashChange((hash: string) => {
    enableHash && on(hash);
  });

  useEffect(() => {
    const hash = getHash();
    enableHash && hash && on(hash);
  }, [enableHash, on]);

  const { className: navClassName, ...navxProps } = navProps || {};
  const hv = useMemo(() => {
    if (direction === 'horizontal') {
      return {
        navLayout: Row,
        Layout: Col,
      };
    } else {
      return { navLayout: Col, Layout: Row };
    }
  }, [direction]);
  return (
    <hv.Layout className={classNames('c3-switcher', className)} {...props}>
      <hv.navLayout
        className={classNames('c3-switcher-menu-bar', navClassName)}
        {...navxProps}
      >
        {menuConfig.map(e => {
          const NavItem = renderItem?.(e) || e.renderItem?.<Item>(e) || (
            <span>-please supply renderItem function-</span>
          );
          const { onClick, className, ...restProps } = NavItem.props;
          return (
            <NavItem.type
              onClick={(evt: React.MouseEvent) => {
                console.log('clickSwitcherItem', e);
                if (enableHash) {
                  setHash(e.id);
                } else {
                  on(e.id);
                }
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
