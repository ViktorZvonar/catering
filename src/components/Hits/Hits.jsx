import React from 'react';
import styles from './Hits.module.css';
import HitItem from './HitItem/HitItem';

function Hits() {
  return (
    <div className={styles.moderatorsContainer}>
      <HitItem />
    </div>
  );
}

export default Hits;
