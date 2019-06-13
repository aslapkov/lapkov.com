import React from 'react';
// import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import TypedReact from '../components/typedReact';

const ContactPage = () => (
  <Layout>
    <SEO title="Contacts" />
    <h1>
      <span style={{ display: `none` }}>Contact page</span>
      <TypedReact strings={[`Hey from my<br /> Contact page!`]} />
    </h1>
    <p>
      <a href="mailto:email@lapkov.com">email@lapkov.com</a> – my contact email
      address
      <br />
      <a href="#" target="_blank" rel="noopener noreferrer">
        @aslapkov
      </a>{' '}
      – how you can find me on the telegram
    </p>
  </Layout>
);

export default ContactPage;
