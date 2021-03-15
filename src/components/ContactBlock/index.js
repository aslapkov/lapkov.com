import React, { useState } from 'react';
import IconEmail from '../../images/email.svg';
import IconTelegram from '../../images/telegram.svg';
import SocialIcons from '../SocialIcons';
import * as styles from './ContactBlock.module.css';

const encode = (data) => {
  return Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&');
};

const ContactBlock = () => {
  const [state, setState] = useState({});
  const [loading, setLoading] = useState(false);
  const [completeForm, setCompleteForm] = useState(false);
  let isInvalid = !state.name || !state.email || !state.message;

  const handleChange = (e) =>
    setState({ ...state, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    fetch('/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...state,
      }),
    })
      .then((data) => {
        if (!isInvalid && data.status === 200) {
          setLoading(true);
          setTimeout(() => setLoading(false), 1000);
          setCompleteForm(true);
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className={styles.contact}>
      <p>
        To contact me you can send an <strong>email</strong>, message to{' '}
        <strong>telegram</strong> or fill <strong>the form</strong> below.
        <br />
        You can also find me in <strong>social networks</strong>.
      </p>
      <p className={styles.base}>
        <a href="mailto:email@lapkov.com">
          <IconEmail
            height="20"
            width="20"
            className={styles.iconStyle}
            fill="#777"
          />{' '}
          email@lapkov.com
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
            className={styles.iconStyle}
            fill="#777"
          />{' '}
          telegram@aslapkov
        </a>
      </p>
      <h4>Contact form</h4>
      <h3>I'll be glad to hear from you</h3>
      <form
        name="contact"
        method="post"
        action="/"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
      >
        <input
          type="hidden"
          name="form-name"
          aria-label="Form name"
          value="contact"
        />
        <p hidden>
          <label htmlFor="bot-field">
            Don’t fill this out:{' '}
            <input
              type="text"
              name="bot-field"
              aria-label="Bot field"
              onChange={handleChange}
            />
          </label>
        </p>
        <div className={styles.formGroup}>
          <div className={styles.inputWrap}>
            <label htmlFor="name">
              <input
                type="text"
                name="name"
                aria-label="Name"
                autoComplete="off"
                onChange={handleChange}
                placeholder="Name"
              />
              <span className={styles.inputLabel} />
            </label>
          </div>
        </div>
        <div className={styles.formGroup}>
          <div className={styles.inputWrap}>
            <label htmlFor="email">
              <input
                type="email"
                name="email"
                aria-label="Email"
                autoComplete="off"
                onChange={handleChange}
                placeholder="Email"
              />
              <span className={styles.inputLabel} />
            </label>
          </div>
        </div>
        <div className={`${styles.formGroup} ${styles.full}`}>
          <div className={styles.inputWrap}>
            <label htmlFor="message">
              <textarea
                name="message"
                aria-label="Message"
                onChange={handleChange}
                placeholder="Message"
              />
              <span className={styles.inputLabel} />
            </label>
          </div>
        </div>
        {!loading && completeForm ? (
          <div className={`${styles.formGroup} ${styles.full}`}>
            <span className={styles.notification}>
              <i></i> Your message was sent. Thanks!
            </span>
          </div>
        ) : (
          loading && (
            <div className={`${styles.formGroup} ${styles.full}`}>
              <span className="loader"></span>
            </div>
          )
        )}
        <div className={`${styles.formGroup} ${styles.full}`}>
          <button type="submit" disabled={isInvalid}>
            <span className={styles.mask} />
            {loading ? <span>Sending...</span> : <span>Send message</span>}
          </button>
        </div>
      </form>
      <div className={styles.social}>
        <SocialIcons num="30" color="#777" />
      </div>
    </div>
  );
};

export default ContactBlock;
