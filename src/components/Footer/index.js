import React from 'react';

import {
  FooterWrap,
  FooterLeft,
  AvailPoint,
  AvailTag,
  FooterRigth,
} from './footer.style';

let year = new Date().getFullYear();

const Footer = () => (
  <FooterWrap>
    <FooterLeft>
      <AvailPoint />
      <AvailTag>
        <span>Available for a full-time </span>
        <br />
        <span>position </span>
        <a href="mailto:email@lapkov.com">email@lapkov.com</a>
      </AvailTag>
    </FooterLeft>
    <FooterRigth>
      <div className="links">
        {year},{` `}
        <a href="https://github.com/aslapkov/lapkov.com">Open Source</a>
        <br />
        Built with
        {` `}
        <a href="https://github.com/gatsbyjs/gatsby">Gatsby</a>
        <br />
        Deploy to
        {` `}
        <a href="https://www.netlify.com/docs/">Netlify</a>
      </div>
    </FooterRigth>
  </FooterWrap>
);

export default Footer;
