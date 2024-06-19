import menuIcon from '../assets/hamburger-menu.svg';
import searchIcon from '../assets/search-icon.svg';
import bagIcon from '../assets/bag-icon.svg';
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
            <a href="#0"><h1><span>Luca Valentini</span></h1></a>
            <div className={styles.siteHeaderRight }>
                <ul>
                    <li><img src={searchIcon} alt="Search" /></li>
                    <li><img src={bagIcon} alt="Shopping Cart" /></li>
                    <li className={ styles.menuButton }><img src={menuIcon} alt = "Menu" /></li>
                </ul>
            </div>
        </nav>
  );
}

export default HeaderBar;