import { cdbg } from '@c3/utils';
import { useEffect, useRef } from 'react';
import { useComponentName } from './useComponentName';

export type IProps = Record<string, unknown>;
const ddbg = (...args: any[]) => cdbg(...args)('@useDebug');

export const useDebug = (
  props: IProps,
  component: React.FunctionComponent<any>
) => {
  const componentName = useComponentName(component);
  const prevProps = useRef<IProps>({});
  useEffect(() => {
    ddbg('@useDebug/mounted:', componentName);
    return () => {
      ddbg('@useDebug/unmounted:', componentName);
    };
  }, [componentName]);

  useEffect(() => {
    ddbg('@useDebug/rerender:', componentName);
    if (prevProps.current) {
      const allKeys = Object.keys({ ...prevProps.current, ...props });
      const changedProps: IProps = {};

      allKeys.forEach(key => {
        if (prevProps.current[key] !== props[key]) {
          changedProps[key] = {
            from: prevProps.current[key],
            to: props[key],
          };
        }
      });

      if (Object.keys(changedProps).length) {
        ddbg('@useDebug/changed:', componentName, changedProps);
      }
    }

    prevProps.current = props;
  });
};
