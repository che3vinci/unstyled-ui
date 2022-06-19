window.CSS = {};
import { BigNumber } from 'ethers';
import { makeEthFromDecimal } from '../math';
describe('test cases', () => {
  it('should work ', () => {
    // expect(divEther(1, 2)).toBe('0.5');
    // expect(divEther(1, 1000000000000000)).toBe('0.5');
  });

  it('makeEthfromDecial', () => {
    expect(makeEthFromDecimal('1.23', 4).eq(BigNumber.from(12300))).toBe(true);
    expect(makeEthFromDecimal('123', 4).eq(BigNumber.from(1230000))).toBe(true);
  });
});
