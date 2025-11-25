import styles from './RevokeIt.module.css'
import TokenInput from '../04_TokenInput/TokenInput.tsx'
import { useState } from 'react';
import { AllowanceManager } from '../05_AllowanceManager/AllowanceManager.tsx';

interface RevokeItProps {
    isConnected: boolean;
}


export default function RevokeIt({ isConnected }: RevokeItProps) {
    const [tokenAddress, setTokenAddress] = useState<`0x${string}` | undefined>(undefined)

    const handleTokenAddressChange = (address: string) => {
        if (address.startsWith('0x') && address.length === 42) {
            setTokenAddress(address as `0x${string}`)
        } else {
            alert('Adresse invalide. Veuillez entrer une adresse Ethereum valide (0x...).')
        }
    }

    return (
        <>
            <div className={styles.tokenSection}>
                {isConnected && (
                    <TokenInput onTokenAddressChange={handleTokenAddressChange} />
                )}
            </div>
            <div className={styles.allowanceManager}>
                {isConnected && tokenAddress && (
                    <AllowanceManager tokenAddress={tokenAddress as `0x${string}`} />
                )}
                {!tokenAddress && (
                    <div className={styles.infoCard}>
                        Renseigne l'adresse du token ERC-20 pour commencer à utiliser RevokeYourBase.
                    </div>)}
            </div>
        </>
    )
}