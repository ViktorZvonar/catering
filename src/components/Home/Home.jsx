import React from 'react';
import styles from './Home.module.css';
import Moderators from 'components/Moderators/Moderators';

function Home() {
  return (
    <main>
      <section className={styles.firstSection}>
        <h1 className={styles.h1}>
          Obsługujemy zarówno szkoły, firmy jak i klientów indywidualnych
        </h1>
        <p className={styles.p}>
          Panie pracujące w kuchni wykazują się niesamowitą zdolnością w
          przygotowywaniu obiadów. <br /> Dania, które przygotowują są
          "okraszone" domowym ciepłem, dlatego są smaczne i zdrowe
        </p>
      </section>

      <section className={styles.moderatorsSection}>
        <h2 className={styles.h2}>Moderators</h2>
        <Moderators />
      </section>
    </main>
  );
}

export default Home;
