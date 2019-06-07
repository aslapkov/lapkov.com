import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import header from './header.module.css'

const Header = ({ siteTitle }) => (
  <header className={header.headerFix}>
    <div className={header.headerWrap}>
      <Link to="/" className={header.headerLogo}>
        <span>{siteTitle}</span>
      </Link>
      <Link to="/contact/" className={header.headerTouch}>
        <span className={header.mask}></span>
        <span className={header.label}>Contact me!</span>
      </Link>
    </div>
  </header>
)

Header.defaultProps = {
  siteTitle: ``,
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

export default Header
