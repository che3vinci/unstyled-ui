import { cssProps, gap, row } from '@styless/css';
import { omit } from '@c3/utils';
import React from 'react';
import styled, { css } from 'styled-components';
import { notInBlackList } from '.';
import { BaseProps } from '../Common';

export interface IRowProps extends BaseProps {
  fx?: React.CSSProperties['justifyContent'];
  fy?: React.CSSProperties['alignItems'];
}

export const Row = styled.div.withConfig<IRowProps>({
  componentId: 'c3-row',
  shouldForwardProp: prop => notInBlackList(prop),
})`
  ${row()}

  ${props => cssProps(omit(props, ['gap']))}
  ${props => props.gap && gap(props.gap)}
  ${props =>
    props.fx &&
    css`
      justify-content: ${props.fx};
    `}
  ${props =>
    props.fy &&
    css`
      align-items: ${props.fy};
    `}
` as React.FC<IRowProps>;
