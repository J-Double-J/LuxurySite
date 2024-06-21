import styles from './ProductNavBar.module.css'
import { useState } from 'react'
import { ProductTypes } from '../Constants/ProductTypes.js'


function ProductNavBar({ onActiveButtonChanged }) {
    const [activeButtonID, setActiveButtonID] = useState(0);

    const buttons = [
        { id: 0, name: ProductTypes.All },
        { id: 1, name: ProductTypes.Watches },
        { id: 2, name: ProductTypes.Necklaces },
        { id: 3, name: ProductTypes.Earrings }
    ]

    const toggleActiveButton = (id) =>
    {
        if (activeButtonID !== id)
        {
            setActiveButtonID(id);
            onActiveButtonChanged(buttons[id].name);
        }
    }

  return (
      <nav className={styles.productNavBar}>
          <div className={styles.navListBox }>
              <ul>
                  {buttons.map(buttonObj => (
                      <li key={buttonObj.id}>
                          <button
                              onClick={() => toggleActiveButton(buttonObj.id)}
                              className={activeButtonID === buttonObj.id ? styles.isActive : ''}>
                              {buttonObj.name}
                          </button>
                      </li>
                  ))}
              </ul>
          </div>
          
      </nav>
  );
}

export default ProductNavBar;