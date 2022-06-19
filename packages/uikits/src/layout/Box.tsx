import { cssProps } from '@c3/css';
import React from 'react';
import styled from 'styled-components';
import { notInBlackList } from '.';
import { BaseProps } from '../Common';

// NOTE:usecase: when there is only one child or there is no children
export type IBoxProps = BaseProps<React.HTMLAttributes<HTMLDivElement>>;

export const Box = styled.div.withConfig({
  componentId: 'c3-box',
  shouldForwardProp: prop => notInBlackList(prop),
})<IBoxProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  ${prop => cssProps(prop)}
` as React.FC<IBoxProps>;
