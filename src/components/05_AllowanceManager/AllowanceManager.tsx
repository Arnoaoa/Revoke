import styles from './AllowanceManager.module.css'
import { useAccount, useReadContract, useWriteContract, useWaitForTransactionReceipt } from 'wagmi'
import { Address, erc20Abi, Hex } from 'viem'
import AllowanceForm from '../06_AllowanceForm/AllowanceForm'
import { base } from 'viem/chains'

interface AllowanceManagerProps {
    tokenAddress: Address
}

export function AllowanceManager({ tokenAddress }: AllowanceManagerProps) {
    const { address, chain } = useAccount()

    // Tous les hooks doivent être appelés AVANT tout return conditionnel
    const { data: tokenName } = useReadContract({
        address: tokenAddress,
        abi: erc20Abi, //interface du contrat (def fcts)
        functionName: 'name',
    })

    const { data: tokenSymbol } = useReadContract({
        address: tokenAddress,
        abi: erc20Abi,
        functionName: 'symbol',
    })

    const { writeContract, data: hash, isPending, error } = useWriteContract()
    const { isLoading: isConfirming, isSuccess } = useWaitForTransactionReceipt({
        hash,
    })

    
    if (!tokenName) {
        return (
            <div className={styles.tokenInfo}>
                <h3>Informations du Token</h3>
                <p>Token non trouvé. Veuillez entrer une adresse Ethereum valide (0x...).</p>
            </div>
        )
    }

    const revokeAllowance = async (spender: string) => {
        if (!address) return;

        try {
            writeContract({
                address: tokenAddress,
                abi: erc20Abi,
                functionName: 'approve',
                args: [spender as `0x${string}`, 0n],
            })
        } catch (err) {
            console.error('Erreur lors de la révocation:', err)
        }
    }


    return (
        <>
            <div className={styles.tokenInfo}>
                <h3>Informations du Token</h3>
                <p>
                    <strong>Nom:</strong> {tokenName}
                </p>
                <p>
                    <strong>Symbole:</strong> {tokenSymbol}
                </p>
                <p>
                    <strong>Adresse:</strong> {tokenAddress}
                </p>
                <p>
                    <strong>Chain ID:</strong> {chain?.id} {chain?.id === base.id && <span> Base</span>}
                </p>
            </div>
            <div className={styles.allowancesForm}>
                <h3>Révoquer une Allowance</h3>
                <AllowanceForm
                    onRevoke={revokeAllowance}
                    isPending={isPending || isConfirming}
                    error={error}
                    isSuccess={isSuccess}
                />
            </div>
        </>
    )
}
