import { useState } from 'react';

export function useToggle(initialValue: boolean): [boolean, () => void] {
  const [state, setState] = useState(initialValue);
  return [state, () => setState(s => !s)];
}
