import { cssProps, nCol, ResponsiveInputValueType } from '@styless/css';
import React from 'react';
import styled from 'styled-components';
import { notInBlackList } from '.';
import { BaseProps } from '../Common';

export type IGridProps = BaseProps & {
  cols: ResponsiveInputValueType;
  cellWidth: ResponsiveInputValueType;
  cellHeight: ResponsiveInputValueType;
  rgap: ResponsiveInputValueType;
  cgap: ResponsiveInputValueType;
};
export const Grid = styled.div.withConfig({
  componentId: 'c3-grid',
  shouldForwardProp: prop => notInBlackList(prop),
})<IGridProps>`
  display: grid;
  ${props =>
    nCol(props.cols, props.cellWidth, props.cellHeight, props.rgap, props.cgap)}
  ${props => cssProps(props)}
` as React.FC<IGridProps>;
