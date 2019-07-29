import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import TypedReact from '../components/typedReact';
import WorksBlock from '../components/worksBlock';

const dataWork = [
  {
    year: `2019`,
    desc: `My new website build with gatsby, deploy to Netlify`,
    siteUrl: `https://lapkov.com`,
    site: `lapkov.com`,
  },
  {
    year: `2019`,
    desc: `New brand women clothes, bugs and accessories in Belarus`,
    siteUrl: `http://botti.by`,
    site: `botti.by`,
  },
  {
    year: `2018`,
    desc: `The professional massage room in center Minsk`,
    siteUrl: `http://synergymassage.by`,
    site: `synergymassage.by`,
  },
  {
    year: `2018`,
    desc: `A blog about learning to write by Tanya Levinson`,
    siteUrl: `http://tanyalevinson.com`,
    site: `tanyalevinson.com`,
  },
  {
    year: `2018`,
    desc: `Online store selling cosmetics for nails with delivery throughout Belarus`,
    siteUrl: `https://kani.by`,
    site: `kani.by`,
  },
  {
    year: `2018`,
    desc: `Online store selling cosmetics for base botox. Now site not available`,
    siteUrl: `/`,
    site: `fillery-pro.com`,
  },
  {
    year: `2017`,
    desc: `Redesign of online store selling building materials in Gomel`,
    siteUrl: `https://sati.by`,
    site: `sati.by`,
  },
  {
    year: `2017`,
    desc: `Presentation site for balerine of The Bolshoi Theatre (Moscow)`,
    siteUrl: `http://yuliagrebenshchikova.com`,
    site: `yuliagrebenshchikova.com`,
  },
  {
    year: `2017`,
    desc: `Animation Studio "Chin Up", creating stunning short animated videos`,
    siteUrl: `https://chinup.by`,
    site: `chinup.by`,
  },
  {
    year: `2017`,
    desc: `The dinner show in the spirit of dark cabaret and steampunk in Moscow`,
    siteUrl: `http://showtaboo.ru`,
    site: `showtaboo.ru`,
  },
  {
    year: `2017`,
    desc: `Personal website for rhinoplasty surgeon Artashes Ayrapetyan`,
    siteUrl: `http://artmedest.ru`,
    site: `artmedest.ru`,
  },
  {
    year: `2017`,
    desc: `Auto insurance in Moscow with home delivery`,
    siteUrl: `http://shokopolis.ru`,
    site: `shokopolis.ru`,
  },
  {
    year: `2017`,
    desc: `The SMM agency from Belarus with a focus on instagram`,
    siteUrl: `/works`,
    site: `smuziby.ru`,
  },
  {
    year: `2017`,
    desc: `Online store selling cosmetics for nails in Belarus`,
    siteUrl: `https://elitenails.by`,
    site: `elitenails.by`,
  },
  {
    year: `2016`,
    desc: `Online store selling the paintings of modern Belarusian artists`,
    siteUrl: `http://artclub.by`,
    site: `artclub.by`,
  },
  {
    year: `2016`,
    desc: `Created an online search for clothes from all stores. Now site not available`,
    siteUrl: `#`,
    site: ` getmoda.ru`,
  },
  {
    year: `2016`,
    desc: `Development site by order the circus performers "Du Soleil"`,
    siteUrl: `http://vcirke.com`,
    site: `vcirke.com`,
  },
  {
    year: `2015`,
    desc: `Development online store selling building materials "Sati"`,
    siteUrl: `https://www.sati.by`,
    site: `sati.by`,
  },
  {
    year: `2014`,
    desc: `The website for the organization for the production of plastic containers`,
    siteUrl: `http://belexport.by`,
    site: `belexport.by`,
  },
  {
    year: `2013`,
    desc: `My first job position is a specialist for search engine optimization`,
    siteUrl: `http://hipway.ru`,
    site: `hipway.ru`,
  },
];

const WorksPage = () => (
  <Layout>
    <SEO title="Works" />
    <h1>
      <span style={{ display: `none` }}>Works</span>
      <TypedReact strings={[`My Works`]} />
    </h1>
    <h4>These are works that I can show</h4>
    <p>
      This is not all of my works and projects in which I participated, because
      some of them I can't show or just do not want to show.
    </p>
    <WorksBlock data={dataWork} />
  </Layout>
);

export default WorksPage;
