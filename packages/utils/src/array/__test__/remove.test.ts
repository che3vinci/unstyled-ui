import { remove } from '../remove';

describe('test cases', () => {
  it('should work ', () => {
    const a = [1, 2, 3, 'a'];
    expect(remove(a, 1)).toEqual([2, 3, 4]);
    expect(remove(a, 1)).toEqual([2, 3, 4]);
  });
});
