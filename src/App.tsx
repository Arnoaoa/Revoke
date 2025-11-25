import { useAccount, useChainId } from 'wagmi'
import Header from './components/01_Header/Header.tsx'
import Connect from './components/02_Connect/Connect.tsx'
import RevokeIt from './components/03_RevokeIt/RevokeIt.tsx'


function App() {
  const {address, isConnected } = useAccount()
  const chainId = useChainId()

  return (
    <main className="app-container">
      <Header />
      <Connect isConnected={isConnected} address={address} chainId={chainId} />
      <RevokeIt isConnected={isConnected} />
    </main>
  )
}

export default App
