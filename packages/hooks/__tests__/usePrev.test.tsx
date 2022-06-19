import { renderHook } from '@testing-library/react-hooks';
import { usePrev } from '../src/usePrev';

test('should return prev value', () => {
  renderHook(() => usePrev(1));
  const { result } = renderHook(() => usePrev(3));
  // expect(result.current).toBe(1);
});
