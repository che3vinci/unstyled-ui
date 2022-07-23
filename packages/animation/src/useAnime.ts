import anime from 'animejs';
import { useCallback } from 'react';

export type AnimeOption = Omit<anime.AnimeParams, 'targets'>;
export const useAnime = (
  targets: anime.AnimeParams['targets'],
  from: AnimeOption,
  to: AnimeOption
) => {
  const reset = useCallback(
    (s: AnimeOption) => {
      anime({ targets, ...{ ...s, duration: 0 } });
    },
    [targets]
  );
  const forward = useCallback(() => {
    reset(from);
    return anime({ targets, ...to });
  }, [from, reset, targets, to]);

  const backward = useCallback(() => {
    reset(to);
    return anime({ targets, ...from });
  }, [from, reset, targets, to]);
  return [forward, backward] as const;
};
