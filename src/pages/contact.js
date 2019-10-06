import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/Seo';
import TypedReact from '../components/TypedReact';
import ContactBlock from '../components/ContactBlock';

const ContactPage = () => (
  <Layout>
    <SEO
      title="Contacts"
      description="To contact me you can send an email or a message to telegram."
    />
    <h1>
      <span style={{ display: `none` }}>Contact page</span>
      <TypedReact strings={[`Contacts`]} />
    </h1>
    <ContactBlock />
  </Layout>
);

export default ContactPage;
