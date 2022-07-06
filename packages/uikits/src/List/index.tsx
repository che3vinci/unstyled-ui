import { col, row } from '@unstyled-ui/css';
import { useExclusive } from '@c3/hooks';
import { Color, HVDirection, IDable, isEmpty } from '@c3/utils';
import classNames from 'classnames';
import React from 'react';
import { BaseProps } from '../Common';
import { RawList } from '../RawList';

export type BaseListItem = IDable & { active?: boolean };
export type ListProps<T extends BaseListItem> = {
  data: T[];
  renderItem: (item: T, idx: number) => JSX.Element;
  emptyNode?: React.ReactElement;
  hvDirection?: HVDirection;
  updateList: (list: T[], prev: T[]) => void;
} & BaseProps & {
    divider?: Color; //color
  }; //dont use current `margin-down` gap for divider line reason

export const List = <T extends BaseListItem>(props: ListProps<T>) => {
  const {
    data,
    renderItem,
    className,
    emptyNode,
    hvDirection = 'vertical',
    updateList,
    ...restProps
  } = props;
  const on = useExclusive(data, 'active', updateList);
  const _isEmpty = isEmpty(data);
  const dir = hvDirection === 'vertical' ? col('stretch') : row();
  return (
    <RawList
      width="100%"
      className={classNames('c3-list', className)}
      hvDirection={hvDirection}
      {...dir}
      {...restProps}
    >
      {_isEmpty
        ? emptyNode
        : data.map((e, idx) => {
            const item = renderItem(e, idx);
            const { onClick, className, ...restProps } = item.props;
            return (
              <item.type
                onClick={(evt: React.MouseEvent) => {
                  on(e.id);
                  onClick && onClick(evt, e);
                }}
                className={classNames(className, e.active && 'c3-active')}
                {...restProps}
                key={e.id}
              />
            );
          })}
    </RawList>
  );
};
