import React from 'react';

// import { Link } from 'react-router-dom';
import speakersData from '../../../data/speakers.json';
import styles from './OfferItem.module.css';

function OfferItem() {
  return speakersData.map(speaker => (
    <a
      key={speaker.id}
      href={process.env.PUBLIC_URL + speaker.url}
      className={styles.speakerCard}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        className={styles.speakerImage}
        src={process.env.PUBLIC_URL + speaker.photo}
        alt={speaker.name}
      />
      <div className={styles.speakerName}>{speaker.name}</div>
      <div className={styles.speakerTitle}>{speaker.title}</div>
    </a>
  ));
}

export default OfferItem;
