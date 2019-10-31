import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';
import Image from '../components/image';
import SEO from '../components/seo';
import IconBlock from '../components/IconBlock';
import TypedReact from '../components/typedReact';

import IconCode from '../images/code.svg';
import IconDesign from '../images/design.svg';
import IconSupport from '../images/support.svg';
import IconSeo from '../images/seo.svg';

const dataIcon = [
  {
    iconName: IconCode,
    label: `Programming javascript websites, apps`,
  },
  {
    iconName: IconDesign,
    label: `Development clean UI/UX design for apps`,
  },
  {
    iconName: IconSupport,
    label: `Support and maintenance of projects`,
  },
  {
    iconName: IconSeo,
    label: `Search engine optimization of sites`,
  },
];

const IndexPage = () => (
  <Layout>
    <SEO title="I'm a front-end developer, UX/UI designer and SEO specialist" />
    <Image />
    <h1 style={{ height: `160px` }}>
      <span style={{ display: `none` }}>
        Hey! I'm Alekandr. Front-end developer, UX/UI designer and SEO
        specialist.
      </span>
      <TypedReact
        strings={[
          `Hello! <br />I'm Aleksandr. <br />Web developer, <br />UX/UI designer...`,
        ]}
      />
    </h1>
    <h4>About</h4>
    <blockquote>
      <p>
        My name is Aleksandr. I'm a front-end developer. I love to create
        javascript websites with a simple design, develop web applications based
        on business needs and especially solve customers or consumers problems.
        For the past 5 years I have been building modern and progressive
        websites for small companies, organizations and start-ups, which helped
        them reach their business goals including by attracting many new clients
        via Google, Yandex etc. See my some projects on{' '}
        <Link to="/works/">works</Link> page. I like getting more and more
        educated in the field of javascript and I am always ready to learn
        something new.
      </p>
      <p>
        At the moment I am in search for new and interesting web projects. If
        you have some I could work on, please{' '}
        <Link to="/contact/">contact me</Link>!
      </p>
    </blockquote>
    <h4>What can I do?</h4>
    <IconBlock data={dataIcon} />
  </Layout>
);

export default IndexPage;
