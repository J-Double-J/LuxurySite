import styles from './FeaturedProductHighlight.module.css'
import ProductPreview from './ProductPreview';
import bracelet from '../assets/bracelets.jpg'

function FeaturedProductHighlight() {
  return (
      <div className={styles.featuredProductsContainer}>
          <ProductPreview imgUrl={bracelet} altText="Bracelets" contentBoxClass={styles.content} />
          <ProductPreview imgUrl={bracelet} altText="Bracelets" contentBoxClass={styles.content} />
          <ProductPreview imgUrl={bracelet} altText="Bracelets" contentBoxClass={styles.content} />
          <ProductPreview imgUrl={bracelet} altText="Bracelets" contentBoxClass={styles.content} />
          <ProductPreview imgUrl={bracelet} altText="Bracelets" contentBoxClass={styles.content} />

          <ProductPreview imgUrl={bracelet} altText="Bracelets" contentBoxClass={styles.content} />
          <ProductPreview imgUrl={bracelet} altText="Bracelets" contentBoxClass={styles.content} />
          <ProductPreview imgUrl={bracelet} altText="Bracelets" contentBoxClass={styles.content} />
          <ProductPreview imgUrl={bracelet} altText="Bracelets" contentBoxClass={styles.content} />
          <ProductPreview imgUrl={bracelet} altText="Bracelets" contentBoxClass={styles.content} />

          <ProductPreview imgUrl={bracelet} altText="Bracelets" contentBoxClass={styles.content} />
          <ProductPreview imgUrl={bracelet} altText="Bracelets" contentBoxClass={styles.content} />
          { /* These 3 will never be displayed because of CSS rules, and this is just a placeholder test*/ }
          <ProductPreview imgUrl={bracelet} altText="Bracelets" contentBoxClass={styles.content} />
          <ProductPreview imgUrl={bracelet} altText="Bracelets" contentBoxClass={styles.content} />
          <ProductPreview imgUrl={bracelet} altText="Bracelets" contentBoxClass={styles.content} />
          
      </div>
  );
}

export default FeaturedProductHighlight;