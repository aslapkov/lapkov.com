import React, { useState } from 'react';
import { ContactWrap, FormGroup, InputWrap } from './contactBlock.style';

import IconEmail from '../../images/email.svg';
import IconTelegram from '../../images/telegram.svg';
import SocialIcons from '../socialIcons';

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
};

const ContactBlock = () => {
  const [state, setState] = useState({});
  const [loading, setLoading] = useState(false);
  const [completeForm, setCompleteForm] = useState(false);
  let isInvalid = !state.name || !state.email || !state.message;

  const handleChange = e =>
    setState({ ...state, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...state,
      }),
    })
      .then(data => {
        if (!isInvalid && data.status === 200) {
          setLoading(true);
          setTimeout(() => setLoading(false), 1000);
          setCompleteForm(true);
        }
      })
      .catch(error => console.log(error));
  };

  return (
    <ContactWrap>
      <p>
        To contact me you can send an <strong>email</strong>, message to{' '}
        <strong>telegram</strong> or fill <strong>the form</strong> below.
        <br />
        You can also find me in <strong>social networks</strong>.
      </p>
      <p className="base">
        <a href="mailto:email@lapkov.com">
          <IconEmail height="20" width="20" className="iconStyle" fill="#777" />
          {` `}email@lapkov.com
        </a>
        <br />
        <a
          href="https://t.me/aslapkov"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconTelegram
            height="20"
            width="20"
            className="iconStyle"
            fill="#777"
          />
          {` `}telegram@aslapkov
        </a>
      </p>
      <h4>Contact form</h4>
      <h3>I will be glad to hear you</h3>
      <form
        name="contact"
        method="post"
        action="/"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="form-name" value="contact" />
        <p hidden>
          <label>
            Don’t fill this out:{' '}
            <input name="bot-field" onChange={handleChange} />
          </label>
        </p>
        <FormGroup>
          <InputWrap>
            <input
              autoComplete="off"
              type="text"
              onChange={handleChange}
              name="name"
              placeholder="Name"
            />
            <label className="input-label"></label>
          </InputWrap>
        </FormGroup>
        <FormGroup>
          <InputWrap>
            <input
              autoComplete="off"
              type="email"
              onChange={handleChange}
              name="email"
              placeholder="Email"
            />
            <label className="input-label"></label>
          </InputWrap>
        </FormGroup>
        <FormGroup className="full">
          <InputWrap>
            <textarea
              name="message"
              onChange={handleChange}
              placeholder="Message"
            />
            <label className="input-label"></label>
          </InputWrap>
        </FormGroup>
        {!loading && completeForm ? (
          <FormGroup className="full">
            <span className="notification">
              <i></i> Your message was sent. Thanks!
            </span>
          </FormGroup>
        ) : (
          loading && (
            <FormGroup className="full">
              <span className="loader"></span>
            </FormGroup>
          )
        )}
        <FormGroup className="full">
          <button type="submit" disabled={isInvalid}>
            <span className="mask"></span>
            {loading ? <span>Sending...</span> : <span>Send message</span>}
          </button>
        </FormGroup>
      </form>
      <div className="social">
        <SocialIcons num="30" color="#777" classSelect="iconSocStyle" />
      </div>
    </ContactWrap>
  );
};

export default ContactBlock;
