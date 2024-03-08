import React from 'react';
import styles from './Kontakts.module.css';
import { useState } from 'react';

function Kontakts() {
  const [matList, setMatlist] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const totalPages = Math.ceil(matList.length / itemsPerPage);

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const currentItems = matList.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

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
      <section className={styles.secondSection}>
        {currentItems.map((material, index) => (
          <div key={index} className={styles.dataContainer}>
            <div className={styles.textContainer}>
              <h3 className={styles.h3}>{material.title}</h3>
              <p>{material.author}</p>
            </div>
            <button className={styles.downloadButton}>
              <a
                href={material.url}
                download={`Document_${
                  (currentPage - 1) * itemsPerPage + index + 1
                }.pdf`}
              >
                PDF
              </a>
            </button>
          </div>
        ))}
        <div className={styles.pagination}>
          <button onClick={handlePrev} hidden={currentPage <= 1}>
            Previous
          </button>
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <button onClick={handleNext} hidden={currentPage >= totalPages}>
            Next
          </button>
        </div>
      </section>
    </main>
  );
}

export default Kontakts;
