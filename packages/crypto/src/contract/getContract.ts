import { ethers } from 'ethers';

export type ContractInitInfo = {
  contractName: string;
  contractAddress: string;
  abi: ethers.ContractInterface;
  provider: ethers.providers.JsonRpcProvider;
};

export type ContractPair = [ethers.Contract, ethers.Contract];

export const getContract = (
  contractAddress: string,
  abi: ethers.ContractInterface,
  provider: ethers.providers.JsonRpcProvider
): ContractPair | undefined => {
  try {
    const contract = new ethers.Contract(contractAddress, abi, provider);
    const contractWithSigner = contract.connect(provider.getSigner());
    return [contract, contractWithSigner];
  } catch (e) {
    console.error('getContract contract failed', e);
    return undefined;
  }
};
