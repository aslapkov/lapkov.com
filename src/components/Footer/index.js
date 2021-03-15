import React from 'react';
import * as styles from './Footer.module.css';

const Footer = () => (
  <footer>
    <div className={styles.left}>
      <span className={styles.pointAnimation} />
      <p className={styles.availTag}>
        <span>I'm available for hire</span>
        <br />
        <a href="mailto:email@lapkov.com">email@lapkov.com</a>
      </p>
    </div>
    <div className={styles.right}>
      <div className={styles.links}>
        {new Date().getFullYear()},{' '}
        <a href="https://github.com/aslapkov/lapkov.com">Open Source</a>
        <br />
        Built with <a href="https://github.com/gatsbyjs/gatsby">Gatsby</a>
        <br />
        Deploy to <a href="https://www.netlify.com/docs/">Netlify</a>
      </div>
    </div>
  </footer>
);

export default Footer;
