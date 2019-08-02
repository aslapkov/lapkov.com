import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';

const NotFoundPage = () => (
  <Layout>
    <SEO title="404 PAGE NOT FOUND" />
    <h1>404 NOT FOUND</h1>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <p>
      Probably, this is page does not exist on the site. Come back to{' '}
      <Link to="/">home</Link>!
    </p>
  </Layout>
);

export default NotFoundPage;
