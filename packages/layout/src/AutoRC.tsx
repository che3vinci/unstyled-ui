import { isMobile } from '@unstyled-ui/responsive';
import React from 'react';
import { Col } from './Col';
import { Row } from './Row/Row';
import { BaseProps } from '@unstyled-ui/core';

type IAutoRCProps = BaseProps & {
  fx?:
    | React.CSSProperties['justifyContent']
    | React.CSSProperties['alignItems'];
  fy?:
    | React.CSSProperties['alignItems']
    | React.CSSProperties['justifyContent'];
};
export const AutoRC: React.FC<IAutoRCProps> = props => {
  return isMobile ? <Col {...props} /> : <Row {...props} />;
};
