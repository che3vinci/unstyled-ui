import { assert } from '.';

export const isLastPage = (
  total: number,
  pageSize: number,
  curPageNo: number
) => {
  assert(total >= 0 && pageSize > 0 && curPageNo >= 1, 'invalid args');
  return curPageNo >= Math.ceil(total / pageSize);
};

export const getStartNoAtPage = (pageNo: number, pageSize: number) =>
  (pageNo - 1) * pageSize;

export const getTotalPage = (total: number, pageSize: number) =>
  Math.ceil(total / pageSize);
