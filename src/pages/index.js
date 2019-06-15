import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';
import TypedReact from '../components/typedReact';

const IndexPage = () => (
  <Layout>
    <SEO title="I am a web developer" />
    <Image />
    <h1>
      <span style={{ display: `none` }}>
        Hey! I am Alex. Web developer, designer and SEO specialist.
      </span>
      <TypedReact
        strings={[
          `Hey! I am Alex.<br /> Web developer,<br /> designer and SEO.`,
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
        and I am always ready to learn! If you want to ask me something, please{' '}
        <Link to="/contact/">contact me</Link>!
      </p>
    </blockquote>
    <h4>What I do?</h4>
    <div></div>
  </Layout>
);

export default IndexPage;
