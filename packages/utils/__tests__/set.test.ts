import { set } from '../src';

describe('test cases', () => {
  it('should work ', () => {
    const obj = { a: { b: 1 } };
    set(obj, 'a.b', 2);
    console.log('obj', obj);
    expect(obj).toEqual({ a: { b: 2 } });
  });
});
