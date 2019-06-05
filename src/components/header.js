import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import headerStyle from './header.module.css'

const Header = ({ siteTitle }) => (
  <header className={headerStyle.headerFix}>
    <div className={headerStyle.headerWrap}>
      <Link className={headerStyle.headerLogo} to="/">
        <span>{siteTitle}</span>
      </Link>
      <Link className={headerStyle.headerTouch} to="/contact/">
        <span className={headerStyle.mask}></span>
        <span className={headerStyle.label}>Find me!</span>
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
