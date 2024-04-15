import React from 'react';
import styles from './Offers.module.css';
import OfferItem from './OfferItem/OfferItem';

function Speakers() {
  return (
    <main>
      <section className={styles.section} tabIndex="0">
        <h1 className={styles.h1}>Oferta</h1>
        <p className={styles.p}>
          Wszystko to, aby sprostać Twoim oczekiwaniom i zapewnić niezapomniane
          doznania kulinarne.
        </p>
        <p className={`${styles.p} ${styles.additionalInfo}`}>Smacznego!</p>
      </section>
      <section className={styles.speakersContainer}>
        <OfferItem />
      </section>
    </main>
  );
}

export default Speakers;
