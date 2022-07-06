import { isMobile } from '@unstyled-ui/css';
import React from 'react';
import { Col } from './Col';
import { Row } from './Row';
import { BaseProps } from '@unstyled-ui/core';

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
