import Footer from '../Layout/Footer.jsx';
import FooterGridCustom from '../Layout/FooterGridCustom.jsx';
import FooterGridListItem from '../Layout/FooterGridItem.jsx';
import { FooterGridContext } from '../Contexts/FooterGridContext.js';
import { useContext } from 'react';
import NewsletterFooter from './NewsletterFooter.jsx';
import ContactFooter from './ContactFooter.jsx';
import SocialsFooter from './SocialsFooter.jsx';
function LuxuryFooter() {
    const gridAreaLayout = useContext(FooterGridContext);

    const blank = [];

    const aboutUsItems = [
        { name: "Sustainable Luxury", url: "#0" },
        { name: "Store Locator", url: "#0" },
        { name: "Boutiques", url: "#0" },
        { name: "Corporate Gifting", url: "#0" },
        { name: "Careers", url: "#0" },
    ];

    const helpItems = [
        { name: "Contact Us", url: "#0" },
        { name: "Frequently Asked Questions", url: "#0" },
        { name: "Shipping", url: "#0" },
        { name: "Returns", url: "#0" },
        { name: "Care & Repair", url: "#0" },
    ];

    const legalItems = [
        { name: "Privacy Policy", url: "#0" },
        { name: "Terms & Conditions", url: "#0" },
        { name: "Accessibility Statement", url: "#0" },
        { name: "Responsible Business Practices", url: "#0" },
        { name: "Provenance Claim", url: "#0" },
    ];

    return (
      <FooterGridContext.Provider value={ gridAreaLayout }>
        <Footer>
            <FooterGridListItem title="About Us" pageItems={aboutUsItems} footerGridArea="menuOne" />
            <FooterGridListItem title="Help" pageItems={helpItems} footerGridArea="menuTwo" />
            <FooterGridListItem title="Legal" pageItems={legalItems} footerGridArea="otherMenuOne" />
            <FooterGridCustom footerGridArea="otherMenuTwo">
                <SocialsFooter />
            </FooterGridCustom>
            <FooterGridCustom footerGridArea="newsletter">
                <NewsletterFooter/>
            </FooterGridCustom>
            <FooterGridCustom footerGridArea="contact">
                <ContactFooter />
            </FooterGridCustom>
            <FooterGridCustom>
                <p>&copy;2024 Luca Valentini</p>
            </FooterGridCustom>
        </Footer>
      </FooterGridContext.Provider>
  );
}

export default LuxuryFooter;