// import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

import { HeaderWrap, HeaderCol, HeaderLogo, HeaderTouch } from './header.style';

const Header = ({ siteTitle }) => (
  <HeaderWrap>
    <HeaderCol>
      <HeaderLogo>
        <AniLink fade to="/">
          <span>{siteTitle}</span>
        </AniLink>
      </HeaderLogo>
      <HeaderTouch>
        <AniLink fade to="/contact/">
          <span className="mask"></span>
          <span className="label">Contact me!</span>
        </AniLink>
      </HeaderTouch>
    </HeaderCol>
  </HeaderWrap>
);

Header.defaultProps = {
  siteTitle: ``,
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

export default Header;
