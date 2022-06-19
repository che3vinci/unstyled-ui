import { getTotalPage, IAPI, ndbg, RawResBody, ReqParameter } from '@c3/utils';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useApi } from './useApi';
import { useSwitch } from './useSwitch';

export type PaginationData<T> = {
  total: number;
  list: T[];
};

export const usePagination = <
  T,
  _RawReqParameter extends { pageNo: number; pageSize: number },
  _ReqParameter extends ReqParameter,
  _RawResBody extends RawResBody,
  _ResBody extends PaginationData<T>
>(
  api: IAPI<_RawReqParameter, _ReqParameter, _RawResBody, _ResBody>
) => {
  const [pageNo, setPageNo] = useState(1);
  const [loading, on, off] = useSwitch(false);
  const [pageData, fetch] = useApi(api);
  const [totalData, setTotalData] = useState<PaginationData<T>>({
    total: 0,
    list: [],
  });

  const totalPage = useMemo(() => {
    return getTotalPage(
      pageData.total || 0,
      api.__ctx?.rawReqParameter?.pageSize || 1
    );
  }, [api.__ctx?.rawReqParameter?.pageSize, pageData]);

  useEffect(() => {
    setTotalData(data => ({
      total: pageData.total,
      list: [...data.list, ...pageData.list],
    }));
  }, [pageData.list, pageData.total]);

  const loadPage = useCallback(
    async (rawReqParameter: Omit<_RawReqParameter, 'pageNo'>) => {
      if (pageNo > 1 && pageNo > totalPage) {
        ndbg(
          `@network/pagination:${api.url}`,
          `pageNo:${pageNo}>totalPage:${totalPage}`
        );
        return;
      }
      on();
      //@ts-ignore
      await fetch({ ...rawReqParameter, pageNo });

      off();
      setPageNo(pn => pn + 1);
    },
    [pageNo, totalPage, on, fetch, off, api.url]
  );
  const updateList = useCallback((list: T[]) => {
    setTotalData(data => ({ total: data.total, list }));
  }, []);
  ndbg(`@network/pagination/${api.url}/`, {
    pageNo: pageNo - 1,
    curLength: totalData.list.length,
    data: totalData,
    totalPage: totalPage,
  });
  return [totalData, loadPage, updateList, loading] as const;
};
