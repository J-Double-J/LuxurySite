import styles from './FeaturedProductHighlight.module.css'
import ProductPreview from './ProductPreview'
import bracelet from '../assets/bracelets.jpg'
import necklace from '../assets/blue_tear.jpg'
import watch from '../assets/serenity_watch.jpg'
import earring from '../assets/serenity_earrings.jpg'
import { ProductTypes } from '../Constants/ProductTypes.js'
import products from '../assets/SampleData/SampleProducts.js'
import { useState, useEffect } from 'react'

function FeaturedProductHighlight({ selectedProductType }) {
    const [productList, setProductList] = useState([]);

    useEffect(() => {
        setProductList(products)
    }, [])

    const imageForProduct = (productType) =>
    {
        switch (productType)
        {
            case ProductTypes.Earrings:
                return earring;
            case ProductTypes.Watches:
                return watch;
            case ProductTypes.Necklaces:
                return necklace;
            default:
                return bracelet;
        }
    }

  return (
      <div className={styles.featuredProductsContainer}>
          {
              productList.filter((product) => selectedProductType === ProductTypes.All || product.Type === selectedProductType
              ).map((product) => (
                  <ProductPreview key={product.ID} imgUrl={imageForProduct(product.Type)} altText={product.Type} contentBoxClass={styles.content} />
              ))
          }
      </div>
  );
}

export default FeaturedProductHighlight;