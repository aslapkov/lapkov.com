import React from 'react';
// import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const ContactPage = () => (
  <Layout>
    <SEO title="Contact Page" />
    <h1>Hey from the Contact Page</h1>
    <p>
      <a href="mailto:email@lapkov.com"> email@lapkov.com</a> – my contact email
      address
      <br />
      <strong>@aslapkov</strong> – how you can find me on the telegram
    </p>
  </Layout>
);

export default ContactPage;
