import { cssProps, ICssPropsWithTheme } from '@styless/css';
import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { notInBlackList } from '.';
import { BaseProps } from '../Common/types';

export type IFixedProps = BaseProps;

const InnerFixed = styled.div.withConfig({
  componentId: 'c3-fixed',
  shouldForwardProp: prop => notInBlackList(prop),
})`
  position: fixed;
  ${(props: ICssPropsWithTheme) => cssProps(props)}
` as React.FC<IFixedProps>;

export const Fixed: React.FC<IFixedProps> = props => {
  return ReactDOM.createPortal(<InnerFixed {...props} />, document.body);
};
