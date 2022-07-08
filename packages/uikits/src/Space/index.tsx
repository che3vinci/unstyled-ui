import React from 'react';
import { Col } from '@unstyled-ui/layout';
import { BaseProps } from '@unstyled-ui/core';

export const Space: React.FC<BaseProps> = props => {
  return <Col {...props}></Col>;
};
