import React from 'react';
import { Text } from '.';
import { extractClassNameAndProps } from '../Common';
import { ITextProps } from './Text';

export const SubTitle: React.FC<ITextProps> = props => {
  return <Text as="h2" {...extractClassNameAndProps('c3-subtitle', props)} />;
};
