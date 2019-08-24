import React from 'react';
import { ContactWrap } from './contactBlock.style';

import IconEmail from '../images/email.svg';
import IconTelegram from '../images/telegram.svg';
import SocialIcons from './socialIcons';

const ContactBlock = () => (
  <ContactWrap>
    <p>
      Hello friend!
      <br />
      To contact me you can send an email or a message to telegram.
      <br />
      You can also find me in social networks.
    </p>
    <p className="base">
      <a href="mailto:email@lapkov.com">
        <IconEmail height="100" width="100" className="iconStyle" fill="#777" />
        <br />
        email@lapkov.com
      </a>
      <span>or</span>
      <a href="https://t.me/aslapkov" target="_blank" rel="noopener noreferrer">
        <IconTelegram
          height="100"
          width="100"
          className="iconStyle"
          fill="#777"
        />
        <br />
        telegram@aslapkov
      </a>
    </p>
    <p className="social">
      <SocialIcons num="40" color="#777" classSelect="iconSocStyle" />
    </p>
  </ContactWrap>
);

export default ContactBlock;
