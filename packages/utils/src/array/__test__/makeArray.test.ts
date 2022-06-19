import { makeArray } from '../makeArray';

describe('test cases', () => {
  it('should work ', () => {
    const arr = makeArray(4, {});
    expect(arr[0] === arr[1]).toBe(false);
  });
});
