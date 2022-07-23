import { useExclusive } from '@c3/hooks';
import { Color, IDable, isEmpty } from '@c3/utils';
import { BaseProps, CSSProperties } from '@unstyled-ui/core';
import { Box, col, rgap, row, vgap } from '@unstyled-ui/layout';
import React from 'react';

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
    css = {},
    gap,
    ...restProps
  } = props;
  const on = useExclusive<T>(data, 'active', updateData);
  const dir = direction === 'column' ? col('stretch') : row();
  //@ts-ignore
  const gapObj = direction === 'column' ? vgap(gap) : rgap(gap);
  return (
    //@ts-ignore
    <Box
      as="ul"
      //@ts-ignore
      css={{
        listStyle: 'none',
        ...dir,
        ...gapObj,
        w: 'max-content',
        '& > *': { w: '100%' },
        ...css,
      }}
      {...restProps}
    >
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
    </Box>
  );
};
