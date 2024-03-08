import React from 'react';
import logo1 from '../../images/catering.png';

import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.logos}>
        <img src={logo1} alt="Logo 1" className={styles.logo1} />
      </div>
      <p className={styles.disclaimer}>ul. Krzywoustego 1, 84-300 Lębork</p>
      <p className={styles.disclaimer}>Tel. cateringu: 662 219 626</p>
      <p className={styles.disclaimer}>
        E-mail cateringu: catering@eduqlebork.pl
      </p>
    </footer>
  );
}

export default Footer;
