import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import TypedReact from "../components/typed-react"
import Skills from "../components/skills"
import dataSkills from "../data/en/skills"

const SkillsPage = ({ location }) => (
  <Layout location={location} defaultLang="en">
    <Seo
      location={location}
      title="Technical skills | A. Lapkov"
      description="Here are the developing skills in which I succeeded the most and I'm active using in my projects."
      slug="/skills"
    />
    <h1>
      <span style={{ display: `none` }}>Skills</span>
      <TypedReact strings={[`My Skills`]} />
    </h1>
    <h2>Tech skills</h2>
    <p>
      Here are the developing skills in which I succeeded the most and I'm
      actively using in my and client projects.
    </p>
    <Skills dataSkills={dataSkills} />
  </Layout>
)

export default SkillsPage
