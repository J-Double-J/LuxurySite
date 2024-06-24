import styles from './Accordion.module.css';
import rightArrow from '../../assets/right-arrow.svg';
import { useState } from 'react';

function Accordion({ header, children }) {
    const [isAccordionOpen, setAccordionOpen] = useState(false);

    const openAccordion = () => {
        setAccordionOpen(!isAccordionOpen);
    }

    return (
        <div className={styles.accordionContainer}>
            <div className={styles.accordionHeader} onClick={openAccordion}>
                <h1>{header}</h1>
                <button className={isAccordionOpen ? styles.accordionOpen : "" } aria-label={`Open dropdown about ${header}`} ><img src={rightArrow} /></button>
            </div>
            <div className={`${styles.accordionContents} ${isAccordionOpen ? styles.accordionOpen : ""}`}>
                <div>
                    {children}
                </div>
            </div>
      </div>
      
  );
}

export default Accordion;