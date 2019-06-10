import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import { NavStyle, NavHeader, NavCollapse } from './navbar.style';

const NavBar = ({ siteLinks }) => (
  <NavStyle>
    <NavHeader>
      {/*<button type="button" className={navToggle}>
        <span></span>
        <span></span>
      </button>*/}
    </NavHeader>
    <NavCollapse>
      <ul>
        {siteLinks.map(data => (
          <li key={data.id}>
            <Link to={data.slug}>
              <span className="hide">{data.name}</span>
              <span className="show">{data.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </NavCollapse>
  </NavStyle>
);

NavBar.defaultProps = {
  siteLinks: [],
};

NavBar.propTypes = {
  siteLinks: PropTypes.arrayOf(PropTypes.object),
};

export default NavBar;
