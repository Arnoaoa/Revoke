import { ConnectButton } from "@rainbow-me/rainbowkit";
import styles from './Connect.module.css'
import { useBalance } from 'wagmi';
import { formatEther } from 'viem';

interface ConnectProps {
  isConnected: boolean;
  address: string | undefined;
  chainId: number;
}

export default function Connect({ isConnected, address, chainId }: ConnectProps) {
  const { data: balance } = useBalance({
    address: address as `0x${string}` | undefined,
  });
  return (
    <div className={styles.connectSection}>
      <ConnectButton showBalance={true} chainStatus="icon"/>
      {isConnected && (
        <div className={styles.connectionInfo}>
          <p><strong>Adresse:</strong> <code>{address}</code></p>
          <p><strong>Chain ID:</strong> {chainId} {chainId === 8453 && <span className={styles.successMessage}>✓ Base</span>}</p> 
          <p><strong>Solde:</strong> {balance ? `${parseFloat(formatEther(balance.value)).toFixed(4)}` : '...'} {balance?.symbol || ''}</p>
        </div>
      )}
    </div>)
}


//balance.value -> bigint -> formatEther = string -> parseFloat = number -> toFixed(4) = string 4 déci