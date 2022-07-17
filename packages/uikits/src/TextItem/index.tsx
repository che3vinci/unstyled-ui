import type { URL } from '@c3/utils';
import { Image, Text } from '@unstyled-ui/atomic';
import { BaseProps } from '@unstyled-ui/core';
import { Box, flexYCenter } from '@unstyled-ui/layout';
import classnames from 'classnames';
import React, { useMemo } from 'react';

export interface TextItemProps extends BaseProps {
  direction?: 'row' | 'column';
  text: string | JSX.Element;
  icon: URL | JSX.Element;
}

export const TextItem: React.FC<TextItemProps> = props => {
  const { icon, text, direction, css = {}, ...restProps } = props;
  const Icon = useMemo(
    () => (typeof icon === 'string' ? <Image src={icon} /> : icon),
    [icon]
  );
  const _Text = useMemo(
    () => (typeof text === 'string' ? <Text>{text}</Text> : text),
    [text]
  );
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
      {
        <Icon.type
          {...Icon.props}
          css={{ flexShrink: 0, width: 'auto', ...Icon.props.css }}
          className={classnames('uu-icon', Icon.props.className)}
        />
      }
      <_Text.type
        {..._Text.props}
        css={{ rows: 1, flexGrow: 1, ..._Text.props.css }}
        className={classnames('uu-text', _Text.props.className)}
      />
    </Box>
  );
};
