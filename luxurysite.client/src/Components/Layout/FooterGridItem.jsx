import styles from './Footer.module.css'
import { FooterGridContext } from '../Contexts/FooterGridContext.js';
import { useContext } from 'react';

// page items is expected to be in the form { name: string, url: string}
function FooterGridListItem({ title, pageItems, footerGridArea = "" }) {
    // If the grid area has been specified this will style the containing div to be placed in that grid area with inline styling.
    let gridAreaStyling = footerGridArea !== "" ? { gridArea: footerGridArea } : {};
    const validGridAreas = useContext(FooterGridContext);

    if (footerGridArea !== "" && !validGridAreas.includes(footerGridArea))
    {
        gridAreaStyling = {};
        console.warn(`Grid Item was passed a value of '${footerGridArea}' but that area was not found in the registered grid of ${validGridAreas}.\nComponent will not display.`);
        return null;
    }

    return (
        <div className={`${styles.footerGridItem}`} style={gridAreaStyling}>
        <h2>{title}</h2>
        <ul>
            {
                pageItems.map((item, index) => (
                    <li key={index}>
                        <a href={item.url}>{item.name}</a>
                    </li>
                ))
            }
        </ul>
      </div>
  );
}

export default FooterGridListItem;