import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const ExperiencePage = () => (
  <Layout>
    <SEO title="Experience" />
    <h1>Hi from the Experienc Page</h1>
    <p>Welcome to page 3</p>
    <Link to="/">Homepage</Link>
  </Layout>
);

export default ExperiencePage;
