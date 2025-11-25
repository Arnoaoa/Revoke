import { useState } from 'react';
import styles from './TokenInput.module.css'

interface TokenInputProps {
    onTokenAddressChange: (address: string) => void;
}

export default function TokenInput({ onTokenAddressChange }: TokenInputProps) {
    const [tokenAddress, setTokenAddress] = useState('')

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (tokenAddress.trim()) {
            onTokenAddressChange(tokenAddress.trim())
        }
    }

    return (
        <form onSubmit={handleSubmit} className="input-group">
            <label htmlFor="token-address">
                <h3>Adresse du Token ERC-20</h3>
            </label>
            <div className={styles.inputGroup}>
                <input type="text"
                    id="token-address"
                    placeholder="0X..."
                    value={tokenAddress}
                    onChange={(e) => setTokenAddress(e.target.value)}
                    className={styles.tokenInput} />

                <button type="submit" className="submit-button">Rechercher</button>
            </div>
        </form>
    )
}