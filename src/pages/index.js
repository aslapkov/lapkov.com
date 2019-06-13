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
        Hey! I am Alex. Web developer, designer, SEO specialist.
      </span>
      <TypedReact
        strings={[
          `Hey! I am Alex.<br /> Web developer,<br /> designer and SEO.<br /> Welcome!`,
        ]}
      />
    </h1>
    <h4>ABOUT</h4>
    <p>
      About me or <Link to="/contact/">contact</Link>.
    </p>
  </Layout>
);

export default IndexPage;
