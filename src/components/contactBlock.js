import React from 'react';
import { ContactWrap } from './contactBlock.style';

import IconEmail from '../images/email.svg';
import IconTelegram from '../images/telegram.svg';
import SocialIcons from './socialIcons';

const ContactBlock = () => (
  <ContactWrap>
    <p>
      To contact me you can send an <strong>email</strong>, message to{' '}
      <strong>telegram</strong> or in <strong>the form</strong> below.
      <br />
      You can also find me in <strong>social networks</strong>.
    </p>
    <p className="base">
      <a href="mailto:email@lapkov.com">
        <IconEmail height="20" width="20" className="iconStyle" fill="#777" />
        {` `}email@lapkov.com
      </a>
      <br />
      <a href="https://t.me/aslapkov" target="_blank" rel="noopener noreferrer">
        <IconTelegram
          height="20"
          width="20"
          className="iconStyle"
          fill="#777"
        />
        {` `}telegram@aslapkov
      </a>
    </p>
    <p className="social">
      <SocialIcons num="30" color="#777" classSelect="iconSocStyle" />
    </p>
  </ContactWrap>
);

export default ContactBlock;
