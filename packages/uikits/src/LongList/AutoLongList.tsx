import { useTouchBottom } from '@c3/hooks';
import React, { useRef } from 'react';
import { BaseProps } from '../Common';
import { Col } from '../layout';
import { BaseListItem, List, ListProps } from '../List';

type BaseType = BaseListItem;
export type IAutoLongListProps<T extends BaseType> = {
  loadNextTip?: React.ReactElement;
  loadNextPage: () => void;
  listCssProps?: BaseProps;
} & ListProps<T>;

export const AutoLongList = <T extends BaseType>(
  props: IAutoLongListProps<T>
): JSX.Element => {
  const {
    renderItem,
    data,
    updateList,
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
        updateList={updateList}
        hvDirection={hvDirection}
        emptyNode={emptyNode}
        {...listCssProps}
      />
      {loadNextTip}
    </Col>
  );
};
