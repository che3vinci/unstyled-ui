import { assert, ID, IDable, isEqual, isNullish } from '@c3/utils';
import { useCallback } from 'react';

type SwitchOnFn = (id: ID) => void;

//keep only on element is on
export const useExclusive = <T extends IDable>(
  data: T[],
  key: keyof T,
  update: (data: T[], prev: T[]) => void
): SwitchOnFn => {
  assert(!isNullish(data), 'invalid args');
  return useCallback(
    (id: ID) => {
      assert(!isNullish(id), `invalide id ${id}`);
      const newData = data.map(e => {
        if (e.id === id) {
          return { ...e, [key]: true };
        }
        return { ...e, [key]: false };
      });
      if (!isEqual(newData, data)) {
        update(newData, data);
      }
    },
    [data, key, update]
  );
};
