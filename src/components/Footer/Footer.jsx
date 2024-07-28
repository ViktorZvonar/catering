import React from 'react';
import { NavLink } from 'react-router-dom';
import logo1 from '../../images/catering-new-logo.png';

import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.logos}>
        <NavLink to="/">
          <img src={logo1} alt="Logo 1" className={styles.logo1} />
        </NavLink>
      </div>
      <p className={styles.disclaimer}>ul. Krzywoustego 1, 84-300, Lębork</p>
      <p className={styles.disclaimer}>Tel.: 662 219 626</p>
      <p className={styles.disclaimer}>catering@eduqlebork.pl</p>
    </footer>
  );
}

export default Footer;
