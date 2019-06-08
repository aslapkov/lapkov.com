import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import navbar from './navbar.module.css';

const NavBar = ({ siteLinks }) => (
  <nav className={navbar.navDef}>
    <div className={navbar.navHeader}>
      {/*<button type="button" className={navToggle}>
        <span></span>
        <span></span>
      </button>*/}
    </div>
    <div className={navbar.navCollapse}>
      <ul>
        {siteLinks.map(data => (
          <li key={data.id}>
            <Link to={data.slug}>
              <span className={navbar.hide}>{data.name}</span>
              <span className={navbar.show}>{data.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </nav>
);

NavBar.defaultProps = {
  siteLinks: [],
};

NavBar.propTypes = {
  siteLinks: PropTypes.arrayOf(PropTypes.object),
};

export default NavBar;
