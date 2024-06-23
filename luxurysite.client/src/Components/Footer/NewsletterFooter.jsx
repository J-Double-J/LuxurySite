import styles from './NewsletterFooter.module.css';

function NewsletterFooter() {
    return (
      <div className={styles.newsletterFooter } >
        <h2>Newsletter</h2>
        <p id="footer-newsletter-label">Sign up to recieive 10% off and get the latest news and exclusive content</p>
        <form id="newsletter-signup" className={styles.newsletterForm}>
            <input id="newsletter-field" type="email" placeholder="Email Address" aria-labelledby="footer-newsletter-label" name="contact[email]"/>
            <button><span>Sign Up</span></button>
        </form>
      </div>

      
  );
}

export default NewsletterFooter;