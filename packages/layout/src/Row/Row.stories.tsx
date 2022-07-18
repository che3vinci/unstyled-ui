import { Row } from './Row';
import React from 'react';

export default {
  title: 'layout/Row',
  component: Row,
};

export const Row1 = () => {
  return (
    <Row>
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
    </Row>
  );
};
