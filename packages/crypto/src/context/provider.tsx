import { IndexedType } from '@c3/utils';
import React, { useMemo } from 'react';
import { ContractInitInfo, ContractPair, getContract } from '../contract/index';
import { useWallet_ } from '../wallet';
import { Web3Context } from './context';

type Props = {
  value: ContractInitInfo[];
  children: React.ReactChild;
};

export const Web3Provider = (props: Props) => {
  const { value: contractInitInfos, ...restProps } = props;
  const wallet = useWallet_();

  //@ts-ignore
  window.wallet = wallet;

  const contracts = useMemo(() => {
    const contracts: IndexedType<ContractPair> = {};
    for (const e of contractInitInfos) {
      const contract = getContract(e.contractAddress, e.abi, e.provider);
      if (contract) {
        contracts[e.contractName] = contract;
      }
    }
    return contracts;
  }, [contractInitInfos]);

  //@ts-ignore
  window.contracts = contracts;

  return (
    <Web3Context.Provider
      value={{ wallet, contracts }}
      {...restProps}
    ></Web3Context.Provider>
  );
};
