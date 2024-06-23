import styles from './SocialsFooter.module.css'
import facebookLogo from '../../assets/OtherLogos/facebook.svg';
import instagramLogo from '../../assets/OtherLogos/instagram.svg';
import pinterestLogo from '../../assets/OtherLogos/pinterest.svg';
import linkedInLogo from '../../assets/OtherLogos/linkedIn.svg';
function SocialsFooter() {
  return (
      <div className={styles.socialsFooter}>
          <h2>Social</h2>
          <ul>
              <li><a href="#0"><img src={facebookLogo } alt = "Facebook"/></a></li>
              <li><a href="#0"><img src={instagramLogo} alt = "Instagram"/></a></li>
              <li><a href="#0"><img src={pinterestLogo} alt = "Pinterest"/></a></li>
              <li><a href="#0"><img src={linkedInLogo} alt = "LinkedIn"/></a></li>
          </ul>
      </div>
  );
}

export default SocialsFooter;