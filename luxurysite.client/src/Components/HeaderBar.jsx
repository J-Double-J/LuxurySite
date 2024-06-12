import styles from './HeaderBar.module.css'

function HeaderBar() {
    return (
        <nav className={styles.mainNavBar }>
            <div className={styles.siteHeaderLeft} >
                <ul role="list">
                    <li><a href="#0">Women</a></li>
                    <li><a href="#0">Men</a></li>
                    <li><a href="#0">Collections</a></li>
                </ul>
            </div>
            <h1><a href="#0">Luca Valentini</a></h1>
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