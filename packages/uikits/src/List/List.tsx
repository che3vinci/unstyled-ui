import { Box, col, rgap, row, vgap } from '@unstyled-ui/layout';
import { useExclusive } from '@c3/hooks';
import { Color, HVDirection, IDable, isEmpty } from '@c3/utils';
import React from 'react';
import { BaseProps, CSSProperties } from '@unstyled-ui/core';

export type BaseListItemType = IDable & { active?: boolean };

export type ListProps<T extends BaseListItemType> = {
  data: T[];
  renderItem: (item: T, idx: number) => JSX.Element;
  emptyNode?: React.ReactElement;
  hvDirection?: HVDirection;
  updateData: (newData: T[], prev: T[]) => void;
} & BaseProps & {
    divider?: Color; //color
    gap?: CSSProperties['gap'];
  }; //dont use current `margin-down` gap for divider line reason

export const List = <T extends BaseListItemType>(props: ListProps<T>) => {
  const {
    data,
    renderItem,
    emptyNode,
    hvDirection = 'vertical',
    updateData,
    css = {},
    gap,
    ...restProps
  } = props;
  const on = useExclusive(data, 'active', updateData);
  const _isEmpty = isEmpty(data);
  const dir = hvDirection === 'vertical' ? col('stretch') : row();
  //@ts-ignore
  const gapObj = hvDirection === 'vertical' ? vgap(gap) : rgap(gap);
  return (
    <Box
      as="ul"
      width="100%"
      hvDirection={hvDirection}
      //@ts-ignore
      css={{ listStyle: 'none', ...dir, ...gapObj, ...css }}
      {...restProps}
    >
      {_isEmpty
        ? emptyNode
        : data.map((e, idx) => {
            const item = renderItem(e, idx);
            const { onClick, ...restProps } = item.props;
            return (
              <item.type
                as="u-li"
                onClick={(evt: React.MouseEvent) => {
                  on(e.id);
                  onClick && onClick(evt, e);
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
