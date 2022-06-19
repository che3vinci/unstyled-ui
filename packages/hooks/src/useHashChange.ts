import { addEventListener } from '@c3/dom';
import { useCallback, useEffect } from 'react';
import { useForceUpdate } from './useForceUpdate';
type Fn = (hash: string) => void;

export const getHash = () => {
  const hash: string = window.location.hash;
  if (hash.length === 0) {
    return '';
  }
  return hash.slice(1);
};
export const useHashChange = (onChange: Fn): [string, Fn] => {
  const forceUpdate = useForceUpdate();
  useEffect(() => {
    const remove = addEventListener(window, 'hashchange', () => {
      onChange(getHash());
      forceUpdate();
    });
    return () => remove();
  }, [forceUpdate, onChange]);
  return [
    getHash(),
    useCallback((hash: string) => {
      window.location.hash = hash;
    }, []),
  ];
};
