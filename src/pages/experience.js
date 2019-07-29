import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import TypedReact from '../components/typedReact';
import ExperienceBlock from '../components/experienceBlock';

const dataExp = [
  {
    period: `May 2019`,
    position: `Developing, design, SEO`,
    loc: `"Botti", Minsk, botti.by`,
    info: `Created a tiny website with a look into the future for new brand in the market of Belarus.`,
  },
  {
    period: `2018 - present`,
    position: `Developing, SEO`,
    loc: `"Tanya Levinson", tanyalevinson.com`,
    info: `I read a lot of information about React, Node js and Javascript`,
  },
  {
    period: `2017 - present`,
    position: `Developing`,
    loc: `Javascript`,
    info: `I read a lot of information about React, Node js and Javascript.
    Then I created with a dozen projects using these technologies`,
  },
  {
    period: `June 2017 - present`,
    position: `Developing, design, SEO`,
    loc: `"Sister's", Minsk, sisters.by`,
    info: `The third big project.`,
  },
  {
    period: `April 2015 - present`,
    position: `Developing, design, SEO`,
    loc: `"Сати", Gomel, sati.by`,
    info: `My second work and fully performed by me.`,
  },
  {
    period: `December 2013 - May 2016`,
    position: `SEO`,
    loc: `"Hipway & HipClub", Moscow, hipway.ru & hipclub.ru`,
    info: `My first IT work in my life`,
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
