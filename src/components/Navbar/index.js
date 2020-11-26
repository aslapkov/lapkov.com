import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import styles from './NavBar.module.css';

const NavBar = ({ siteLinks }) => (
  <div className={styles.nav}>
    <div className={styles.collapse}>
      <ul>
        {siteLinks.map((data) => (
          <li key={data.id}>
            <Link to={data.slug}>
              <span className={styles.hide}>{data.name}</span>
              <span className={styles.show}>{data.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

NavBar.defaultProps = {
  siteLinks: [],
};

NavBar.propTypes = {
  siteLinks: PropTypes.arrayOf(PropTypes.object),
};

export default NavBar;
