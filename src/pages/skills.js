import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/seo';
import TypedReact from '../components/typedReact';
import SkillsBlock from '../components/SkillsBlock';

const dataSkills = [
  {
    label: 'HTML 5',
    percent: 93,
  },
  {
    label: 'CSS',
    percent: 93,
  },
  {
    label: 'Javascript',
    percent: 96,
  },
  {
    label: 'PHP',
    percent: 87,
  },
  {
    label: 'React',
    percent: 95,
  },
  {
    label: 'Jquery',
    percent: 91,
  },
  {
    label: 'Node',
    percent: 93,
  },
  {
    label: 'Express',
    percent: 90,
  },
  {
    label: 'Wordpress',
    percent: 89,
  },
  {
    label: 'Woocommerce',
    percent: 93,
  },
  {
    label: 'Nginx',
    percent: 87,
  },
  {
    label: 'MySQL',
    percent: 85,
  },
  {
    label: 'MongoDB',
    percent: 85,
  },
  {
    label: 'Firebase',
    percent: 89,
  },
  {
    label: 'GraphQL',
    percent: 86,
  },
  {
    label: 'Webpack',
    percent: 84,
  },
  {
    label: 'Debian',
    percent: 89,
  },
  {
    label: 'Ubuntu',
    percent: 84,
  },
  {
    label: 'git',
    percent: 86,
  },
  {
    label: 'ssh',
    percent: 88,
  },
  {
    label: 'yarn',
    percent: 87,
  },
  {
    label: 'npm',
    percent: 87,
  },
];

const SkillsPage = () => (
  <Layout>
    <SEO
      title="Skills"
      description="Here are the developing skills in which I succeeded the most and I'm active using in my projects."
    />
    <h1>
      <span style={{ display: `none` }}>Skills</span>
      <TypedReact strings={[`My Skills`]} />
    </h1>
    <h4>Tech skills</h4>
    <p>
      Here are the developing skills in which I succeeded the most and I'm
      actively using in my projects.
    </p>
    <SkillsBlock data={dataSkills} />
  </Layout>
);

export default SkillsPage;
