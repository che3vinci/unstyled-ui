import type { HVDirection, URL } from '@c3/utils';
import React from 'react';
import { BaseProps, CSSProperties } from '@unstyled-ui/core';
import { Row, Col, Box, flexYCenter } from '@unstyled-ui/layout';
import { Image, Text } from '@unstyled-ui/atomic';

export interface TextItemProps extends BaseProps {
  direction?: 'row' | 'column';
  text: string;
  icon: URL;
}

export const TextItem: React.FC<TextItemProps> = ({
  direction = 'row',
  text,
  icon,
  ...props
}) => {
  const { css = {}, ...restProps } = props;
  return (
    <Box
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
      <Image
        src={icon}
        css={{ flexShrink: 0, width: 'auto' }}
        className="uu-icon"
      />
      <Text css={{ rows: 1, flexGrow: 1 }} className="uu-text">
        {text}
      </Text>
    </Box>
  );
};
