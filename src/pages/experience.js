import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/seo';
import TypedReact from '../components/typedReact';
import ExperienceBlock from '../components/ExperienceBlock';

const dataExp = [
  {
    period: `2016 - present`,
    position: `Developing`,
    loc: `Javascript, Node, React etc.`,
    info: `I read a lot information about web technologies: Javascript, Node, React, different databases,
    operating systems, web servers and other. Then I created dozen of projects using these technologies.
    Now I'm diligently studying everything related to Javascript and the modern web.`,
  },
  {
    period: `May 2019`,
    position: `Developing, design`,
    loc: `Botti, Minsk`,
    site: `http://botti.by`,
    info: `Created a tiny website with a look into the future for a new brand in the of clothing market in Belarus.
    In planning to create an online store here. There is also a need for SEO later.`,
  },
  {
    period: `Apr 2018 - present`,
    position: `Developing, design, SEO`,
    loc: `Tanya Levinson`,
    site: `https://tanyalevinson.com`,
    info: `It's a blog about writing and the magic of words of a former journalist Tanya Levinson.
    I built this website with Wordpress and did a great job of revision, design and SEO.`,
  },
  {
    period: `Oct 2017 - present`,
    position: `Developing, design, SEO`,
    loc: `Elite Nails`,
    site: `https://elitenails.by`,
    info: `Online store selling nails cosmetic for Belarus. Currently I minimally support this project just for couple of hours a week.`,
  },
  {
    period: `June 2017 - present`,
    position: `Developing, design, SEO`,
    loc: `Sister's, Minsk`,
    site: `https://sisters.by`,
    info: `Support, revision, SEO and consultations for a famous brand in Belarusian clothing market.
    Now I'm getting ready to develop and design a new site for Sister's. I also participate in other projects related to them:
    primabotti.ru and primabotti.by - wholesale online stores. I support them for couple of hours a week too`,
  },
  {
    period: `May 2017`,
    position: `Developing, SEO`,
    loc: `Chin Up`,
    site: `https://www.chinup.by`,
    info: `Presentation site for animation studio ChinUp (Minsk). The team of creative guys who produced animated videos,
    animated series and motion design.`,
  },
  {
    period: `Apr 2017`,
    position: `Developing, design, SEO`,
    loc: `Yulia, Moscow`,
    site: `http://yuliagrebenshchikova.com`,
    info: `Presentation site for balerine of The Bolshoi Theatre (Moscow) Yulia Grebenshchikova. She was born in Budapest
    (Hungary) and continued her studies at Moscow. After graduation in 2003 she joined the Ballet Company of the
    Bolshoi Theater. The site has many chronicle photographs of Yulia's ballet performances.`,
  },
  {
    period: `Mar 2017`,
    position: `Developing, design, SEO`,
    loc: `Doctor Ayrapetyan, Moscow`,
    site: `http://artmedest.ru`,
    info: `Website fot rhinoplasty surgeon Artashes Ayrapetyan from Moscow. He is one of
    the few specialists in the market of aesthetic and plastic surgery who came to the specialty right away,
    like a plastic surgeon.`,
  },
  {
    period: `Apr 2015 - present`,
    position: `Developing, design, SEO`,
    loc: `Sati, Gomel`,
    site: `https://sati.by`,
    info: `My first individual work that is completely done by myself. This site mainly gets customers through
    the Google and Yandex search. In 2017, I redesigned this project and updated the entire system. Currently
    I also support the project. I just love it ;)`,
  },
  {
    period: `Dec 2013 - May 2016`,
    position: `SEO`,
    loc: `Hipway & HipClub, Moscow, hipway.ru & hipclub.ru`,
    info: `The first IT work in my life. I worked remotely as a SEO specialist in a travel company Hipway and
    their related product Hipclub. Here I grew from an ordinary employee to the head of SEO departament.`,
  },
];

const ExperiencePage = () => (
  <Layout>
    <SEO
      title="Experience"
      description="A small chronology of my experience. Step by step, you can learn about my best practices."
    />
    <h1>
      <span style={{ display: `none` }}>Experience</span>
      <TypedReact strings={[`My Experience`]} />
    </h1>
    <h4>The timeline of experience</h4>
    <ExperienceBlock data={dataExp} />
  </Layout>
);

export default ExperiencePage;
