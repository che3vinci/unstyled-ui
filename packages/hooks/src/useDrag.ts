import { useCallback } from 'react';
import { useSwitch } from './useSwitch';
export const useDrag = (drag: (e: React.MouseEvent) => void) => {
  const [dragging, on, off] = useSwitch();
  const onMouseDown = useCallback(() => {
    console.log('onMouseDown');
    on();
  }, [on]);
  const onMouseMove = useCallback(
    (e: React.MouseEvent<Element>) => {
      if (dragging) {
        drag(e);
      }
    },
    [drag, dragging]
  );
  const onMouseUp = useCallback(() => {
    off();
  }, [off]);
  return [dragging, { onMouseDown, onMouseMove, onMouseUp }];
};
