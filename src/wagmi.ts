import { base, mainnet, sepolia } from 'wagmi/chains'
import { getDefaultConfig } from '@rainbow-me/rainbowkit';

export const config = getDefaultConfig({
  appName: 'RevokeYourBase',
  projectId: '67ba6ffd39732cee08e6bc35821f600f',
  chains: [base, mainnet, sepolia],
  ssr: false,
});

export const defaultChainId = base.id



// donne la config à typescript ->  connaît le type exact de config (chaînes, RPC, etc.) 
//et vérifie que bons types utilisés partout.