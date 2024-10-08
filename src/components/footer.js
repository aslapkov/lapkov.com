import * as React from "react"
import footer from "../data/footer"
import SocialIcons from "./social-icons"
import * as styles from "./footer.module.css"

const Footer = ({ currentLanguage }) => (
  <footer className={styles.footer}>
    <div className={styles.left}>
      <span className={styles.pointAnimation} />
      <p className={styles.availTag}>
        <span>{footer[currentLanguage].hire}</span>
        <a href="mailto:email@lapkov.com">email@lapkov.com</a>
      </p>
    </div>
    <div className={styles.center}>
      <SocialIcons num="30" color="#777" />
    </div>
    <div className={styles.right}>
      <div className={styles.links}>
        {new Date().getFullYear()},{" "}
        <a href="https://github.com/aslapkov/lapkov.com">Open Source</a>
        <br />
        {footer[currentLanguage].built} <a href="https://github.com/gatsbyjs/gatsby">Gatsby</a>
        <br />
        {footer[currentLanguage].deploy} <a href="https://www.netlify.com/docs/">Netlify</a>
      </div>
    </div>
  </footer>
)

export default Footer
