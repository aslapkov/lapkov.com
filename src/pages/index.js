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
    <SEO title="I'm a web developer, designer and SEO expert" />
    <Image />
    <h1 style={{ height: `160px` }}>
      <span style={{ display: `none` }}>
        Hey! I am Alex. Web developer, designer and SEO specialist.
      </span>
      <TypedReact
        strings={[
          `Hello! I am Alex. <br />Web developer, <br />designer and <br />SEO specialist.`,
        ]}
      />
    </h1>
    <h4>About</h4>
    <blockquote>
      <p>
        My name is Aleksandr. I specialize in <strong>javascript</strong>,
        building websites and designing beautiful apps. I love seeing my
        projects getting the highest marks from search engines. For the past 5
        years I have been building modern and progressive websites for small
        companies, organizations and start-ups, which helped them reach their
        business goals by attracting a lot of new clients via search Google,
        Yandex etc. See my some projects on <Link to="/works/">works</Link>{' '}
        page. I love getting more and more educated in the field of javascript
        and I am always ready to learn something new.
      </p>
      <p>
        At the moment I am in search for new and interesting web projects. If
        you have some I could work on, please{' '}
        <Link to="/contact/">contact me</Link>!
      </p>
    </blockquote>
    <h4>What can I do?</h4>
    <div>
      <IconBlock data={dataIcon} />
    </div>
  </Layout>
);

export default IndexPage;
