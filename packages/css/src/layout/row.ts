import type { CSSProperties } from 'react';
import { CSSObject } from 'styled-components';

export const row = (
  justifyContent: CSSProperties['justifyContent'] = 'flex-start',
  alginItems: CSSProperties['alignItems'] = 'center'
): CSSObject => ({
  display: 'flex',
  alignItems: alginItems,
  justifyContent: justifyContent,
  flexWrap: 'nowrap',
});
