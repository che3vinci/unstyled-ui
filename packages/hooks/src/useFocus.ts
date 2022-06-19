import { useCallback } from 'react';
import { useSwitch } from './useSwitch';

type Option = {
  onFocus: (e: React.FocusEvent<HTMLElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLElement>) => void;
};

export const useFocus = (option?: Option) => {
  const { onFocus: _onFocus, onBlur: _onBlur } = option || {};
  const [focused, on, off] = useSwitch(false);
  const onFocus = useCallback(
    e => {
      on();
      _onFocus && _onFocus(e);
    },
    [_onFocus, on]
  );

  const onBlur = useCallback(
    e => {
      off();
      _onBlur && _onBlur(e);
    },
    [_onBlur, off]
  );

  return {
    focused,
    onFocus,
    onBlur,
  };
};
