import { cssProps, gap, vgap } from '@c3/css';
import { HVDirection, omit } from '@c3/utils';
import React from 'react';
import styled from 'styled-components';
import { notInBlackList } from '..';
import { BaseProps } from '../Common';

export type IRawListProps = BaseProps<
  React.OlHTMLAttributes<HTMLOListElement>
> & {
  ordered?: boolean;
  hvDirection?: HVDirection;
};

export const RawList = styled.ul.withConfig({
  componentId: 'c3-list',
  shouldForwardProp: prop => notInBlackList(prop),
})<IRawListProps>`
  list-style: none;
  ${props =>
    props.gap &&
    (props.hvDirection === 'vertical' ? vgap(props.gap) : gap(props.gap))}
  ${props => cssProps(omit(props, ['gap']))}
` as React.FC<IRawListProps>;
