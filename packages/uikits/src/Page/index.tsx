import React from 'react';
import { BaseProps } from '@unstyled-ui/core';
import { Col } from '@unstyled-ui/layout';

type IPageProps = {
  nav: JSX.Element;
  footer?: JSX.Element;
} & BaseProps;

const Page: React.FC<IPageProps> = ({
  nav,
  children: main,
  footer,
  ...props
}) => {
  return (
    <Col
      css={{ position: 'relative', fx: 'stretch', width: '100%' }}
      {...props}
    >
      {nav}
      {main}
      {footer}
    </Col>
  );
};
export default Page;
