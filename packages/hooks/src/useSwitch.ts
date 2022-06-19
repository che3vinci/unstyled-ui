import { useCallback, useState } from 'react';

type Fn = () => void;
export function useSwitch(initialValue = false): [boolean, Fn, Fn] {
  const [state, setState] = useState(initialValue);
  const switchOn = useCallback(() => setState(true), []);
  const switchOff = useCallback(() => setState(false), []);
  return [state, switchOn, switchOff];
}

export const useBoolean = useSwitch;
