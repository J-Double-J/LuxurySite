import FeaturedBanner from "./FeaturedBanner";
import FeaturedProductHighlight from "./FeaturedProductHighlight";
import FeaturedProductHomepageView from "./FeaturedProductHomepageView";
import styles from "./MainLayout.module.css"

function MainLayout() {
    return (
      <main>
            <FeaturedBanner />
            <FeaturedProductHomepageView />
      </main>
  );
}

export default MainLayout;