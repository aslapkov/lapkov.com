import * as React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { useStateMachine } from "little-state-machine"
import { globalHistory, navigate } from "@reach/router"
import { updateCurrentLanguage } from "../actions/languageActions"
import getNavLink from "../utils/getNavLink"
import { updateSetting } from "../actions/settingActions"
import translateLink from "../utils/translateLink"
import useOnClickOutside from "../hooks/useOnClickOutside"
import nav from "../data/nav"
import header from "../data/header"
import SocialIcons from "./social-icons"
import IconCont from "../images/envelope.svg"
import IconPdf from "../images/pdf.svg"
import * as styles from "./header.module.css"

const Header = ({ currentLanguage }) => {
  const [collapse, setCollapse] = React.useState(false)
  const { actions } = useStateMachine({
    updateCurrentLanguage,
    updateSetting,
  })
  const location = globalHistory.location
  const mobileNavRef = React.useRef(null)
  useOnClickOutside(mobileNavRef, () => setCollapse(false))

  return (
    <header ref={mobileNavRef}>
      <div className={styles.col}>
          <Link className={styles.logo} to={translateLink("/", currentLanguage)}>
            {header[currentLanguage].title}
          </Link>
        <div
          className={`${styles.touch}${collapse ? " " + styles.menuOpen : ""}`}
        >
          <select
            className={styles.contactSelect}
            aria-label="Select a language"
            onChange={(e) => {
              const selectedLanguage = e.target.value
              actions.updateCurrentLanguage(e.target.value)

              let url = location.pathname.substr(1)

              switch (url) {
                case "ru/":
                  url = "ru"
                  break
              }

              navigate(getNavLink(url, selectedLanguage))
            }}
            value={currentLanguage}
          >
            {/* eslint-disable jsx-a11y/accessible-emoji */}
            <option value="en">🇦🇺 ENG</option>
            <option value="ru">🇷🇺 РУС</option>
            {/* eslint-enable jsx-a11y/accessible-emoji */}
          </select>
          <Link
            to="/cv.pdf"
            className={styles.contact}
          >
            <IconPdf style={{ zIndex: 10 }} height="25" width="25" />
            <span className={styles.mask}></span>
            <span className={styles.label}>
              <b>{header[currentLanguage].contacts}</b>
              <span className={styles.iconCall}>
                <IconCont height="25" width="25" fill="#000" />
              </span>
            </span>
          </Link>
          <button
            type="button"
            className={styles.button}
            aria-label="Navigation"
            onClick={() => setCollapse(!collapse)}
          >
            <span className={styles.iconMenu}>
              <span className={`${styles.lineMenu} ${styles.lineTop}`}></span>
              <span
                className={`${styles.lineMenu} ${styles.lineBottom}`}
              ></span>
            </span>
          </button>
        </div>
      </div>
      <div
        className={`${styles.nav}${collapse ? " " + styles.collapse : ""}`}
      >
        <div className={styles.navbar}>
          <ul>
            <li>
              <Link to={translateLink("/", currentLanguage)}>
                <span>{nav[currentLanguage].home}</span>
              </Link>
            </li>
            <li>
              <Link to={translateLink("/skills/", currentLanguage)}>
                <span>{nav[currentLanguage].skills}</span>
              </Link>
            </li>
            <li>
              <Link to={translateLink("/works/", currentLanguage)}>
                <span>{nav[currentLanguage].works}</span>
              </Link>
            </li>
            <li>
              <Link to={translateLink("/experience/", currentLanguage)}>
                <span>{nav[currentLanguage].experience}</span>
              </Link>
            </li>
            <li>
              <Link to={translateLink("/contact/", currentLanguage)}>
                <span>{nav[currentLanguage].contact}</span>
              </Link>
            </li>
          </ul>
          <div className={styles.navbarSoc}>
            <SocialIcons num="25" color="#000" />
          </div>
        </div>
      </div>
    </header>
  )
}

Header.defaultProps = {
  currentLanguage: "",
}

Header.propTypes = {
  currentLanguage: PropTypes.string,
}

export default Header
