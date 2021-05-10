import * as React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import SocialIcons from "../SocialIcons"
import IconCont from "../../images/envelope.svg"
import * as styles from "./Header.module.css"

const Header = ({ siteTitle, siteLinks }) => {
  const [collapse, setCollapse] = React.useState(false)

  return (
    <header>
      <div className={styles.col}>
        <div className={styles.logo}>
          <Link to="/">
            <span>{siteTitle}</span>
          </Link>
        </div>
        <div
          className={`${styles.touch}${collapse ? " " + styles.menuOpen : ""}`}
        >
          <Link to="/contact/" className={styles.contact}>
            <span className={styles.mask}></span>
            <span className={styles.label}>
              <b>Contact me</b>
              <span className={styles.iconCall}>
                <IconCont height="25" width="25" fill="#000" />
              </span>
            </span>
          </Link>
          <button
            onClick={() => setCollapse(!collapse)}
            type="button"
            className={styles.button}
          >
            <span className={styles.iconMenu}>
              <span className={`${styles.lineMenu} ${styles.lineTop}`}></span>
              <span
                className={`${styles.lineMenu} ${styles.lineBottom}`}
              ></span>
            </span>
          </button>
        </div>
        <div
          className={`${styles.nav}${collapse ? " " + styles.collapse : ""}`}
        >
          <div className={styles.navbar}>
            <ul>
              {siteLinks.map((data) => (
                <li key={data.id}>
                  <Link to={data.slug}>
                    <span>{data.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
            <p style={{ textAlign: `center` }}>
              <SocialIcons num="25" color="#000" />
            </p>
          </div>
        </div>
      </div>
    </header>
  )
}

Header.defaultProps = {
  siteTitle: ``,
  siteLinks: [],
}

Header.propTypes = {
  siteTitle: PropTypes.string,
  siteLinks: PropTypes.arrayOf(PropTypes.object),
}

export default Header
