import { isDecimal, isInteger } from '../src';

describe('test cases', () => {
  it('isInteger ', () => {
    expect(isInteger(2)).toBe(true);
    expect(isInteger(2.1)).toBe(false);
    expect(isDecimal(2.1)).toBe(true);
    expect(isDecimal(2)).toBe(false);
    //??? TODO:
    expect(isDecimal(2.0)).toBe(false);
  });
});
