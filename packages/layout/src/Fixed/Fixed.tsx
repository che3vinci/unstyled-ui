import React from 'react';
import ReactDOM from 'react-dom';
import { BaseProps } from '@unstyled-ui/core';
import { Box } from '../Box';

export type IFixedProps = BaseProps;

export const Fixed: React.FC<IFixedProps> = props => {
  return ReactDOM.createPortal(
    //@ts-ignore
    <Box css={{ position: 'fixed' }} {...props} />,
    document.body
  );
};
