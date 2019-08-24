import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import TypedReact from '../components/typedReact';
import ExperienceBlock from '../components/experienceBlock';

const dataExp = [
  {
    period: `Apr 2017 - present`,
    position: `Developing`,
    loc: `Javascript, Node js, React js etc.`,
    info: `I read a lot information about web technologies: Javascript, Node js, React js, different databases,
    operating systems, web servers and other. Then I created a thousand of projects using these technologies (including this site).
    Now I am actively studying everything related to Javascript and the modern web.`,
  },
  {
    period: `May 2019`,
    position: `Developing, design`,
    loc: `Botti, Minsk, botti.by`,
    info: `Created a tiny website with a look into the future for a new brand in the market of clothes in Belarus.
    In planning to create an online store here. There is also a need for SEO later.`,
  },
  {
    period: `May 2018 - present`,
    position: `Developing, design, SEO`,
    loc: `Tanya Levinson, tanyalevinson.com`,
    info: `This is a blog about writing and the magic of words of a former journalist Tanya Levinson.
    I built this website with Wordpress and did a great job of revision, design and SEO.`,
  },
  {
    period: `Mar 2017 - present`,
    position: `Developing, design, SEO`,
    loc: `Sister's, Minsk, sisters.by`,
    info: `Support, revision, SEO and consultations for a famous brand in the clothing market of Belarus.
    Now I'm getting ready to develop and design a new site for them. I also participate in other projects related to them,
    primabotti.ru and primabotti.by - wholesale online stores.`,
  },
  {
    period: `Nov 2016 - present`,
    position: `Developing, design, SEO`,
    loc: `A lot of different projects`,
    info: `I have created many small web applications based on solving specific client business problems.
    I currently either advise or support them. See more of my works on the "Works" page on the menu.`,
  },
  {
    period: `Apr 2015 - present`,
    position: `Developing, design, SEO`,
    loc: `Сати, Gomel, sati.by`,
    info: `My first individual work, which is completely done by me. This site mainly gets customers through
    the Google and Yandex search. In 2017, I redesigned this project and updated the entire system.
    I love it!`,
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
