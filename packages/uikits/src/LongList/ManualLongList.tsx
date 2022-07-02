import React, { useRef } from 'react';
import { BaseProps } from '../Common';
import { Col } from '../layout';
import { BaseListItem, List, ListProps } from '../List';

type BaseType = BaseListItem;
export type IManualLongListProps<T extends BaseType> = {
  loadNextTip?: React.ReactElement;
  listCssProps?: BaseProps;
} & ListProps<T>;

export const ManualLongList = <T extends BaseType>(
  props: IManualLongListProps<T>
): JSX.Element => {
  const {
    renderItem,
    data,
    updateList,
    hvDirection,
    emptyNode,
    loadNextTip,
    listCssProps,
    ...restProps
  } = props;
  const ref = useRef<HTMLDivElement | null>(null);

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
