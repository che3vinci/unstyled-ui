import { Path } from '../type';
import { Expect, IndexedType, IsEqual, IsSubType } from './../../lang';
describe('test cases', () => {
  it.skip('object type ', () => {
    type x = [
      Expect<IsEqual<object, IndexedType<any>>>,

      Expect<IsSubType<IndexedType<number>, object>>
    ];
    // const k = {} as object;
    // console.log(k['2']);
    // const m = '2';
    // console.log(k[m]);
  });
  it.skip('Path', () => {
    const o = { a: 1, b: '2', c: { a: 2, d: { e: [2] } }, 1: '1' };
    type x = Path<typeof o>;
    const a = [1, 2, 3, 4, 5];
    type k = keyof typeof a;
  });
});
