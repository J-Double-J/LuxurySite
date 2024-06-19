import styles from './ProductPreview.module.css'
import altImage from '../assets/bracelets.jpg'


function ProductPreview({ product, imgUrl, altText, contentBoxClass = '' }) {
  return (
      <div className={`${styles.productPreview} ${contentBoxClass}`}>
          <div className={styles.imgFrame}>
              <img className={styles.bottom} src={altImage} alt={altText} />
              <img className={styles.top} src={imgUrl} alt={altText} />
          </div>
          <div className={styles.productDetails}>
              <p>{product.Name}</p>
              <p>{`$${product.Price}`}</p>
              <button>Add to Bag</button>
          </div>
      </div>
  );
}

export default ProductPreview;