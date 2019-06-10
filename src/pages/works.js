import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const WorksPage = () => (
  <Layout>
    <SEO title="Works" />
    <h1>Hi from the Works Page</h1>
    <p>Welcome to Works Page</p>
    <Link to="/">To the homepage</Link>
  </Layout>
);

export default WorksPage;
