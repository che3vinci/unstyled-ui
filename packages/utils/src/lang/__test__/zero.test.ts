import { EmptyStringZero } from '../EmptyStringZero';

describe('test cases', () => {
  it('should work ', () => {
    expect(EmptyStringZero.MAX_VALUE).toBe(Number.MAX_VALUE);
    expect(`${new EmptyStringZero()}`).toBe('');
    expect(+new EmptyStringZero() + 1).toBe(1);

    const n = new EmptyStringZero();
    //@ts-ignore
    expect(n + 1).toBe(1);
    //@ts-ignore
    expect(n * 1).toBe(0);
    expect(n.toFixed(2)).toBe('0.00');
  });
});
