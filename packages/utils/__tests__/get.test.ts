import { get } from '../src';

describe('test cases', () => {
  it('get should work ', () => {
    expect(get({ a: { b: { c: 1 } } }, 'a.b.c')).toBe(1);
    expect(get({ a: [1, 3, { c: 3 }] }, 'a.2.c')).toBe(3);
  });
});
