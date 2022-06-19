import { getTotalPage } from '../src';

describe('test cases', () => {
  it('should work ', () => {
    expect(getTotalPage(100, 10)).toBe(10);
    expect(getTotalPage(101, 10)).toBe(11);
    expect(getTotalPage(99, 10)).toBe(10);
  });
});
