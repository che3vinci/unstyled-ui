import React from 'react';
import { BaseProps, RCSSProperties } from '@unstyled-ui/core';
import { Box } from '../Box';
import { nCol } from './grid.utils';
export type GridProps = {
  cols: number | number[];
  cellWidth: RCSSProperties['width'];
  cellHeight: RCSSProperties['height'];
  rowGap: RCSSProperties['rowGap'];
  colGap: RCSSProperties['columnGap'];
} & BaseProps;

export const Grid: React.FC<GridProps> = props => {
  const { css, cols, cellWidth, cellHeight, colGap, rowGap, ...restProps } =
    props;
  return (
    <Box
      //@ts-ignore
      css={{
        ...nCol(cols, cellWidth, cellHeight, rowGap, colGap),
        ...css,
      }}
      {...restProps}
    />
  );
};
