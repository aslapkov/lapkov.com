import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faAlignRight } from '@fortawesome/free-solid-svg-icons';

import { HeaderWrap, HeaderCol, HeaderLogo, HeaderTouch } from './header.style';

const Header = ({ siteTitle, siteLinks }) => {
  const [collapse, setCollapse] = useState(false);

  const active = collapse ? `collapse` : ``;

  return (
    <HeaderWrap>
      <HeaderCol>
        <HeaderLogo>
          <Link to="/">
            <span>{siteTitle}</span>
          </Link>
        </HeaderLogo>
        <HeaderTouch>
          <button
            onClick={() => setCollapse(!collapse)}
            type="button"
            className="button"
          >
            <span className="mask"></span>
            <span className="label">
              <span className="iconMenu">
                <FontAwesomeIcon icon={faAlignRight} />
              </span>
            </span>
          </button>
          <Link to="/contact/" className="contact">
            <span className="mask"></span>
            <span className="label">
              <b>Contact me!</b>
              <span className="iconCall">
                <FontAwesomeIcon icon={faCoffee} />
              </span>
            </span>
          </Link>
          <nav className={active}>
            <div className="navbarNav">
              <ul>
                {siteLinks.map(data => (
                  <li key={data.id}>
                    <Link to={data.slug}>
                      <span>– {data.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </HeaderTouch>
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
