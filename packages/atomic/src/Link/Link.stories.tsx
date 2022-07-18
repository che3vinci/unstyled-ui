import React from 'react';
import { Link } from './Link';
export default {
  component: Link,
  title: 'atomic/Link',
};

export const Default = () => (
  <Link to="https://www.baidu.com" target="_blank">
    clickme
  </Link>
);
