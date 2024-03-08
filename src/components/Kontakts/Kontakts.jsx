import React from 'react';
import styles from './Kontakts.module.css';

function Kontakts() {
  return (
    <main>
      <section className={styles.firstSection}>
        <h1 className={styles.h1}>Reference</h1>
        <div className={styles.refContainer}>
          <h2 className={styles.h1}>Original:</h2>
          <p className={styles.p}>
            Миротворча освіта заради консолідованої та людиноцентричної Європи:
            Доповіді всеукр. наук.-практ. конф., м.Київ, 16 червня 2023 р.:
            Київ, Київський університет імені Бориса Грінченка, 2023. – 150 с.
          </p>
          <h2 className={styles.h1}>English:</h2>
          <p className={styles.p}>
            Peace Education for Consolidated and Human-Centered Europe:
            Proceedings of the All-Ukrainian Scientific and Practical
            Conference, Kyiv, June 16, 2023: Kyiv, Borys Grinchenko Kyiv
            University, 2023. – 150 pages.
          </p>
        </div>
        <p className={styles.p}>ISBN: 978-9943-26-234-1</p>
        <p className={styles.p}>DOI: 10.28925/2023.166150conf</p>
      </section>
      <section className={styles.secondSection}></section>
    </main>
  );
}

export default Kontakts;
