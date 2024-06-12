import styles from './ProductPreview.module.css'

function ProductPreview({ imgUrl, altText, contentBoxClass = '' }) {
  return (
      <div className={`${styles.productPreview} ${contentBoxClass}`}>
          <img src={imgUrl} alt={altText} />
      </div>
  );
}

export default ProductPreview;