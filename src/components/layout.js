import * as React from "react"
import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"
import { useStateMachine } from "little-state-machine"
// import { GatsbyImage } from "gatsby-plugin-image"
import { StaticImage } from "gatsby-plugin-image"
import NavBar from "./Navbar"
import Header from "./Header"
import Footer from "./Footer"
import * as styles from "./layout.module.css"
import "./global.css"

const Layout = ({
  children,
  location,
  defaultLang,
}) => {
  // const data = useStaticQuery(
  //   graphql`
  //     query {
  //       file(relativePath: { eq: "back.png" }) {
  //         childImageSharp {
  //           gatsbyImageData(layout: FULL_WIDTH)
  //         }
  //       }
  //     }
  //   `
  // )

  const {
    state: { language }
  } = useStateMachine()
  const { currentLanguage } =
    language && language.currentLanguage
      ? language
      : { currentLanguage: "en" }

  return (
    <React.Fragment>
      <div className={styles.imgDiv}>
        {/*<GatsbyImage image={data.file.childImageSharp.gatsbyImageData} />*/}
        <StaticImage
          src="../images/back.png"
          layout="fullWidth"
          alt="Back image"
        />
      </div>
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
    </React.Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
