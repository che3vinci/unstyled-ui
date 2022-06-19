import { ID, IDable } from '@c3/utils';
import { useCallback, useState } from 'react';

//allSelected
export const useIndeterminate = <T extends IDable>(
  initialElements: T[],
  statusKey: keyof T
): {
  indeterminated: boolean;
  check: (id: ID) => void;
  uncheck: (id: ID) => void;
} => {
  const [elements, setElements] = useState(initialElements);
  const check = useCallback(
    (id: ID) => {
      setElements(
        elements.map(e => {
          if (e.id === id) {
            return { ...e, [statusKey]: true };
          }
          return e;
        })
      );
    },
    [elements, statusKey]
  );
  const uncheck = useCallback(
    (id: ID) => {
      setElements(
        elements.map(e => {
          if (e.id === id) {
            return { ...e, [statusKey]: false };
          }
          return e;
        })
      );
    },
    [elements, statusKey]
  );
  return {
    indeterminated: !elements.every(e => !!e[statusKey]),
    check,
    uncheck,
  };
};
