import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import TypedReact from "../components/typedReact"
import ExperienceBlock from "../components/ExperienceBlock"
import dataExperience from "../data/en/experience"

const ExperiencePage = () => (
  <Layout>
    <Seo
      title="Experience"
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
