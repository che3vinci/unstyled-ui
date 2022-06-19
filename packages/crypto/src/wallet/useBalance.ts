import { BigNumber, ethers } from 'ethers';
import { useCallback, useEffect, useState } from 'react';

export const useBalance$ = (
  account: string | undefined,
  provider: ethers.providers.JsonRpcProvider | undefined
) => {
  const [balance, setBalance] = useState<BigNumber>();

  const updateBalance = useCallback(async () => {
    const balance =
      (account && (await provider?.getBalance(account))) || BigNumber.from(0);
    setBalance(balance);
  }, [account, provider]);

  // return useAsyncState<BigNumber>(updateBalance);
  useEffect(() => {
    updateBalance();
  }, [updateBalance]);

  return [balance, updateBalance] as const;
};
