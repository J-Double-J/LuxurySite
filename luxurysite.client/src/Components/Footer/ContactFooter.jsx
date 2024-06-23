import styles from "./ContactFooter.module.css";

function ContactFooter() {
  return (
      <div className={styles.contactFooter }>
          <h2>Contact Us</h2>
          <p>Phone Number: 000-000-0000</p>
          <p><a href="#0">Email Us</a></p>
          <p>Hours: Monday - Saturday: 8AM - 7PM</p>
      </div>
  );
}

export default ContactFooter;