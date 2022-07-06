import { ICssProps } from '@unstyled-ui/css';

export type BaseProps<T = React.HTMLAttributes<HTMLElement>> = ICssProps &
  Omit<
    T,
    'height' | 'width' | 'title' | 'translate' | 'color' | 'direction'
  > & {
    ref?: React.MutableRefObject<unknown>;
  };
