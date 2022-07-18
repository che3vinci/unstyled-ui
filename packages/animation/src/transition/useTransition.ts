import type { CSSProperties, Transition } from '@unstyled-ui/core';
import { useCallback, useMemo, useState } from 'react';

export const useTransition = (
  from: CSSProperties,
  to: CSSProperties,
  transi: Transition | CSSProperties['transition']
): readonly [CSSProperties, () => void, () => void] => {
  const _transi = useMemo(
    () => (typeof transi === 'string' ? { transition: transi } : transi),
    [transi]
  );
  const [cssState, setCssState] = useState<CSSProperties>({
    ...from,
    ..._transi,
  });

  const forward = useCallback(
    () => setCssState((x: CSSProperties) => ({ ...x, ...to })),
    [to]
  );

  const backward = useCallback(
    () => setCssState((x: CSSProperties) => ({ ...x, ...from })),
    [from]
  );

  return [cssState, forward, backward] as const;
};
