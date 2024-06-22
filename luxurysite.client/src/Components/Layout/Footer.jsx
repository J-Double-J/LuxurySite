import styles from './Footer.module.css'
import { FooterGridContext } from '../Contexts/FooterGridContext.js';
import { useContext } from 'react';

function Footer({ children }) {
    const gridLayout = useContext(FooterGridContext)
  return (
      <footer className={styles.pageFooter}>
          <div className={styles.gridContainer} style={{ gridTemplateAreas: gridLayout } }>
              { children }
          </div>
      </footer>
  );
}

export default Footer;