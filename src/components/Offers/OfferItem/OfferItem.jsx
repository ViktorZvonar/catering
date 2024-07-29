import React from 'react';

import { Link } from 'react-router-dom';
import offerData from '../../../data/offers.json';
import styles from './OfferItem.module.css';

function OfferItem() {
  return offerData.map(offer => {
    const isExternalLink = offer.url.endsWith('.jpg');

    if (isExternalLink) {
      return (
        <a
          key={offer.id}
          href={offer.url}
          className={styles.speakerCard}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className={styles.speakerImage}
            src={process.env.PUBLIC_URL + offer.photo}
            alt={offer.name}
          />
          <p className={styles.speakerName}>{offer.name}</p>
          <p className={styles.speakerTitle}>{offer.title}</p>
        </a>
      );
    } else {
      return (
        <Link
          key={offer.id}
          to={`/details/${offer.id}`}
          className={styles.speakerCard}
        >
          <img
            className={styles.speakerImage}
            src={process.env.PUBLIC_URL + offer.photo}
            alt={offer.name}
          />
          <div className={styles.speakerName}>{offer.name}</div>
          <div className={styles.speakerTitle}>{offer.title}</div>
        </Link>
      );
    }
  });
}

export default OfferItem;
