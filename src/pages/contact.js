import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import TypedReact from '../components/typedReact';
import ContactBlock from '../components/contactBlock';

const ContactPage = () => (
  <Layout>
    <SEO
      title="Contacts"
      description="To contact me you can will send email or message to telegram."
    />
    <h1>
      <span style={{ display: `none` }}>Contact page</span>
      <TypedReact strings={[`Contacts`]} />
    </h1>
    <ContactBlock />
  </Layout>
);

export default ContactPage;
