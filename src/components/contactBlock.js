import React from 'react';
import { ContactWrap } from './contactBlock.style';

import IconEmail from '../images/email.svg';
import IconTelegram from '../images/telegram.svg';
import IconGithub from '../images/github.svg';
import IconVk from '../images/vk.svg';
import IconTwitter from '../images/twitter.svg';

const ContactBlock = () => (
  <ContactWrap>
    <p>
      Hello friend!
      <br />
      To contact me you can will send email or message to telegram.
      <br />
      You will also find me in social networks.
    </p>
    <p className="base">
      <a href="mailto:email@lapkov.com">
        <IconEmail height="80" width="80" className="iconStyle" fill="#777" />
        <br />
        email@lapkov.com
      </a>
      <span>or</span>
      <a href="https://t.me/aslapkov" target="_blank" rel="noopener noreferrer">
        <IconTelegram
          height="80"
          width="80"
          className="iconStyle"
          fill="#777"
        />
        <br />
        telegram@aslapkov
      </a>
    </p>
    <p className="social">
      <a
        href="https://github.com/aslapkov"
        target="_blank"
        rel="noopener noreferrer"
      >
        <IconGithub
          height="45"
          width="45"
          className="iconSocStyle"
          fill="#777"
        />
      </a>
      <span>/</span>
      <a
        href="https://vk.com/a.s.lapkov"
        target="_blank"
        rel="noopener noreferrer"
      >
        <IconVk height="45" width="45" className="iconSocStyle" fill="#777" />
      </a>
      <span>/</span>
      <a
        href="https://twitter.com/aslapkov"
        target="_blank"
        rel="noopener noreferrer"
      >
        <IconTwitter
          height="45"
          width="45"
          className="iconSocStyle"
          fill="#777"
        />
      </a>
    </p>
  </ContactWrap>
);

export default ContactBlock;
