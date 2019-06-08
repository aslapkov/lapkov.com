import React from 'react';

import footer from './footer.module.css';
import layout from './layout.module.css';

const Footer = () => (
  <footer className={layout.footerLayout}>
    <div className={footer.left}>
      <span className={footer.availablePoint}></span>
      <span className={footer.availableTag}>
        Available for freelance projects
        <br />
        Please contact me by
        {` `}
        <a href="mailto:email@lapkov.com">email@lapkov.com</a>
      </span>
    </div>
    <div className={footer.right}>
      <div style={{ fontSize: `.75em` }}>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a
          href="https://github.com/aslapkov/lapkov.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Gatsby
        </a>
        .<br />
        Deploy to
        {` `}
        <a
          href="https://www.netlify.com/docs/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Netlify
        </a>
        .
      </div>
    </div>
  </footer>
);

export default Footer;
