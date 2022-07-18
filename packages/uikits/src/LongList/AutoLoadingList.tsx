import { useTouchBottom } from '@c3/hooks';
import React, { useRef } from 'react';
import { BaseProps } from '@unstyled-ui/core';
import { Col } from '@unstyled-ui/layout';
import { BaseListItemType, List, ListProps } from '../List/List';

type BaseType = BaseListItemType;
export type IAutoLongListProps<T extends BaseType> = {
  loadNextTip?: React.ReactElement;
  loadNextPage: () => void;
  listCssProps?: BaseProps;
} & ListProps<T>;

export const AutoLoadingList = <T extends BaseType>(
  props: IAutoLongListProps<T>
): JSX.Element => {
  const {
    renderItem,
    data,
    updateData: updateList,
    hvDirection,
    emptyNode,
    loadNextPage,
    loadNextTip,
    listCssProps,
    ...restProps
  } = props;
  const ref = useRef<HTMLDivElement | null>(null);
  useTouchBottom(ref.current, loadNextPage);

  return (
    <Col fx="stretch" width="100%" ref={ref} {...restProps}>
      <List
        data={data}
        renderItem={renderItem}
        updateData={updateList}
        hvDirection={hvDirection}
        emptyNode={emptyNode}
        css={{ ...listCssProps }}
      />
      {loadNextTip}
    </Col>
  );
};
