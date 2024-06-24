import FeaturedBanner from "./FeaturedBanner";
import FeaturedProductHomepageView from "./FeaturedProductHomepageView";
import LuxuryFooter from "./Footer/LuxuryFooter";

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