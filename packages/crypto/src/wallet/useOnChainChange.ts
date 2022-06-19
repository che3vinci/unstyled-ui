import { useCallback, useEffect } from 'react';

export const useOnChainChange = (cb: (chainId: string) => void) => {
  const handleCb = useCallback(
    (chainId: string) => {
      console.log('chain changed');
      cb(chainId);
    },
    [cb]
  );
  useEffect(() => {
    //@ts-ignore
    window?.ethereum?.on('chainChanged', handleCb);
    return () => {
      //@ts-ignore
      window?.ethereum?.removeListener('chainChanged', handleCb);
    };
  }, [handleCb]);
};
