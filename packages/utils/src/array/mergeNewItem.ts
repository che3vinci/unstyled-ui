import { IDable } from '../lang';

export const mergeNewItem = <T extends IDable>(
  origin: T[],
  newArr: T[]
): T[] => {
  const retArr = [...origin];
  newArr.forEach(e => {
    if (!retArr.some(k => k.id === e.id)) {
      retArr.push(e);
    }
  });
  return retArr;
};
