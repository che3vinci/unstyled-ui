import { cssProps } from '@styless/css';
import React from 'react';
import styled from 'styled-components';
import { notInBlackList } from '../';
import { BaseProps } from '../Common';

export type IRelativeProps = BaseProps;
export const Relative = styled.div.withConfig({
  componentId: 'c3-relative',
  shouldForwardProp: prop => notInBlackList(prop),
})<IRelativeProps>`
  position: relative;
  ${props => cssProps(props)}
` as React.FC<IRelativeProps>;
