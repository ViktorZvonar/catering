import React from 'react';
import styles from './Home.module.css';
import Moderators from 'components/Moderators/Moderators';
import Hits from 'components/Hits/Hits';

function Home() {
  return (
    <main>
      <section className={styles.firstSection}>
        <h1 className={styles.h1}>
          Obsługujemy zarówno szkoły, firmy jak i klientów indywidualnych
        </h1>
        <p className={styles.info}>
          Jesteśmy Przedsiębiorstwem Społecznym Decyzją nrD/4/2022 z dnia
          2022–12–12 Wojewody Pomorskiego, w którym zatrudnione są osoby z
          Centrum INTEGRACJI SPOŁECZNEJ, jak i osoby z wykluczeniem społecznym.
          Nasza historia zaczęła się w 2018 roku z inicjatywy Stowarzyszenia
          Eduq, które powołało do istnienia Warsztat Gastronomiczny z siedzibą w
          Lęborku przy ul. Krzywoustego 1 (w dawnym budynku ZWAR-u) W warsztacie
          tym znalazło zatrudnienie 5 Pań z Centrum Integracji Społecznej, które
          to zostało powołane do istnienia przy Stowarzyszeniu Eduq. Od
          początku, naszym klientami zostały przede wszystkim seniorzy, z
          którymi jesteśmy, między innymi, do dnia dzisiejszego. Z czasem grono
          klientów się poszerzało, łącznie z podopiecznymi MOPs-u. Dzisiaj nasza
          ekipa liczy 9 osób i obsługujemy przedszkola, szkoły, firmy i osoby
          indywidualne. Jesteśmy w trakcie remontu nowego lokalu
          gastronomicznego, w Lęborku przy ul. Kolonia 18 i mamy nadzieję
          poszerzyć grono naszych zadowolonych klientów, do których Was
          zapraszamy. A zapewniamy, że warto..., bo obiady są domowe, smaczne i
          zdrowe.
        </p>
      </section>

      <section className={styles.moderatorsSection}>
        <h2 className={styles.h2}>Nasze przeboje</h2>
        <Hits />
      </section>

      <section className={styles.moderatorsSection}>
        <h2 className={styles.h2}>Nasi pracownicy</h2>
        <Moderators />
      </section>
    </main>
  );
}

export default Home;
