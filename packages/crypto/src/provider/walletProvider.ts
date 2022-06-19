import detectEthereumProvider from '@metamask/detect-provider';
import { ethers } from 'ethers';
import { useCallback, useEffect, useState } from 'react';
import { useOnChainChange } from '../wallet';

export const getWalletProvider = async () => {
  const injectedProvider: any = await detectEthereumProvider();
  if (injectedProvider) {
    return new ethers.providers.Web3Provider(injectedProvider);
  }
  return undefined;
};

//FIXME:there is infinite loop using useAsyncState.WHY
export const useWalletProvider = () => {
  const [provider, setProvider] = useState<ethers.providers.JsonRpcProvider>();

  const get = useCallback(async () => {
    getWalletProvider().then(x => x && setProvider(x));
  }, []);

  useOnChainChange(get);
  useEffect(() => {
    get();
  }, [get]);
  return provider;
};
