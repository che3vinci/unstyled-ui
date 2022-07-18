import { CSSProperties } from '@unstyled-ui/core';

export type AnimationObject = {
  animation: CSSProperties['animation'];
  duration: number; //ms
};

// multiple animation take place in order

export const chainedAnimation = (...animations: AnimationObject[]) => {
  return animations.reduce((total, cur, idx) => {
    const delay = animations
      .slice(0, idx)
      .reduce((total, cur) => total + cur.duration, 0);
    return (total += `${total.length > 0 ? ',' : ''}${cur.animation} ${
      cur.duration
    }ms ${delay}ms`);
  }, '');
};
