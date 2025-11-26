import { ConnectButton } from "@rainbow-me/rainbowkit";
import styles from './Connect.module.css'
import { useBalance } from 'wagmi';
import { formatEther, Hex } from 'viem';
import { base } from "viem/chains";

interface ConnectProps {
  isConnected: boolean;
  address: Hex | undefined;
  chainId: number;
}

export default function Connect({ isConnected, address, chainId }: ConnectProps) {

  const { data: balance } = useBalance({
    address: address,
  });
  return (
    <div className={styles.connectSection}>
      <ConnectButton  chainStatus="icon"/>
      {isConnected && (
        <div className={styles.connectionInfo}>
          <p><strong>Adresse:</strong> <code>{address}</code></p>
          <p><strong>Chain ID:</strong> {chainId} {chainId === base.id && <span className={styles.successMessage}>✓ Base</span>}</p> 
          <p><strong>Solde:</strong> {balance ? `${parseFloat(formatEther(balance.value)).toFixed(4)}` : '...'} {balance?.symbol || ''}</p>
        </div>
      )}
    </div>)
}


//balance.value -> bigint -> formatEther = string -> parseFloat = number -> toFixed(4) = string 4 déci