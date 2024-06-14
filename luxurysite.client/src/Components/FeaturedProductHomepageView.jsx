import FeaturedProductHighlight from "./FeaturedProductHighlight";
import ProductNavBar from "./ProductNavBar";
import { useState } from 'react';
import { ProductTypes } from '../Constants/ProductTypes.js'


function FeaturedProductHomepageView() {
    const [productTypeToDisplay, setProductTypeToDisplay] = useState(ProductTypes.All);


    const filterItems = (productType) => {
        console.log(productType);
        setProductTypeToDisplay(productType);
    }
    return (
        <>
            <ProductNavBar onActiveButtonChanged={ filterItems } />
            <FeaturedProductHighlight selectedProductType={productTypeToDisplay} />
        </>
    );
}

export default FeaturedProductHomepageView;