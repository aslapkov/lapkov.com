import React, { Fragment } from 'react';
import IconGithub from '../../images/github.svg';
import IconTwitter from '../../images/twitter.svg';
import IconLinkedin from '../../images/linkedin.svg';
import styles from './SocialIcons.module.css';

const SocialIcons = ({ num, color }) => (
  <Fragment>
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
  </Fragment>
);

export default SocialIcons;
