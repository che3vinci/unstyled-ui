import { ethers } from 'ethers';
import { useCallback, useEffect, useState } from 'react';
import { cyptoDbg } from '../utils';

export const useAccount$ = (
  provider: ethers.providers.JsonRpcProvider | undefined
) => {
  const [account, setAccount] = useState<string | undefined>();

  const updateAccount = useCallback(async () => {
    const accounts = await provider?.send('eth_accounts', []);
    setAccount(accounts[0]);
    return accounts[0];
  }, [provider]);

  useEffect(() => {
    provider?.send('eth_accounts', []).then((accounts: string[]) => {
      setAccount(accounts?.[0]);
    });
    const updateAcc = (accounts: string[]) => {
      cyptoDbg('accountsChanged:', `old is ${account} ,new are`, accounts);
      setAccount(accounts?.[0]);
    };
    //@ts-ignore
    window?.ethereum?.on('accountsChanged', updateAcc);
    return () => {
      //@ts-ignore
      window?.ethereum?.removeListener('accountsChanged', updateAcc);
    };
  }, [account, provider]);

  return [account, updateAccount] as const;
};
