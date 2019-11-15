import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/seo';
import TypedReact from '../components/typedReact';
import ExperienceBlock from '../components/ExperienceBlock';

const dataExp = [
  {
    period: `Jan 2018 - pres.`,
    position: `Full-stack developer, designer`,
    loc: `JavaScript, Node, React`,
    site: `https://lapkov.com`,
    info: `I’ve learned a lot of information about web technologies, including JavaScript, Node, React,
    different databases, web servers and other. Afterwards I've created and participated in a dozen projects
    using these technologies. I did most of these projects on React and Node, they are all closed systems.
    Unfortunately I can't show and tell that I participated in them. Now I'm diligently studying everything
    related to JavaScript and the whole modern web.`,
  },
  {
    period: `May 2019`,
    position: `Front-end developer, designer`,
    loc: `Botti, Minsk`,
    site: `http://botti.by`,
    info: `Created a tiny website with a look into the future for a new brand in the clothing market of Belarus.
    I am planning to create an online store here, in addition there is also a need for SEO later.`,
  },
  {
    period: `Feb 2019 - pres.`,
    position: `Front-end developer, SEO`,
    loc: `Tanya Levinson`,
    site: `https://tanyalevinson.com`,
    info: `It's a blog about writing and the magic of words of a former journalist Tanya Levinson.
    I built this website with Wordpress and did a great job of revision, design and SEO.`,
  },
  {
    period: `Dec 2018`,
    position: `Front-end developer, designer`,
    loc: `Synergy Massage, Minsk`,
    site: `http://synergymassage.by`,
    info: `Mini site for the professional massage room in center Minsk.
    Here you will receive a full range of massage services.`,
  },
  {
    period: `Oct 2017 - pres.`,
    position: `Front-end developer, designer, SEO`,
    loc: `Elite Nails`,
    site: `https://elitenails.by`,
    info: `Online store selling nails cosmetic for Belarus. Currently I minimally support
    this project just for couple of hours a week.`,
  },
  {
    period: `Jun 2017 - pres.`,
    position: `Full-stack developer, SEO`,
    loc: `Sister's, Minsk`,
    site: `https://sisters.by`,
    info: `Support, revision, SEO and consultations for a famous brand in Belarusian clothing market.
    Now I'm getting ready to develop and design a new site for Sister's. I also participate in other projects
    related to them: primabotti.ru and primabotti.by - wholesale online stores. I support them for couple of
    hours a week too`,
  },
  {
    period: `May 2017`,
    position: `Front-end developer, SEO`,
    loc: `Chin Up`,
    site: `https://www.chinup.by`,
    info: `Presentation site for animation studio ChinUp (Minsk). The team of creative guys who produced animated
    videos, animated series and motion design.`,
  },
  {
    period: `Apr 2017`,
    position: `Front-end developer, designer, SEO`,
    loc: `Yulia, Moscow`,
    site: `http://yuliagrebenshchikova.com`,
    info: `Presentation site for balerine of The Bolshoi Theatre (Moscow) Yulia Grebenshchikova. She was born
    in Budapest (Hungary) and continued her studies at Moscow. After graduation in 2003 she joined the Ballet
    Company of the Bolshoi Theater. The site has many chronicle photographs of Yulia's ballet performances.`,
  },
  {
    period: `Mar 2017`,
    position: `Front-end developer, designer, SEO`,
    loc: `Doctor Ayrapetyan, Moscow`,
    site: `http://artmedest.ru`,
    info: `Website fot rhinoplasty surgeon Artashes Ayrapetyan from Moscow. He is one of
    the few specialists in the market of aesthetic and plastic surgery who came to the specialty right away,
    like a plastic surgeon.`,
  },
  {
    period: `Apr 2015 - pres.`,
    position: `Full-stack developer, designer, SEO`,
    loc: `Sati, Gomel`,
    site: `https://sati.by`,
    info: `My first individual work that is completely done by myself. This site mainly gets customers through
    the Google and Yandex search. In 2017, I redesigned this project and updated the entire system. Currently
    I also support the project. I just love it ;)`,
  },
  {
    period: `Dec 2013 - May 2016`,
    position: `SEO`,
    loc: `Hipway & HipClub, Moscow`,
    site: `https://hipclub.ru`,
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
      <TypedReact strings={[`About experience`]} />
    </h1>
    <h4>The timeline of experience</h4>
    <ExperienceBlock data={dataExp} />
  </Layout>
);

export default ExperiencePage;
