import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';
import IconBlock from '../components/iconBlock';
import TypedReact from '../components/typedReact';

import IconCode from '../images/code.svg';
import IconDesign from '../images/design.svg';
import IconSupport from '../images/support.svg';
import IconSeo from '../images/seo.svg';

const dataIcon = [
  {
    iconName: IconCode,
    label: `Programming websites, web apps`,
  },
  {
    iconName: IconDesign,
    label: `Development of a clean UI/UX apps design`,
  },
  {
    iconName: IconSupport,
    label: `Support and revision your web apps`,
  },
  {
    iconName: IconSeo,
    label: `Search engine optimization of your site`,
  },
];

const IndexPage = () => (
  <Layout>
    <SEO title="I'm a web developer, designer and SEO specialist" />
    <Image />
    <h1 style={{ height: `160px` }}>
      <span style={{ display: `none` }}>
        Hey! I'm Alex. Web developer, designer and SEO specialist.
      </span>
      <TypedReact
        strings={[
          `Hey! I'm Alex. <br />Web developer, <br />designer and <br />SEO specialist.`,
        ]}
      />
    </h1>
    <h4>About</h4>
    <blockquote>
      <p>
        My name is Aleksandr. I like <strong>javascript</strong>, to build the
        websites, to design beautiful apps and to see how these projects getting
        the high marks from search engines. For the past 5 years I've helped
        small companies, organizations and start-ups reach business goals using
        modern and progressive web sites and to get a lot of new clients with
        search Google, Yandex etc. I love to read new things around javascript
        and I'm always ready to learn.
      </p>
      <p>
        At the moment I'm looking for new interesting web projects. If you have
        some of them I can take care about, please
        {` `}
        <Link to="/contact/">contact me</Link>!
      </p>
    </blockquote>
    <h4>What can I do for you?</h4>
    <div>
      <IconBlock data={dataIcon} />
    </div>
  </Layout>
);

export default IndexPage;
