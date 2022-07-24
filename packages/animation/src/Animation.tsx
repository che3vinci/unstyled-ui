import React from 'react';
import anime from 'animejs';
import { useVisible } from '@c3/hooks';

export type AnimationProps = {
  entering: anime.AnimeParams | anime.AnimeParams[];
  exiting: anime.AnimeParams | anime.AnimeParams[];
};

//way to trigger visible:
// 1. existed already and enter the viewport
// 2. existed already and  property 'visibility' changed to 'visible'
// 2. not existed yet and just created and mounted
export const Animation: React.FC<AnimationProps> = props => {
  const { entering, exiting, ...restProps } = props;
  // const [] = useVisible();
  return (
    <div>
      <h1>Animation</h1>
    </div>
  );
};
