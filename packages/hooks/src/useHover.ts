import { useCallback, useState } from 'react';

//invoke mouseLeave when leave all children
interface IOption {
  initialValue?: boolean;
  onHover?: () => void;
  onLeave?: () => void;
}

export const useHover = (option?: IOption) => {
  const { initialValue = false, onHover, onLeave } = option || {};
  const [hovered, setHovered] = useState(initialValue);

  const onMouseEnter = useCallback(() => {
    setHovered(true);
    onHover && onHover();
  }, [setHovered, onHover]);

  const onMouseLeave = useCallback(() => {
    setHovered(false);
    onLeave && onLeave();
  }, [onLeave, setHovered]);

  return {
    hovered,
    onMouseEnter,
    onMouseLeave,
  };
};
