import React from 'react';
import * as styles from './SkillsBlock.module.css';

const SkillsBlock = ({ data }) => (
  <div style={{ marginTop: `40px` }}>
    {data.map((elem, i) => {
      return (
        <div className={styles.skills} key={i}>
          <span className={styles.progress}>{elem.label}</span>
          <div className={styles.barWrap}>
            <span
              data-width={elem.percent}
              style={{ width: `${elem.percent}%` }}
            >
              <strong style={{ opacity: 1 }}>
                <i>{elem.percent}</i>%
              </strong>
            </span>
          </div>
        </div>
      );
    })}
  </div>
);

export default SkillsBlock;
