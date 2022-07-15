import React from 'react';
import classnames from 'classnames';

import { TextProps, Text } from './Text';

export const Title: React.FC<TextProps> = props => {
  const { className, ...restProps } = props;
  return <Text as="h1" className={classnames('uu-title', className)} {...restProps} />;
};

export const SubTitle: React.FC<TextProps> = props => {
  const { className, ...restProps } = props;
  return <Text as="h2" className={classnames('uu-subtitle', className)} {...restProps} />;
};

export const Description: React.FC<TextProps> = props => {
  const { className, ...restProps } = props;
  return <Text as="p" className={classnames('uu-description', className)} {...restProps} />;
};
