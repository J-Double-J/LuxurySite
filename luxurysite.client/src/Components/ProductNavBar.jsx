import styles from './ProductNavBar.module.css'
import { useState } from 'react'


function ProductNavBar() {
    const [activeButtonID, setActiveButtonID] = useState(0);

    const buttons = [
        { id: 0, name: "All Products" },
        { id: 1, name: "Watches" },
        { id: 2, name: "Necklaces" },
        { id: 3, name: "Earrings" }
    ]

    const toggleActiveButton = (id) =>
    {
        setActiveButtonID(id);
    }

  return (
      <nav className = { styles.productNavBar }>
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
      </nav>
  );
}

export default ProductNavBar;