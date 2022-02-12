import * as React from "react"
import IconGithub from "../images/github.svg"
import IconTwitter from "../images/twitter.svg"
import IconLinkedin from "../images/linkedin.svg"
import * as styles from "./social-icons.module.css"

const SocialIcons = ({ num, color }) => (
  <>
    <a
      href="https://github.com/aslapkov"
      target="_blank"
      rel="noopener noreferrer"
    >
      <IconGithub
        height={num}
        width={num}
        className={styles.iconSocStyle}
        fill={color}
      />
    </a>
    <a
      href="https://www.linkedin.com/in/aleksandr-lapkov/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <IconLinkedin
        height={num}
        width={num}
        className={styles.iconSocStyle}
        fill={color}
      />
    </a>
    <a
      href="https://twitter.com/aslapkov"
      target="_blank"
      rel="noopener noreferrer"
    >
      <IconTwitter
        height={num}
        width={num}
        className={styles.iconSocStyle}
        fill={color}
      />
    </a>
  </>
)

export default SocialIcons
