import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import TypedReact from '../components/typedReact';

const ExperiencePage = () => (
  <Layout>
    <SEO title="Experience" />
    <h1>
      <span style={{ display: `none` }}>Experience</span>
      <TypedReact strings={[`My Experience`]} />
    </h1>
    <p>Welcome to page 3</p>
    <Link to="/">Homepage</Link>
  </Layout>
);

export default ExperiencePage;
