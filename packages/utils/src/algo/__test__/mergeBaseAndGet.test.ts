import { PlainObject } from '../../lang';
import { CfgObj, mergeBaseAndGet } from './../mergeBaseAndGet';
describe('test cases', () => {
  it('should work ', () => {
    const o: CfgObj<PlainObject, 'weak' | 'focus' | 'hover'> = {
      base: { a: 1 },
      focus: { base: { color: 'red' }, weak: { fontSize: 2 } },
      hover: {
        base: {
          opacity: 0.7,
        },
        primary: {},
      },
    };
    const d = mergeBaseAndGet(o, 'focus.weak');
    expect(d).toEqual({ a: 1, color: 'red', fontSize: 2 });
  });
  it('should work ', () => {
    const o: CfgObj<PlainObject, 'weak' | 'focus' | 'hover'> = {
      base: { a: 1 },
      focus: { base: { color: 'red' }, weak: { fontSize: 2 } },
      hover: {
        base: {
          opacity: 0.7,
        },
        primary: {},
      },
    };
    const d = mergeBaseAndGet(o, 'hover.weak');
    expect(d).toEqual({ a: 1, opacity: 0.7 });
  });
});
