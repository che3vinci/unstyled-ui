//@ts-ignore
window.matchMedia = function () {
  return { matches: [] };
};
import { rcss } from '..';

describe('test cases', () => {
  it('should work ', () => {
    const res = rcss({ margin: 10 });
    console.log(res);
    expect(res.includes('vw')).toBe(true);
  });
  it('Not length number property ', () => {
    const res = rcss({ fontWeight: 700 });
    console.log(res);
    expect(res.includes('vw')).toBe(false);
    expect(res.includes('700')).toBe(true);
  });
});
