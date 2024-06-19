import ProductPreview from './ProductPreview'
import bracelet from '../assets/bracelets.jpg'
import necklace from '../assets/blue_tear.jpg'
import watch from '../assets/serenity_watch.jpg'
import earring from '../assets/serenity_earrings.jpg'
import leftArrow from '../assets/left-arrow.svg'
import rightArrow from '../assets/right-arrow.svg'
import { ProductTypes } from '../Constants/ProductTypes.js'
import products from '../assets/SampleData/SampleProducts.js'
import { useState, useEffect, useRef } from 'react'
import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/sea-green';
import styles from './FeaturedProductHighlight.module.css'
import ActionLink from './Common/ActionLink'


function CustomArrow({ direction, onClick }) {
    const customClass = direction === 'prev' ? styles.prevArrow : styles.nextArrow
    return (
        <button className={`splide__arrow splide__arrow--${direction} ${customClass}`} type="button">
            {direction === 'prev' ? <img src={leftArrow} alt="Left Arrow" /> : <img src={rightArrow} alt="Right Arrow" /> }
        </button>
    );
}

function FeaturedProductHighlight({ selectedProductType }) {
    const [prevProductType, setPrevProductType] = useState(null);
    const splideRef = useRef(null);

    const splideOptions = {
        height: "30rem",
        gap: "2rem",
        perPage: 4,
        perMove: 1,
        omitEnd: true,
        speed: 250,
        rewind: false,
        pagination: false
    };


    const imageForProduct = (productType) => {
        switch (productType) {
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

    const goToStart = () => {
        if (splideRef.current && splideRef.current.splide.length > 0) {
            splideRef.current.splide.options = { speed: 0 } // Removes the sliding animation for the reset
            splideRef.current.go(0);
            splideRef.current.splide.options = { speed: 250 } // Reinstates the sliding animation
        }
    };

    if (selectedProductType !== prevProductType)
    {
        goToStart();
        setPrevProductType(selectedProductType);
    }
    
    return (
      <div className={styles.featuredProductsContainerSplide}>
            <Splide options={splideOptions}
                hasTrack={ false }
              aria-label="Product Images"
              ref={ splideRef }
            >
                <SplideTrack>
                {
                    products.filter((product) => selectedProductType === ProductTypes.All || product.Type === selectedProductType
                        ).map((product) => (
                            <SplideSlide key={ product.ID }>
                                <ProductPreview product={product} imgUrl={imageForProduct(product.Type)} altText={product.Type} contentBoxClass={styles.content} />
                            </SplideSlide>
                    ))
                }
                <SplideSlide>
                    <div className={styles.actionSlide}>
                        <ActionLink text={`Shop ${selectedProductType}`} href="#0" />
                    </div>
                </SplideSlide>
                </SplideTrack>
                <div className="splide__arrows">
                    <CustomArrow direction="prev" />
                    <CustomArrow direction="next" />
                </div>
          </Splide>
      </div>
  );
}

export default FeaturedProductHighlight;