import * as React from "react"
import PropTypes from "prop-types"
import { useStateMachine } from "little-state-machine"
import NavBar from "./navbar"
import Header from "./header"
import Footer from "./footer"
import * as styles from "./layout.module.css"

const Layout = ({
  children,
  location,
  defaultLang,
}) => {
  const {
    state: { language }
  } = useStateMachine()
  const { currentLanguage } =
    language && language.currentLanguage
      ? language
      : { currentLanguage: defaultLang }

  return (
    <>
      <div className={styles.imgDiv} />
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.col3}>
            <NavBar currentLanguage={currentLanguage} />
          </div>
          <div className={styles.col9}>
            <Header currentLanguage={currentLanguage} />
            <div className={styles.content}>
              <div className={styles.main}>{children}</div>
              <hr />
              <Footer currentLanguage={currentLanguage} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
