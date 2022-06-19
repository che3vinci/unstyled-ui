import { queryAll } from '@c3/dom';
import { noop } from '@c3/utils';
import React, { useCallback } from 'react';
import ReactDOM from 'react-dom';

export const useInjectNode = (container: string | Element) => {
  return useCallback(
    (node: React.ReactElement) => {
      const _container =
        typeof container === 'string' ? queryAll(container) : container;
      if (
        !_container ||
        (_container instanceof NodeList && _container.length === 0)
      ) {
        throw new Error('dom node does not exist');
      }
      if (_container instanceof NodeList) {
        // eslint-disable-next-line react/no-render-return-value
        _container.forEach(e => ReactDOM.render(React.cloneElement(node), e));
        return;
      }
      ReactDOM.render(node, _container);
    },
    [container]
  );
};
// export const
export const useInjectNodeBefore = <T>(
  injectedNode: React.ReactElement<T>,
  nextNode: string | Element
) => {
  noop();
};
export const useInjectNodeAfter = <T>(
  injectedNode: React.ReactElement<T>,
  prevNode: string | Element
) => {
  noop();
};
