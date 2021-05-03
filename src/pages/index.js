import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import Image from '../components/image';
import Seo from '../components/seo';
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
    label: `Support small projects and websites`,
  },
  {
    iconName: IconSeo,
    label: `Search engine optimization of sites`,
  },
];

const IndexPage = () => (
  <Layout>
    <Seo
      title="I'm a front-end developer, web designer and SEO specialist"
      description="My name is Aleksandr. I'm a front-end developer and UX/UI designer. I have been building modern and
        progressive websites for small companies, organizations and start-ups."
    />
    <Image />
    <h1 style={{ height: `160px` }}>
      <span style={{ display: `none` }}>
        Hey! I'm Alekandr. Front end developer, UX/UI designer and SEO
        specialist.
      </span>
      <TypedReact
        strings={[
          `Hello! <br />I'm Aleksandr. <br />Web developer, <br />UX/UI designer`,
        ]}
      />
    </h1>
    <h4>About</h4>
    <blockquote>
      <p>
        My name is Aleksandr. I'm a front-end, web developer and UX/UI designer.
        I love to create JavaScript websites with a simple design, develop web
        applications based on business needs and especially solve customers or
        consumers problems. For the past 5 years I have been building modern and
        progressive websites for small companies, organizations and start-ups,
        which helped them reach their business goals including by attracting
        many new clients via Google, Yandex etc. See a small part of my projects
        on the <Link to="/works/">work</Link> page. I like getting more and more
        educated in the modern web. I'm studying every day and ready to learn
        new things.
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
