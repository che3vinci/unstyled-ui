import { addEventListener } from '@c3/dom';
import { useEffect, useState } from 'react';
export interface ICursorState {
  screenX: number;
  screenY: number;
  clientX: number;
  clientY: number;
  pageX: number;
  pageY: number;
}

const useMouse = () => {
  const [state, setState] = useState<ICursorState>({} as ICursorState);

  useEffect(() => {
    return addEventListener(document, 'mousemove', e => {
      const { screenX, screenY, clientX, clientY, pageX, pageY } =
        e as MouseEvent;
      setState({ screenX, screenY, clientX, clientY, pageX, pageY });
    });
  }, []);

  return state;
};
export default useMouse;
