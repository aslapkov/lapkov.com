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
      To contact me you can will send email or telegram message.
      <br />
      You will also find me in social networks.
    </p>
    <p className="base">
      <a href="mailto:email@lapkov.com">
        <IconEmail height="90" width="90" className="iconStyle" fill="#777" />
        <br />
        email@lapkov.com
      </a>
      <span>or</span>
      <a href="https://t.me/aslapkov" target="_blank" rel="noopener noreferrer">
        <IconTelegram
          height="90"
          width="90"
          className="iconStyle"
          fill="#777"
        />
        <br />
        @aslapkov
      </a>
    </p>
    <p className="social">
      <a
        href="https://github.com/aslapkov"
        target="_blank"
        rel="noopener noreferrer"
      >
        <IconGithub
          height="50"
          width="50"
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
        <IconVk height="50" width="50" className="iconSocStyle" fill="#777" />
      </a>
      <span>/</span>
      <a
        href="https://twitter.com/aslapkov"
        target="_blank"
        rel="noopener noreferrer"
      >
        <IconTwitter
          height="50"
          width="50"
          className="iconSocStyle"
          fill="#777"
        />
      </a>
    </p>
  </ContactWrap>
);

export default ContactBlock;
