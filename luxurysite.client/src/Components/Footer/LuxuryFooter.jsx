import Footer from '../Layout/Footer.jsx';
import FooterGridCustom from '../Layout/FooterGridCustom.jsx';
import FooterGridListItem from '../Layout/FooterGridItem.jsx';
import { FooterGridContext } from '../Contexts/FooterGridContext.js';
import { useContext, useState, useEffect } from 'react';
import NewsletterFooter from './NewsletterFooter.jsx';
import ContactFooter from './ContactFooter.jsx';
import SocialsFooter from './SocialsFooter.jsx';
import Accordion from '../Common/Accordion.jsx';
import StackedFooter from '../Layout/StackedFooter.jsx';

function LuxuryFooter() {
    const gridAreaLayout = useContext(FooterGridContext);
    const [useStackedLayout, setUseStackedLayout] = useState(false);

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

    useEffect(() => {
        const handleResize = () => {
            setUseStackedLayout(window.innerWidth < 975);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const gridFooter = (
    <FooterGridContext.Provider value={gridAreaLayout}>
        <Footer>
            <FooterGridListItem title="About Us" pageItems={aboutUsItems} footerGridArea="menuOne" />
            <FooterGridListItem title="Help" pageItems={helpItems} footerGridArea="menuTwo" />
            <FooterGridListItem title="Legal" pageItems={legalItems} footerGridArea="otherMenuOne" />
            <FooterGridCustom footerGridArea="otherMenuTwo">
                <SocialsFooter title = "Social" />
            </FooterGridCustom>
            <FooterGridCustom footerGridArea="newsletter">
                <NewsletterFooter />
            </FooterGridCustom>
            <FooterGridCustom footerGridArea="contact">
                <ContactFooter title = "Contact Us"/>
            </FooterGridCustom>
            <FooterGridCustom>
                <p>&copy;2024 Luca Valentini</p>
            </FooterGridCustom>
        </Footer>
    </FooterGridContext.Provider>);

    const stackedFooter = (
        <StackedFooter>
            <NewsletterFooter />
            <Accordion header="About Us">
                <FooterGridListItem title="" pageItems={aboutUsItems} footerGridArea="" />
            </Accordion>
            <Accordion header="Help">
                <FooterGridListItem title="" pageItems={helpItems} footerGridArea="" />
            </Accordion>
            <Accordion header="Legal">
                <FooterGridListItem title="" pageItems={legalItems} footerGridArea="" />
            </Accordion>
            <Accordion header="Social">
                <SocialsFooter />
            </Accordion>
            <Accordion header="Contact">
                <ContactFooter />
            </Accordion>
            <p>&copy;2024 Luca Valentini</p>
        </StackedFooter>
    )

    return (
        <>
            {useStackedLayout ? stackedFooter : gridFooter}
        </>
  );
}

export default LuxuryFooter;