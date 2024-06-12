import FeaturedBanner from "./FeaturedBanner";
import FeaturedProductHighlight from "./FeaturedProductHighlight";
import styles from "./MainLayout.module.css"
import ProductNavBar from "./ProductNavBar";

function MainLayout() {
    return (
      <main>
            <FeaturedBanner />
            <ProductNavBar />
            <FeaturedProductHighlight />
      </main>
  );
}

export default MainLayout;