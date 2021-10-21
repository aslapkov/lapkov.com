import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import Seo from "../components/seo"
import IconBlock from "../components/IconBlock"
import TypedReact from "../components/typedReact"
import translateLink from "../components/logic/translateLink"
import dataIndex from "../data/en/index"

const IndexPage = ({ location }) => (
  <Layout location={location} defaultLang="en">
    <Seo
      location={location}
      title="I'm a front-end developer, web designer and SEO specialist | A. Lapkov"
      description="My name is Aleksandr Lapkov. I'm a front-end developer and UX/UI designer. I have been building modern and
        progressive websites for small companies, organizations and start-ups."
    />
    <Image />
    <h1 style={{ height: `130px` }}>
      <span style={{ display: `none` }}>
        I'm Alekandr. Front end developer, UX/UI designer and SEO
        specialist.
      </span>
      <TypedReact
        strings={[
          `I'm Aleksandr. <br />Web developer, <br />UX/UI designer`,
        ]}
      />
    </h1>
    <h4>About</h4>
    <blockquote>
      <p>
        My name is <strong>Aleksandr Lapkov</strong>. I'm a front-end, web developer and UX/UI designer.
        I love to create JavaScript/TypeScript websites with a simple design, develop web
        applications based on business needs and especially solve customers or
        consumers problems. For the past 5 years I have been building modern and
        progressive websites for small companies, organizations and start-ups,
        which helped them reach their business goals including by attracting
        many new clients via Google, Yandex etc. See a small part of my projects
        on the <Link to={translateLink("/works/", "en")}>works</Link> page. I like getting more and more
        educated in the modern web. I"m studying every day and ready to learn
        new things.
      </p>
      <p>
        At the moment I am in search for new and interesting web projects. If
        you have some I could work on, please{" "}
        <Link to={translateLink("/contact/", "en")}>contact me</Link>!
      </p>
    </blockquote>
    <h4>What can I do?</h4>
    <IconBlock data={dataIndex} />
  </Layout>
)

export default IndexPage
