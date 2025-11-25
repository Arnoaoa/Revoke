import { useState } from "react"
import styles from './AllowanceForm.module.css'
interface AllowanceFormProps {
    onRevoke: (spender: string) => void
    isPending: boolean
    error: Error | null
    isSuccess: boolean
}

export default function AllowanceForm({ onRevoke, isPending, error, isSuccess }: AllowanceFormProps) {
    const [spenderAddress, setSpenderAddress] = useState('')

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (spenderAddress.trim()) {
            onRevoke(spenderAddress.trim())
        }
    }
    return (
        <form onSubmit={handleSubmit} className="input-group">
            <label htmlFor="spender-address">
                <h3>Adresse du spender</h3>
            </label>

            <div className={styles.inputGroup}>
            <input type="text"
                placeholder="Adresse du spender"
                value={spenderAddress}
                onChange={(e) => setSpenderAddress(e.target.value)} 
                className={styles.tokenInput} />

                <button type="submit"
                    disabled={isPending || !spenderAddress.trim()} 
                    className="revoke-button">
                    {isPending ? 'Traitement...' : 'Révoquer'}
                </button>
            </div>

            {error && <p>{error.message}</p>}
            {isSuccess && <p className={styles.successMessage}>Allowance révoquée avec succès!</p>}
        </form>
    )
}