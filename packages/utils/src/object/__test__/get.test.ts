import { set } from './../get';
describe('test cases', () => {
  it('should work ', () => {
    const o = { a: { b: 2 } };
    set(o, 'a.b', 3);
    expect(o['a']['b']).toBe(3);
  });
  it('set ', () => {
    const o = [{ a: 3 }, { b: 3 }];
    set(o, '0.a', 1);
    expect(o['0']['a']).toBe(1);
  });
});
