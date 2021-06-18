import * as React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import translateLink from "../logic/translateLink"
import nav from "../../data/nav"
import * as styles from "./NavBar.module.css"

const NavBar = ({ currentLanguage }) => (
  <div className={styles.nav}>
    <div className={styles.collapse}>
      <ul>
        <li>
          <Link to={translateLink("/", currentLanguage)}>
            <span className={styles.hide}>
              {nav[currentLanguage].home}
            </span>
            <span className={styles.show}>
              {nav[currentLanguage].home}
            </span>
          </Link>
        </li>
        <li>
          <Link to={translateLink("/skills", currentLanguage)}>
            <span className={styles.hide}>
              {nav[currentLanguage].skills}
            </span>
            <span className={styles.show}>
              {nav[currentLanguage].skills}
            </span>
          </Link>
        </li>
        <li>
          <Link to={translateLink("/works", currentLanguage)}>
            <span className={styles.hide}>
              {nav[currentLanguage].works}
            </span>
            <span className={styles.show}>
              {nav[currentLanguage].works}
            </span>
          </Link>
        </li>
        <li>
          <Link to={translateLink("/experience", currentLanguage)}>
            <span className={styles.hide}>
              {nav[currentLanguage].experience}
            </span>
            <span className={styles.show}>
              {nav[currentLanguage].experience}
            </span>
          </Link>
        </li>
        <li>
          <Link to={translateLink("/contact", currentLanguage)}>
            <span className={styles.hide}>
              {nav[currentLanguage].contact}
            </span>
            <span className={styles.show}>
              {nav[currentLanguage].contact}
            </span>
          </Link>
        </li>
      </ul>
    </div>
  </div>
)

NavBar.defaultProps = {
  nav: {},
}

NavBar.propTypes = {
  nav: PropTypes.object,
}

export default NavBar
