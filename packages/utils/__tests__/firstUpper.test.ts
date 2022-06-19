import { firstUpper } from '../src/string/firstUpper';
describe('test cases', () => {
  it('should work ', () => {
    expect(firstUpper('hello')).toBe('Hello');
  });
});
