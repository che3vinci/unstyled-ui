import { CSSProperties } from '@unstyled-ui/css';

export const col = (
  fx: CSSProperties['alignItems'] = 'center',
  fy: CSSProperties['justifyContent'] = 'flex-start'
): CSSProperties => {
  return {
    display: 'flex',
    flexDirection: 'column',
    alignItems: fx,
    justifyContent: fy,
  };
};