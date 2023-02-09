import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Experience from "../components/experience"
import dataExperience from "../data/en/experience"

const ExperiencePage = ({ location }) => (
  <Layout location={location} defaultLang="en">
    <Seo
      location={location}
      title="Experience | A. Lapkov"
      description="A small chronology of my experience. Step by step, you can learn about my best practices."
    />
    <Experience dataExperience={dataExperience} />
  </Layout>
)

export default ExperiencePage
