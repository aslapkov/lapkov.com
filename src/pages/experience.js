import React from 'react';
// import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import TypedReact from '../components/typedReact';
import ExperienceBlock from '../components/experienceBlock';

const dataExp = [
  {
    period: `June 2017 - present`,
    position: `Developer, designer, SEO`,
    loc: `Sister's, Minsk`,
    info: `The third big project.`,
  },
  {
    period: `April 2015 - present`,
    position: `Developer, designer, SEO`,
    loc: `Sati, Gomel`,
    info: `My second work and fully performed by me.`,
  },
  {
    period: `December 2012 - May 2016`,
    position: `SEO`,
    loc: `Hipway & HipClub, Moscow`,
    info: `My first work IT in my life`,
  },
];

const ExperiencePage = () => (
  <Layout>
    <SEO title="Experience" />
    <h1>
      <span style={{ display: `none` }}>Experience</span>
      <TypedReact strings={[`My Experience`]} />
    </h1>
    <h4>The timeline of experience</h4>
    <ExperienceBlock data={dataExp} />
  </Layout>
);

export default ExperiencePage;
