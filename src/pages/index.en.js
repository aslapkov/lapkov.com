import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import Seo from "../components/seo"
import Icons from "../components/icons"
import TypedReact from "../components/typed-react"
import translateLink from "../utils/translateLink"
import dataIndex from "../data/en/index"

const IndexPage = ({ location }) => (
  <Layout location={location} defaultLang="en">
    <Seo
      location={location}
      title="I'm a web developer and SEO specialist | A. Lapkov"
      description="My name is Aleksandr Lapkov. I'm a web developer (mostly frontend) and SEO specialist. I have been building modern and
        progressive websites for small companies, organizations and start-ups."
    />
    <Image />
    <h1 style={{ height: "130px", textAlign: "center" }}>
      <span style={{ display: "none" }}>
        I'm Alekandr. Web developer, SEO specialist.
      </span>
      <TypedReact
        strings={[
          "I'm Aleksandr. <br />Web developer, <br />SEO specialist",
        ]}
      />
    </h1>
    <h2>About</h2>
    <blockquote>
      <p>
        My name is <strong>Aleksandr Lapkov</strong>. I'm a front-end, web developer and SEO specialist.
        I love to create JavaScript/TypeScript websites with a simple design, develop web
        applications based on business needs and especially solve customers or
        consumers problems. For the past 7 years I have been building modern and
        progressive websites for small companies, organizations and start-ups,
        which helped them reach their business goals including by attracting
        many new clients via Google, Yandex etc. See a small part of my projects
        on the <Link to={translateLink("/works/", "en")}>works</Link> page. I like getting more and more
        educated in the modern web. I'm studying every day and ready to learn
        new things.
      </p>
      <p>
        At the moment I am in search for new and interesting web projects. If
        you have some I could work on, please{" "}
        <Link to={translateLink("/contact/", "en")}>contact me</Link>!
      </p>
    </blockquote>
    <h3>What can I do?</h3>
    <Icons data={dataIndex} />
  </Layout>
)

export default IndexPage
