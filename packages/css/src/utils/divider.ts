import { CSSProperties } from './../types';

export const divider = (color: CSSProperties['color']) => ({
  '& > *:not(:last-child)': {
    borderBottom: `1px solid ${color}`,
  },
});

export const divider_p = (color: string) => ({
  '& > *:not(:last-child)::after': {
    width: '1px',
    backgroundColor: `${color}`,
    height: '100%',
  },
});
