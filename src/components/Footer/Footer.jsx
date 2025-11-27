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
      <p className={styles.disclaimer}>
        <a target="blank" href="https://maps.app.goo.gl/yegTGRHq9R9fDZDh7">
          ul. Krzywoustego 1, 84-300, Lębork
        </a>
      </p>
      <p className={styles.disclaimer}>
        <a href="tel:+48694915632">Tel.: +48 694 915 632</a>
      </p>
      <p className={styles.disclaimer}>
        <a href="mailto:catering@eduqlebork.pl">catering@eduqlebork.pl</a>
      </p>
    </footer>
  );
}

export default Footer;
