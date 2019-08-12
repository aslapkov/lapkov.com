import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

import IconMobCont from '../images/plane.svg';
import IconCont from '../images/paper-plane.svg';

import {
  HeaderWrap,
  HeaderCol,
  HeaderLogo,
  HeaderTouch,
  HeaderNav,
} from './header.style';

const Header = ({ siteTitle, siteLinks }) => {
  const [collapse, setCollapse] = useState(false);

  return (
    <HeaderWrap>
      <HeaderCol>
        <HeaderLogo>
          <Link to="/">
            <span>{siteTitle}</span>
          </Link>
        </HeaderLogo>
        <HeaderTouch className={collapse ? `menuOpen` : ``}>
          <Link to="/contact/" className="contact">
            <span className="mask"></span>
            <span className="label">
              <b>Contact me!</b>
              <span className="iconPlane">
                <IconCont height="20" width="20" fill="#fff" />
              </span>
              <span className="iconCall">
                <IconMobCont height="25" width="25" fill="#000" />
              </span>
            </span>
          </Link>
          <button
            onClick={() => setCollapse(!collapse)}
            type="button"
            className="button"
          >
            <span className="iconMenu">
              <span className="lineMenu lineTop"></span>
              <span className="lineMenu lineBottom"></span>
            </span>
          </button>
        </HeaderTouch>
        <HeaderNav className={collapse ? `collapse` : ``}>
          <div className="navbarNav">
            <ul>
              {siteLinks.map(data => (
                <li key={data.id}>
                  <Link to={data.slug}>
                    <span>
                      {'– '}
                      {data.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </HeaderNav>
      </HeaderCol>
    </HeaderWrap>
  );
};

Header.defaultProps = {
  siteTitle: ``,
  siteLinks: [],
};

Header.propTypes = {
  siteTitle: PropTypes.string,
  siteLinks: PropTypes.arrayOf(PropTypes.object),
};

export default Header;
