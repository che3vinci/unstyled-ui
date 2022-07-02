import { HVDirection } from '@c3/utils';
import React from 'react';
import { BaseProps } from '../Common';
import { Col } from '../layout';
import { Row } from '../layout/Row';

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
    <Layout fx={fx} fy={fy} gap="1em" {...props}>
      <icon.type flexShrink={0} width="auto" {...icon.props}></icon.type>
      <text.type rows={1} flexGrow="1" {...text.props}></text.type>
    </Layout>
  );
};
