import { useExclusive } from '@c3/hooks';
import { Color, IDable, isEmpty } from '@c3/utils';
import { BaseProps, CSSProperties, styled } from '@unstyled-ui/core';
import { Box, col, rgap, row, vgap } from '@unstyled-ui/layout';
import React, { useMemo } from 'react';

export type BaseListItemType = IDable & { active?: boolean };

export type ListProps<T extends BaseListItemType> = {
  data: T[];
  renderItem: (item: T, idx: number) => JSX.Element;
  emptyNode?: React.ReactElement;
  direction?: 'row' | 'column';
  updateData: (newData: T[], prev: T[]) => void;
  afterClick?: (item: T) => void;
} & BaseProps & {
    divider?: Color; //color
    gap?: CSSProperties['gap'];
  }; //dont use current `margin-down` gap for divider line reason

export const List = <T extends BaseListItemType>(props: ListProps<T>) => {
  const {
    data,
    renderItem,
    emptyNode,
    afterClick,
    direction = 'column',
    updateData,
    gap,
    ...restProps
  } = props;
  const on = useExclusive<T>(data, 'active', updateData);
  const isCol = direction === 'column';
  const dir = useMemo(() => (isCol ? col('stretch') : row()), [isCol]);
  //@ts-ignore
  const gapObj = useMemo(() => (isCol ? vgap(gap) : rgap(gap)), [gap, isCol]);
  const _Box = useMemo(
    () =>
      styled(Box, {
        //@ts-ignore
        listStyle: 'none',
        ...dir,
        ...gapObj,
        minW: 'max-content',
        w: '100%',
        overflow: 'hidden',
        '& > *': { w: isCol ? '100%' : 'auto', flexShrink: 0 },
      }),
    [dir, gapObj, isCol]
  );
  return (
    <_Box as="u-ul" {...restProps}>
      {isEmpty(data)
        ? emptyNode
        : data.map((e: T, idx: number) => {
            const item = renderItem(e, idx);
            if (!item) {
              return null;
            }
            const { onClick, ...restProps } = item.props;
            return (
              <item.type
                as="u-li"
                onClick={(evt: React.MouseEvent) => {
                  on(e.id);
                  onClick && onClick(evt, e);
                  afterClick && afterClick(e);
                }}
                {...(e.active ? { active: true } : {})}
                {...restProps}
                key={e.id}
              />
            );
          })}
    </_Box>
  );
};
