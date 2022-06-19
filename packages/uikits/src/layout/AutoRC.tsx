import { isMobile } from '@c3/css';
import React from 'react';
import { BaseProps } from '../Common';
import { Col } from './Col';
import { Row } from './Row';

interface IAutoRCProps extends BaseProps {
  fx?:
    | React.CSSProperties['justifyContent']
    | React.CSSProperties['alignItems'];
  fy?:
    | React.CSSProperties['alignItems']
    | React.CSSProperties['justifyContent'];
}
export const AutoRC: React.FC<IAutoRCProps> = ({ children, ...props }) => {
  return isMobile ? (
    <Col {...props}>{children}</Col>
  ) : (
    <Row {...props}>{children}</Row>
  );
};
