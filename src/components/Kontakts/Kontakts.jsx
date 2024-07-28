import React from 'react';
import styles from './Kontakts.module.css';
// import ContactForm from 'components/Form/Form';

function Kontakts() {
  return (
    <main className={styles.main}>
      <section className={styles.firstSection}>
        <h1 className={styles.h1}>Skontaktuj się z nami</h1>
        <p className={styles.p}>ul. Krzywoustego 1, 84-300, Lębork</p>
        <p className={styles.clickableContact}>
          <a href="tel:+48662219626"> +48 662 219 626</a>
        </p>
        <p className={`${styles.clickableContact} ${styles.last}`}>
          <a href="mailto:catering@eduqlebork.pl"> catering@eduqlebork.pl</a>
        </p>
      </section>
      <section className={styles.secondSection}>
        <iframe
          title="Location Map"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4629.8851348463!2d17.755885!3d54.534508!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46fde80048d73679%3A0xc5ce3b71b4acae3b!2sBoles%C5%82awa%20Krzywoustego%201%2C%2084-300%20L%C4%99bork!5e0!3m2!1sen!2spl!4v1722182901263!5m2!1sen!2spl"
          width="600"
          height="450"
          style={{
            border: 'none',
          }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
      {/* <ContactForm /> */}
    </main>
  );
}

export default Kontakts;
