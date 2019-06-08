import React from 'react';
// import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const ContactPage = () => (
  <Layout>
    <SEO title="Contact Page" />
    <h1>Hey from the Contact Page</h1>
    <p>
      My contact email address –{' '}
      <a href="mailto:email@lapkov.com"> email@lapkov.com</a>
      <br />
      You can also find me on the telegram – <strong>@aslapkov</strong>
    </p>
  </Layout>
);

export default ContactPage;
