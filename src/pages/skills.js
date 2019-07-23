import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import TypedReact from '../components/typedReact';
import SkillsBlock from '../components/skillsBlock';

const dataSkills = [
  {
    label: 'HTML 5',
    percent: 90,
  },
  {
    label: 'CSS',
    percent: 90,
  },
  {
    label: 'Javascript',
    percent: 93,
  },
  {
    label: 'PHP',
    percent: 86,
  },
  {
    label: 'React js',
    percent: 93,
  },
  {
    label: 'Jquery',
    percent: 91,
  },
  {
    label: 'Node js',
    percent: 87,
  },
  {
    label: 'Express',
    percent: 85,
  },
  {
    label: 'Nginx',
    percent: 84,
  },
  {
    label: 'MySQL',
    percent: 82,
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
    percent: 83,
  },
];

const SkillsPage = () => (
  <Layout>
    <SEO title="Skills" />
    <h1>
      <span style={{ display: `none` }}>Skills</span>
      <TypedReact strings={[`My Skills`]} />
    </h1>
    <h4>Tech skills</h4>
    <p>
      Here is the better part of the directions, that I preferred to study and
      which I now use in my projects.
    </p>
    <SkillsBlock data={dataSkills} />
  </Layout>
);

export default SkillsPage;
