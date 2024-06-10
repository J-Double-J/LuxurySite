import styles from './HeaderBar.module.css'

function HeaderBar() {
    return (
        <nav>
            <div className={styles.siteHeaderLeft} >
                <ul role="list">
                    <li>Women</li>
                    <li>Men</li>
                    <li>Collections</li>
                </ul>
            </div>
            <h1>Luca Valentini</h1>
            <div className={styles.siteHeaderRight }>
                <ul>
                    <li>Search</li>
                    <li>Cart</li>
                </ul>
            </div>
        </nav>
  );
}

export default HeaderBar;