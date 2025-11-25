import styles from './Header.module.css'

export default function Header() {
    return (
        <div>
            <header className={styles.appHeader}>
                <h1>Base Wallet - Gestionnaire d'Allowances</h1>
                <p className={styles.subtitle}>Connectez votre wallet et gérez les allowances de vos tokens ERC-20</p>
            </header>
        </div>
    )
}


