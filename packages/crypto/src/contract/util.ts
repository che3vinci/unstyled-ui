export type ContractAddress = string;

export type ContractsRepo = {
  [contractName: string]: { [chainId: number]: ContractAddress };
};

export const getContractAddress = (
  contractName: string,
  chainId: number,
  allContracts: ContractsRepo
) => {
  return allContracts[contractName][chainId];
};
