import React from 'react';
import styles from './Footer.module.css';

let year = new Date().getFullYear();

export default () => (
  <footer>
    <div className={styles.left}>
      <span className={styles.pointAnimation} />
      <p className={styles.availTag}>
        <span>Available for a full-time</span>
        <br />
        <span>position</span>
        {` `}
        <a href="mailto:email@lapkov.com">email@lapkov.com</a>
      </p>
    </div>
    <div className={styles.right}>
      <div className={styles.links}>
        {year},{` `}
        <a href="https://github.com/aslapkov/lapkov.com">Open Source</a>
        <br />
        Built with <a href="https://github.com/gatsbyjs/gatsby">Gatsby</a>
        <br />
        Deploy to <a href="https://www.netlify.com/docs/">Netlify</a>
      </div>
    </div>
  </footer>
);
