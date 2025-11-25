import {base} from 'wagmi/chains'
import { getDefaultConfig } from '@rainbow-me/rainbowkit';

export const config = getDefaultConfig({
  appName: 'RevokeYourBase',
  projectId: '67ba6ffd39732cee08e6bc35821f600f',
  chains: [base],
  ssr: false, // If your dApp uses server side rendering (SSR)
});


declare module 'wagmi' {
  interface Register {
    config: typeof config
  }
}
