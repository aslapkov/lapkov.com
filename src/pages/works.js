import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import TypedReact from '../components/typedReact';

const WorksPage = () => (
  <Layout>
    <SEO title="Works" />
    <h1>
      <span style={{ display: `none` }}>Works</span>
      <TypedReact strings={[`My Works`]} />
    </h1>
    <p>Welcome to Works Page</p>
    <Link to="/">To the homepage</Link>
  </Layout>
);

export default WorksPage;
