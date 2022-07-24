import React from 'react';
import { BaseProps } from '@unstyled-ui/core';
import { Col } from '@unstyled-ui/layout';

type PageProps = {
  nav: JSX.Element;
  footer?: JSX.Element;
} & BaseProps;

export const Page: React.FC<PageProps> = ({
  nav,
  children: main,
  footer,
  ...props
}) => {
  return (
    <Col
      css={{
        position: 'relative',
        fx: 'stretch',
        width: '100%',
      }}
      {...props}
    >
      {nav}
      {main}
      {footer}
    </Col>
  );
};
