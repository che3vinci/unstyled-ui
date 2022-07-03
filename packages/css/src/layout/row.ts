import type { CSSProperties } from 'react';

export const row = (
  justifyContent: CSSProperties['justifyContent'] = 'flex-start',
  alginItems: CSSProperties['alignItems'] = 'center'
) => ({
  display: 'flex',
  alignItems: alginItems,
  justifyContent: justifyContent,
  flexWrap: 'nowrap',
});
