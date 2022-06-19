import { getTarget, isTouchBottom } from '@c3/dom';
import { useCallback, useRef } from 'react';
import { useSwitch } from './useSwitch';

export const useInfiniteScroll = <T>(
  data: T[],
  startPageNo: number,
  maxPageNo: number,
  load: (pageNo: number) => Promise<T[]>,
  updateList: (list: T[]) => void
): [(e: Event) => Promise<void>, boolean, boolean] => {
  const [loading, on, off] = useSwitch(false);
  const [hasNoMoreData, turnOnNoMoreData] = useSwitch(false);
  const pageNoRef = useRef(startPageNo);
  const onScroll = useCallback(
    async (e: Event) => {
      if (pageNoRef.current > maxPageNo) {
        turnOnNoMoreData();
        return;
      }

      if (isTouchBottom(getTarget(e)!)) {
        if (loading) {
          return;
        }
        on();
        const newData = await load(pageNoRef.current);
        pageNoRef.current++;
        off();
        console.log('newData=', newData);
        console.log('data=', data);
        updateList([...data, ...newData]);
      }
    },
    [data, load, loading, maxPageNo, off, on, turnOnNoMoreData, updateList]
  );

  return [onScroll, loading, hasNoMoreData];
};
