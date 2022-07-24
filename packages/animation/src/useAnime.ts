import { toArray } from '@c3/utils';
import anime from 'animejs';
import { useCallback } from 'react';

export type _AnimeOption = Omit<anime.AnimeParams, 'targets'>;
export type AnimeOption = _AnimeOption | (() => _AnimeOption);
export type useAnimeOption = {
  targets: anime.AnimeParams['targets'] | (() => anime.AnimeParams['targets']);
  from: AnimeOption;
  to: AnimeOption;
};

export const useAnime = (options: useAnimeOption | useAnimeOption[]) => {
  const _options = toArray(options);

  const get = useCallback((e: any) => (typeof e === 'function' ? e() : e), []);

  const reset = useCallback(
    (targets, s: AnimeOption) => {
      anime({
        targets: get(targets),
        ...{ ...get(s), duration: 0 },
      });
    },
    [get]
  );
  const forward = useCallback(() => {
    _options.forEach(({ targets, from, to }) => {
      reset(targets, from);
      return anime({
        targets: get(targets),
        ...get(to),
      });
    });
  }, [_options, get, reset]);

  const backward = useCallback(() => {
    _options.forEach(({ targets, from, to }) => {
      reset(targets, to);
      return anime({
        targets: get(targets),
        ...get(from),
      });
    });
  }, [_options, get, reset]);
  return [forward, backward] as const;
};
