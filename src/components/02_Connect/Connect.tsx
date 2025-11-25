import { ConnectButton } from "@rainbow-me/rainbowkit";
import styles from './Connect.module.css'

interface ConnectProps {
  isConnected: boolean;
  address: string | undefined;
  chainId: number;
}

export default function Connect({ isConnected, address, chainId }: ConnectProps) {
  return (
    <div className={styles.connectSection}>
      <ConnectButton/>
      {isConnected && (
        <div className={styles.connectionInfo}>
          <p><strong>Adresse:</strong> <code>{address}</code></p>
          <p><strong>Chain ID:</strong> {chainId} {chainId === 8453 && <span className={styles.successMessage}>✓ Base</span>}</p> 
        </div>
      )}
    </div>)
}