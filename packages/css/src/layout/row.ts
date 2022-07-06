import { CSSProperties } from './../types';

export const row = (
  justifyContent: CSSProperties['justifyContent'] = 'flex-start',
  alginItems: CSSProperties['alignItems'] = 'center'
) => ({
  display: 'flex',
  alignItems: alginItems,
  justifyContent: justifyContent,
  flexWrap: 'nowrap',
});
