import { useEffect } from 'react';

export const useMount = (cb: () => void, clean?: () => void) => {
  useEffect(() => {
    cb();
    return () => clean && clean();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
