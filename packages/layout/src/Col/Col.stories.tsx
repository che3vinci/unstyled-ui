import { Col } from './Col';
import React from 'react';
export default {
  title: 'layout/Col',
  component: Col,
};

export const Col1 = () => {
  return (
    <Col>
      <div>1</div>
      <div>2</div>
      <div>2</div>
      <div>2</div>
    </Col>
  );
};
