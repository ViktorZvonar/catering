import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo1 from '../../images/catering-new-logo.png';
import logo4 from '../../images/eduq-logo-removebg-preview.png';

import styles from './Header.module.css';
import { useMedia } from '../../hooks/useMedia';

const getClassName = ({ isActive }) => {
  const className = isActive ? `${styles.link} ${styles.active}` : styles.link;
  return className;
};

function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const isBetweenWidths481And1279 = useMedia(
    ['(min-width: 481px) and (max-width: 1279px)'],
    [true],
    false
  );
  const isFromWidth1280 = useMedia(['(min-width: 1280px)'], [true], false);
  const isUpToWidth480 = useMedia(['(max-width: 480px)'], [true], false);

  return (
    <header className={styles.header}>
      {dropdownOpen && (
        <div
          className={`${styles.backdrop} ${
            dropdownOpen ? styles.activeBackdrop : ''
          }`}
          onClick={() => setDropdownOpen(false)}
        ></div>
      )}

      <NavLink to="/">
        <img
          src={logo1}
          alt="Logo 1"
          className={`${styles.logo1} ${styles.logo}`}
        />
      </NavLink>

      <nav className={styles.nav}>
        {isFromWidth1280 && (
          <div className={styles.naContent}>
            <NavLink to="/" className={getClassName}>
              Oferta
            </NavLink>
            <NavLink to="/o-nas" className={getClassName}>
              O nas
            </NavLink>
            <NavLink to="/kontakt" className={getClassName}>
              Kontakt
            </NavLink>
          </div>
        )}
        {isUpToWidth480 && (
          <li
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className={`${styles.burgerMenuIcon} ${styles.link}`}
          >
            ☰
            {dropdownOpen && (
              <div className={styles.dropdownContent}>
                <NavLink to="/" className={getClassName}>
                  Oferta
                </NavLink>
                <NavLink to="/o-nas" className={getClassName}>
                  O nas
                </NavLink>
                <NavLink to="/kontakt" className={getClassName}>
                  Kontakt
                </NavLink>
              </div>
            )}
          </li>
        )}
        {isBetweenWidths481And1279 && (
          <li
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className={`${styles.menuDropdown} ${styles.link}`}
          >
            Menu
            {dropdownOpen && (
              <div className={styles.dropdownContent}>
                <NavLink to="/" className={getClassName}>
                  oferta
                </NavLink>
                <NavLink to="/o-nas" className={getClassName}>
                  O nas
                </NavLink>
                <NavLink to="/kontakt" className={getClassName}>
                  Kontakt
                </NavLink>
              </div>
            )}
          </li>
        )}
      </nav>

      <a
        className={styles.logoLinkInvisible}
        href="https://eduq.pl"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={logo4}
          alt="Logo 4"
          className={`${styles.logo4} ${styles.logo}`}
        />
      </a>
    </header>
  );
}

export default Header;
