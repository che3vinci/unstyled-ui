import { useCallback, useEffect, useState } from 'react';

export type GetDataFn<T> = (...args: any[]) => Promise<T>;

export const useAsyncState = <T>(
  getData: GetDataFn<T>,
  ...getDataInitialArgs: any[]
) => {
  const [data, setData] = useState<T | undefined>(undefined);

  const updateData = useCallback(
    async (...args: any[]) => {
      const data = await getData(...args);
      console.log('useAsyncState,newData', data);
      setData(data);
      return data;
    },
    [getData]
  );

  useEffect(() => {
    updateData(...getDataInitialArgs);
  }, [getDataInitialArgs, updateData]);

  return [data, updateData] as const;
};
