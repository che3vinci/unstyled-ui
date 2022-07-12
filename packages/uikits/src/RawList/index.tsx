import { HVDirection } from '@c3/utils';
import { BaseProps } from '@unstyled-ui/core';
import { Box, rgap, vgap } from '@unstyled-ui/layout';
import React from 'react';

export type IRawListProps = BaseProps<
  React.OlHTMLAttributes<HTMLOListElement>
> & {
  ordered?: boolean;
  hvDirection?: HVDirection;
};
export const RawList: React.FC<IRawListProps> = props => {
  const { css: { gap, ...restCss } = {}, ...restProps } = props;
  return (
    <Box
      as="ul"
      //@ts-ignore
      css={{
        listStyle: 'none',
        ...(props.hvDirection === 'vertical' ? vgap(gap) : rgap(gap)),
        ...restCss,
      }}
      {...restProps}
    />
  );
};
