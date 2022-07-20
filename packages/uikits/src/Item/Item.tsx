import { BaseProps } from '@unstyled-ui/core';
import { Box, flexYCenter } from '@unstyled-ui/layout';
import React from 'react';

export interface ItemProps extends Omit<BaseProps, 'prefix' | 'suffix'> {
  direction?: 'row' | 'column';
  prefix?: JSX.Element;
  suffix?: JSX.Element;
}

export const Item: React.FC<ItemProps> = props => {
  const { prefix, direction = 'row', css = {}, ...restProps } = props;

  if (!React.isValidElement(props.children)) {
    throw new Error('Item children must be a valid react element');
  }
  const { cCss = {}, ...restCProps } = props.children.props;
  const { prefixCss = {}, ...restPrefixProps } = prefix?.props || {};

  return (
    <Box
      as="u-item"
      css={{
        //@ts-ignore
        flexDirection: direction,
        ...(direction === 'row'
          ? flexYCenter
          : { fx: 'flex-start', fy: 'flex-start' }),
        ...css,
      }}
      {...restProps}
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
    </Box>
  );
};
