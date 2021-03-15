import React from 'react';
import * as styles from './WorksBlock.module.css';

const WorksBlock = ({ data }) => {
  return (
    <div style={{ marginTop: '40px' }}>
      {data.map((elem, i) => {
        const first = i === 0 && styles.first;

        return (
          <div className={`${styles.works} ${first}`} key={i}>
            <div className={styles.col2}>
              <span className={styles.count}>
                <span>{i + 1}</span>
              </span>
            </div>
            <div className={styles.col2}>
              <span className={styles.year}>{elem.year}</span>
            </div>
            <div className={styles.col5}>
              <span>{elem.desc}</span>
            </div>
            <div className={styles.col3}>
              <span className={styles.siteUrl}>
                <a href={elem.siteUrl} rel="nofollow">
                  {elem.siteName}
                </a>
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default WorksBlock;
