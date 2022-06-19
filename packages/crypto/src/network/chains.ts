import { Chain } from './chain';
import { ChainId } from './chainIds';

export const CHAINS: { [id: number]: Chain } = {
  [ChainId.OasisEmeraldTestnet]: {
    chainId: ChainId.OasisEmeraldTestnet,
    chainName: 'OasisEmeraldTestnet',
    rpcUrls: ['https://testnet.emerald.oasis.dev'],
    nativeCurrency: {
      name: 'ROSE',
      symbol: 'ROSE',
      decimals: 18,
    },
    blockExplorerUrls: ['https://testnet.explorer.emerald.oasis.dev'],
  },
  [ChainId.OasisEmerald]: {
    chainId: ChainId.OasisEmerald,
    chainName: 'OasisEmeraldMainnet',
    rpcUrls: ['https://emerald.oasis.dev'],
    nativeCurrency: {
      name: 'ROSE',
      symbol: 'ROSE',
      decimals: 18,
    },
    blockExplorerUrls: ['https://explorer.emerald.oasis.dev'],
  },
};
