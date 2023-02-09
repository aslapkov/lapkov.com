import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Skills from "../components/skills"
import dataSkills from "../data/ru/skills"

const SkillsPage = ({ location }) => (
  <Layout location={location} defaultLang="ru">
    <Seo
      location={location}
      title="Tехнические навыки | А. Лапков"
      description="Вот знания веб-технологий, в которых я преуспел больше всего, их я активно использую в своих проектах."
    />
    <Skills dataSkills={dataSkills} />
  </Layout>
)

export default SkillsPage
