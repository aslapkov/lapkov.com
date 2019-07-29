import React from 'react';
import { ContactWrap } from './contactBlock.style';

import IconEmail from '../images/email.svg';
import IconTelegram from '../images/telegram.svg';

const ContactBlock = () => (
  <ContactWrap>
    <p>
      <a href="mailto:email@lapkov.com">
        <IconEmail height="100" width="100" className="iconStyle" fill="#777" />
        <br />
        email@lapkov.com
      </a>{' '}
      – my email address
    </p>
    <p>
      <span style={{ textTransform: `uppercase` }}>or</span>
    </p>
    <p>
      <a href="https://t.me/aslapkov" target="_blank" rel="noopener noreferrer">
        <IconTelegram
          height="100"
          width="100"
          className="iconStyle"
          fill="#777"
        />
        <br />
        @aslapkov
      </a>{' '}
      – find me on the telegram
    </p>
  </ContactWrap>
);

export default ContactBlock;
