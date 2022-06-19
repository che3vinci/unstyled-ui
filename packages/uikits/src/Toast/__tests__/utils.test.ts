import { getAnimiation } from '../utils';

describe('test cases', () => {
  it('should work ', () => {
    const x = getAnimiation(
      { animation: 'toast-start', duration: 500 },
      { animation: 'toast-show', duration: 1000 },
      { animation: 'toast-end', duration: 500 }
    );
    expect(x).toBe(
      'toast-start 500ms 0ms,toast-show 1000ms 500ms,toast-end 500ms 1500ms'
    );
    // expect(getDefaultAnimation(1000)).toBe()
  });
});
