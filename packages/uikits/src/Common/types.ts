import { ICssProps } from '@c3/css';

export type BaseProps<T = React.HTMLAttributes<HTMLElement>> = ICssProps &
  Omit<
    T,
    'height' | 'width' | 'title' | 'translate' | 'color' | 'direction'
  > & {
    ref?: React.MutableRefObject<unknown>;
  };
