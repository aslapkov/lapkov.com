import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import TypedReact from "../components/typedReact"
import ExperienceBlock from "../components/experience-block"
import dataExperience from "../data/en/experience"

const ExperiencePage = ({ location }) => (
  <Layout location={location} defaultLang="en">
    <Seo
      location={location}
      title="Experience | A. Lapkov"
      description="A small chronology of my experience. Step by step, you can learn about my best practices."
      slug="/experience/"
    />
    <h1>
      <span style={{ display: `none` }}>Experience</span>
      <TypedReact strings={[`About experience`]} />
    </h1>
    <h4>The timeline of experience</h4>
    <ExperienceBlock dataExperience={dataExperience} />
  </Layout>
)

export default ExperiencePage
