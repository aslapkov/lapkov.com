import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#61dafb`,
      marginBottom: `1.45rem`,
      right: `0`,
      top: `0`,
      width: `100%`,
      zIndex: `1`,
      height: `70px`,
      transition: `transform 0.6s ease 0s`,
    }}
  >
    <div
      style={{
        fontFamily: `"Poppins", sans-serif`,
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <Link
        to="/"
        style={{
          color: `white`,
          textDecoration: `none`,
          fontWeight: `bold`,
          textTransform: `uppercase`,
        }}
      >
        {siteTitle}
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
