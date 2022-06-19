import { IndexedType } from '@c3/utils';
import { BigNumber, ethers } from 'ethers';
import React, { useCallback, useContext } from 'react';
import { Chain } from '../network';
import { useWallet_ } from '../wallet/useWallet';

export type Web3ContextDataType = {
  wallet: ReturnType<typeof useWallet_>;
  contracts: IndexedType<[ethers.Contract, ethers.Contract]>;
};

export const Web3Context = React.createContext({
  wallet: {
    account: '',
    balance: BigNumber.from(0),
  },
  contracts: {},
} as Web3ContextDataType);

export const useWeb3 = () => {
  return useContext(Web3Context);
};

export const useContract = (name: string) => {
  const { contracts } = useWeb3();
  return contracts[name];
};

export const useAccount = () => {
  const { wallet } = useWeb3();
  return wallet.account;
};

export const useBalance = () => {
  const { wallet } = useWeb3();
  return [wallet.balance, wallet.updateBalance] as const;
};

export const useNetwork = () => {
  const { wallet } = useWeb3();

  return useCallback(() => {
    return wallet.provider?.getNetwork() || ({} as Chain);
  }, [wallet.provider]);
};

export const useWallet = () => {
  const { wallet } = useWeb3();
  return wallet;
};
