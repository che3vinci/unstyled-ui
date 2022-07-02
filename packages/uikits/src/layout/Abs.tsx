import { cssProps } from '@c3/css';
import React from 'react';
import styled from 'styled-components';
import { BaseProps } from '../Common';
import { notInBlackList } from '../layout';

export type IAbsProps = BaseProps;
export const Abs = styled.div.withConfig({
  componentId: 'c3-abs',
  shouldForwardProp: props => notInBlackList(props),
})<IAbsProps>`
  position: absolute;
  ${props => cssProps(props)}
` as React.FC<IAbsProps>;
