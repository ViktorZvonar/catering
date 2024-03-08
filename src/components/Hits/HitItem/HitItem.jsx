import React from 'react';
import HitsData from '../../../data/hits.json';
import styles from './HitItem.module.css';

function HitItem() {
  return HitsData.map((moderator, index) => {
    const isReversed = index % 2 === 1;

    return (
      <figure
        key={moderator.id}
        className={`${styles.moderatorCard} ${
          isReversed ? styles.reversed : ''
        }`}
      >
        <img
          className={styles.moderatorImage}
          src={process.env.PUBLIC_URL + moderator.photo}
          alt={moderator.name}
        />
        <figcaption className={styles.moderatorText}>
          <p className={styles.moderatorName}>{moderator.name}</p>
          <p className={styles.moderatorTitle}>{moderator.title}</p>
        </figcaption>
      </figure>
    );
  });
}

export default HitItem;
