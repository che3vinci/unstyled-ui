import React, { useRef } from 'react';
import { BaseProps } from '@unstyled-ui/core';
import { Col } from '@unstyled-ui/layout';
import { BaseListItemType, List, ListProps } from '../List/List';

type BaseType = BaseListItemType;
export type IManualLongListProps<T extends BaseType> = {
  loadNextTip?: React.ReactElement;
  listCssProps?: BaseProps;
} & ListProps<T>;

export const ManualLoadingList = <T extends BaseType>(
  props: IManualLongListProps<T>
): JSX.Element => {
  const {
    renderItem,
    data,
    updateData: updateList,
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
        updateData={updateList}
        hvDirection={hvDirection}
        emptyNode={emptyNode}
        css={{ ...listCssProps }}
      />
      {loadNextTip}
    </Col>
  );
};
