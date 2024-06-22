import FeaturedBanner from "./FeaturedBanner";
import FeaturedProductHighlight from "./FeaturedProductHighlight";
import FeaturedProductHomepageView from "./FeaturedProductHomepageView";
import LuxuryFooter from "./LuxuryFooter";

import styles from "./MainLayout.module.css";

function MainLayout() {
    return (
      <main>
            <FeaturedBanner />
            <FeaturedProductHomepageView />
            <LuxuryFooter />
      </main>
  );
}

export default MainLayout;