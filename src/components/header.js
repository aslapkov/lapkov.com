import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import { HeaderWrap, HeaderCol, HeaderLogo, HeaderTouch } from './header.style';

const Header = ({ siteTitle }) => (
  <HeaderWrap>
    <HeaderCol>
      <HeaderLogo>
        <Link to="/">
          <span>{siteTitle}</span>
        </Link>
      </HeaderLogo>
      <HeaderTouch>
        <Link to="/contact/">
          <span className="mask"></span>
          <span className="label">Contact me!</span>
        </Link>
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
