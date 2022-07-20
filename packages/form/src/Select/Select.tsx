import { BaseProps } from '@unstyled-ui/core';
import { Dropdown } from '@unstyled-ui/uikits';
import { isEmpty } from 'lodash';
import React, { useCallback } from 'react';

export type SelectProps<T> = {
  // onChange: (selected: T) => void;
  // name: string;
  // selected?: T;
  selectBox: JSX.Element;
} & BaseProps;

export const Select = <T,>(props: SelectProps<T>) => {
  const { onChange, selectBox, selected, children, ...restProps } = props;
  if (!React.isValidElement(children)) {
    throw new Error('Select children must be a valid react element');
  }

  // const handleChange = useCallback(
  //   e => {
  //     onChange(e.target.getAttribute('data-id'));
  //   },
  //   [onChange]
  // );

  return (
    <Dropdown
      //@ts-ignore
      as="u-select"
      overlay={children}
      // onClick={handleChange}
      {...restProps}
    >
      {selectBox}
    </Dropdown>
  );
};
