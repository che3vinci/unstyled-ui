import { col, cssProps, vgap } from '@styless/css';
import { omit } from '@c3/utils';
import React from 'react';
import styled, { css } from 'styled-components';
import { notInBlackList } from '.';
import { BaseProps } from '../Common';

export type IColProps = BaseProps & {
  fx?: React.CSSProperties['alignItems'];
  fy?: React.CSSProperties['justifyContent'];
};

export const Col = styled.div.withConfig({
  componentId: 'c3-col',
  shouldForwardProp: prop => notInBlackList(prop),
})<IColProps>`
  ${col()}

  ${props => cssProps(omit(props, ['gap']))}
  ${props => props.gap && vgap(props.gap)}
  ${props =>
    props.fx &&
    css`
      align-items: ${props.fx};
    `}
  ${props =>
    props.fy &&
    css`
      justify-content: ${props.fy};
    `}
` as React.FC<IColProps>;
