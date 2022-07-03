import { nCol } from '@c3/css';
import * as CSS from 'csstype';
import React from 'react';
import { BaseProps } from '../stitches';
import { Box } from './Box';
export type GridProps = BaseProps & {
  cols: number | number[];
  cellWidth: CSS.Properties['width'] | CSS.Properties['width'][];
  cellHeight: CSS.Properties['height'] | CSS.Properties['height'][];
  rowGap: CSS.Properties['rowGap'] | CSS.Properties['rowGap'][];
  colGap: CSS.Properties['columnGap'] | CSS.Properties['columnGap'][];
};

export const Grid: React.FC<GridProps> = props => {
  const { css, cols, cellWidth, cellHeight, colGap, rowGap, ...restProps } = props;
  return (
    <Box
      css={{
        ...nCol(cols, cellWidth, cellHeight, rowGap, colGap),
        ...css
      }}
      {...restProps}
    />
  );
};
