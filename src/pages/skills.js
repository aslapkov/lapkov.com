import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import TypedReact from '../components/typedReact';

const SkillsPage = () => (
  <Layout>
    <SEO title="Skills" />
    <h1>
      <span style={{ display: `none` }}>Skills</span>
      <TypedReact strings={[`My Skills`]} />
    </h1>
    <p>Welcome to Skills Page</p>
    <Link to="/">To the homepage</Link>
  </Layout>
);

export default SkillsPage;
