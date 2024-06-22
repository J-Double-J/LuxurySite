import Footer from './Layout/Footer.jsx';
import FooterGridCustom from './Layout/FooterGridCustom.jsx';
import FooterGridListItem from './Layout/FooterGridItem.jsx';
import { FooterGridContext } from './Contexts/FooterGridContext.js';
import { useContext } from 'react';
function LuxuryFooter() {
    const gridAreaLayout = useContext(FooterGridContext);

    const pageItems = [
        { name: "One", url: "#0" },
        { name: "Two", url: "#0" },
        { name: "Three", url: "#0" },
        { name: "Four", url: "#0" },
    ];

    return (
        <FooterGridContext.Provider value={ gridAreaLayout }>
        <Footer>
            <FooterGridListItem title="Menu One" pageItems={pageItems} footerGridArea="menuOne" />
            <FooterGridListItem title="Menu Two" pageItems={pageItems} footerGridArea="menuTwo" />
            <FooterGridListItem title="Other Menu One" pageItems={pageItems} footerGridArea="otherMenuOne" />
            <FooterGridListItem title="Other Menu Two" pageItems={pageItems} footerGridArea="otherMenuTwo" />
            <FooterGridListItem title="Copyright" pageItems={pageItems} footerGridArea="copyright" />
            <FooterGridCustom footerGridArea="newsletter">
                <p>Placeholder</p>
            </FooterGridCustom>
            <FooterGridCustom footerGridArea="contact">
                <p>Placeholder Two</p>
            </FooterGridCustom>
        </Footer>
      </FooterGridContext.Provider>
  );
}

export default LuxuryFooter;