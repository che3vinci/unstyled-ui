import { BaseProps } from '@unstyled-ui/core';
import { Dropdown } from '@unstyled-ui/uikits';
import { isEmpty } from 'lodash';
import React, { useCallback } from 'react';

export type Option = {
  name: string;
  value: string;
};

export type SelectProps = {
  onChange: (selected: Option) => void;
  name: string;
  selected?: Option;
  selectBox: JSX.Element;
} & BaseProps;

export const Select = (props: SelectProps) => {
  const { onChange, selectBox, selected, children, ...restProps } = props;
  if (!React.isValidElement(children)) {
    throw new Error('Select children must be a valid react element');
  }

  const handleChange = useCallback(
    e => {
      const v = {
        value: e.target.getAttribute('value'),
        name: e.target.getAttribute('name'),
      };
      onChange(v);
    },
    [onChange]
  );

  return (
    <Dropdown
      //@ts-ignore
      as="u-select"
      overlay={children}
      onClick={handleChange}
      {...restProps}
    >
      {selectBox}
    </Dropdown>
  );
};
