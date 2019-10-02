import React from 'react';

import IconGithub from '../images/github.svg';
import IconTwitter from '../images/twitter.svg';

const SocialIcons = ({ num, color, classSelect }) => {
  const classSel = classSelect ? classSelect : ``;

  return (
    <React.Fragment>
      <a
        href="https://twitter.com/aslapkov"
        target="_blank"
        rel="noopener noreferrer"
      >
        <IconTwitter
          height={num}
          width={num}
          className={classSel}
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
          className={classSel}
          fill={color}
        />
      </a>
    </React.Fragment>
  );
};

export default SocialIcons;
