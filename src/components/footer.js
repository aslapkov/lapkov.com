import React from 'react';

import { FooterWrap, AvailPoint, AvailTag, FooterRigth } from './footer.style';

const Footer = () => (
  <FooterWrap>
    <div style={{ float: `left`, width: `70%` }}>
      <AvailPoint />
      <AvailTag>
        <span>Available for freelance/remote</span>
        <br />
        <span>work </span>
        <a href="mailto:email@lapkov.com">email@lapkov.com</a>
      </AvailTag>
    </div>
    <FooterRigth>
      <div className="links">
        © {new Date().getFullYear()}, Open
        {` `}
        <a
          href="https://github.com/aslapkov/lapkov.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Source
        </a>
        .<br />
        Built with
        {` `}
        <a
          href="https://github.com/gatsbyjs/gatsby"
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
    </FooterRigth>
  </FooterWrap>
);

export default Footer;
