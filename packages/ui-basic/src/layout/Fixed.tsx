import React from 'react';
import ReactDOM from 'react-dom';
import { styled, BaseProps } from '../stitches';
import { Box } from './Box';

export type IFixedProps = BaseProps;


const InnerFixed = styled(Box, {
  position: 'fixed'
});

export const Fixed: React.FC<IFixedProps> = props => {
  return ReactDOM.createPortal(<InnerFixed {...props} />, document.body);
};
