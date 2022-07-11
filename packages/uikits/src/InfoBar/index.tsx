import { HVDirection } from '@c3/utils';
import React from 'react';
import { BaseProps } from '@unstyled-ui/core';
import { Row, Col } from '@unstyled-ui/layout';

export interface IInfoProps extends BaseProps {
  direction?: HVDirection;
  text: React.ReactElement;
  icon: React.ReactElement;
}

export const InfoBar: React.FC<IInfoProps> = ({
  text,
  direction = 'horizontal',
  icon,
  ...props
}) => {
  const Layout = direction === 'horizontal' ? Row : Col;
  const fx = direction == 'horizontal' ? 'flex-start' : 'center';
  const fy = direction == 'horizontal' ? 'center' : 'flex-start';
  return (
    <Layout css={{ fx, fy, gap: '1em' }} {...props}>
      <icon.type
        css={{ flexShrink: 0, width: 'auto' }}
        {...icon.props}
      ></icon.type>
      <text.type css={{ rows: 1, flexGrow: '1' }} {...text.props}></text.type>
    </Layout>
  );
};
