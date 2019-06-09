import React from 'react';

import { FooterWrap, AvailPoint, AvailTag } from './footer.style';

const Footer = () => (
  <FooterWrap>
    <div style={{ float: `left` }}>
      <AvailPoint />
      <AvailTag>
        Available for freelance projects
        <br />
        Please contact me by
        {` `}
        <a href="mailto:email@lapkov.com">email@lapkov.com</a>
      </AvailTag>
    </div>
    <div style={{ float: `right`, textAlign: `right` }}>
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
  </FooterWrap>
);

export default Footer;
