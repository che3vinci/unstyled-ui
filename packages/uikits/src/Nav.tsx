import { Row } from '@unstyled-ui/layout';
import { BaseProps } from '@unstyled-ui/core';
import React from 'react';

export const Nav: React.FC<BaseProps> = props => {
  return <Row as="nav" {...props}></Row>;
};
