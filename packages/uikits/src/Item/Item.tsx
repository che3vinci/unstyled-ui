import { BaseProps } from '@unstyled-ui/core';
import { Box, col, flexYCenter, row } from '@unstyled-ui/layout';
import React, { ForwardRefRenderFunction } from 'react';

export interface ItemProps extends Omit<BaseProps, 'prefix' | 'suffix'> {
  direction?: 'row' | 'column';
  prefix?: JSX.Element;
  suffix?: JSX.Element;
}

export const _Item: ForwardRefRenderFunction<HTMLDivElement, ItemProps> = (
  props,
  ref
) => {
  const { prefix, suffix, direction = 'row', css = {}, ...restProps } = props;

  if (!React.isValidElement(props.children)) {
    throw new Error('Item children must be a valid react element');
  }
  const { css: cCss = {}, ...restCProps } = props.children.props;
  const { prefixCss = {}, ...restPrefixProps } = prefix?.props || {};
  const { suffixCss = {}, ...restsuffixProps } = suffix?.props || {};
  const isRow = direction === 'row';

  return (
    <Box
      as="u-item"
      css={{
        //@ts-ignore
        ...(isRow ? row() : col()),
        ...css,
      }}
      {...restProps}
      ref={ref}
    >
      {prefix && (
        <prefix.type
          css={{ flexShrink: 0, ...prefixCss }}
          {...restPrefixProps}
        />
      )}
      <props.children.type
        css={{ rows: 1, flexGrow: 1, ...cCss }}
        {...restCProps}
      />
      {suffix && (
        <suffix.type
          css={{ flexShrink: 0, ...suffixCss }}
          {...restsuffixProps}
        />
      )}
    </Box>
  );
};
export const Item = React.forwardRef(_Item);
