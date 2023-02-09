import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Skills from "../components/skills"
import dataSkills from "../data/en/skills"

const SkillsPage = ({ location }) => (
  <Layout location={location} defaultLang="en">
    <Seo
      location={location}
      title="Technical skills | A. Lapkov"
      description="Here are the developing skills in which I succeeded the most and I'm active using in my projects."
    />
    <Skills dataSkills={dataSkills} />
  </Layout>
)

export default SkillsPage
