import React from 'react';
import { BaseProps } from '../Common';
import { Col } from '../layout/Col';

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
    <Col position="relative" fx="stretch" width="100%" {...props}>
      {nav}
      {main}
      {footer}
    </Col>
  );
};
export default Page;
