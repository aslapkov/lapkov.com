import React from 'react';
// import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import TypedReact from '../components/typedReact';
import WorksBlock from '../components/worksBlock';

const dataWork = [
  {
    year: `2019`,
    desc: `New brand women clothes in Minsk`,
    siteUrl: `http://botti.by`,
    site: `botti.by`,
  },
  {
    year: `2018`,
    desc: `Blog about writting by Tanya Levinson`,
    siteUrl: `http://tanyalevinson.com`,
    site: `tanyalevinson.com`,
  },
  {
    year: `2018`,
    desc: `Online store in Belarus`,
    siteUrl: `https://kani.by`,
    site: `kani.by`,
  },
  {
    year: `2017`,
    desc: `Presentation site for balerine of The Bolshoi Theatre`,
    siteUrl: `http://yuliagrebenshchikova.com`,
    site: `yuliagrebenshchikova.com`,
  },
];

const WorksPage = () => (
  <Layout>
    <SEO title="Works" />
    <h1>
      <span style={{ display: `none` }}>Works</span>
      <TypedReact strings={[`My Works`]} />
    </h1>
    <h4>Wokrs that I can show</h4>
    <WorksBlock data={dataWork} />
  </Layout>
);

export default WorksPage;
