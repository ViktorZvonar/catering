import React from 'react';
import { useParams } from 'react-router-dom';
import offerData from '../../../../data/offers.json';
import styles from './OfferDetails.module.css';

function OfferDetails() {
  const { id } = useParams();
  const data = offerData.find(s => s.id === parseInt(id, 10));

  if (!data) {
    return <div>Offer not found</div>;
  }

  return (
    <main className={styles.offersContainer}>
      {data.urlDetails1 && (
        <a
          className={styles.offerLink}
          href={process.env.PUBLIC_URL + data.urlDetails1}
        >
          <div className={styles.offerCard}>
            <h1 className={styles.offerName}>{data.urlDetails1Title}</h1>
            <img
              className={styles.offerImage}
              src={process.env.PUBLIC_URL + data.urlDetails1}
              alt={data.offerName}
            />
          </div>
        </a>
      )}
      {data.urlDetails2 && (
        <a
          className={styles.offerLink}
          href={process.env.PUBLIC_URL + data.urlDetails2}
        >
          <div className={styles.offerCard}>
            <h1 className={styles.offerName}>{data.urlDetails2Title}</h1>
            <img
              className={styles.offerImage}
              src={process.env.PUBLIC_URL + data.urlDetails2}
              alt={data.offerName}
            />
          </div>
        </a>
      )}
      {data.urlDetails3 && (
        <a
          className={styles.offerLink}
          href={process.env.PUBLIC_URL + data.urlDetails3}
        >
          <div className={styles.offerCard}>
            <h1 className={styles.offerName}>{data.urlDetails3Title}</h1>
            <img
              className={styles.offerImage}
              src={process.env.PUBLIC_URL + data.urlDetails3}
              alt={data.offerName}
            />
          </div>
        </a>
      )}
    </main>
  );
}

export default OfferDetails;
