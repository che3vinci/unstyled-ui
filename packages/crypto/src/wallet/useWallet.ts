import { toHexString } from '@c3/utils';
import { useCallback } from 'react';
import { Chain, toHexChain } from '../network/chain';
import { useWalletProvider } from './../provider/index';
import { useAccount$ } from './useAccount';
import { useBalance$ } from './useBalance';

export const useWallet_ = (): any => {
  const provider = useWalletProvider();

  const [account] = useAccount$(provider);

  const addNetwork = useCallback(
    async (chain: Chain) => {
      return provider?.send('wallet_addEthereumChain', [toHexChain(chain)]);
    },
    [provider]
  );

  const switchNetwork = useCallback(
    async (chain: Chain) => {
      try {
        return await provider?.send('wallet_switchEthereumChain', [
          { chainId: toHexString(chain.chainId) },
        ]);
      } catch (e: any) {
        if (e.code === 4902) {
          return addNetwork(chain);
        }
        throw e;
      }
    },
    [addNetwork, provider]
  );

  const connect = useCallback(async () => {
    await provider?.send('eth_requestAccounts', []);
  }, [provider]);
  const [balance, updateBalance] = useBalance$(account, provider);

  // useEffect(() => {
  //   provider?.on('chainChanged', handleChainChanged);
  //   return () => {
  //     provider?.off('chainChanged');
  //   };
  // }, [provider]);

  return {
    provider,
    addNetwork,
    switchNetwork,
    connect,
    account,
    balance,
    updateBalance,
  };
};
