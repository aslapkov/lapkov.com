import React from 'react';

import {
  FooterWrap,
  FooterLeft,
  AvailPoint,
  AvailTag,
  FooterRigth,
} from './footer.style';

const Footer = () => (
  <FooterWrap>
    <FooterLeft>
      <AvailPoint />
      <AvailTag>
        <span>Available for freelance/remote</span>
        <br />
        <span>work </span>
        <a href="mailto:email@lapkov.com">email@lapkov.com</a>
      </AvailTag>
    </FooterLeft>
    <FooterRigth>
      <div className="links">
        © {new Date().getFullYear()},{` `}
        <a
          href="https://github.com/aslapkov/lapkov.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open Source
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
