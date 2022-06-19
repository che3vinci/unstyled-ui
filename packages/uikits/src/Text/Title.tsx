import React from 'react';
import { extractClassNameAndProps } from '../Common';
import { ITextProps, Text } from './Text';

export const Title: React.FC<ITextProps> = props => {
  return <Text as="h1" {...extractClassNameAndProps('c3-title', props)} />;
};
