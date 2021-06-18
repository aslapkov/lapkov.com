import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import TypedReact from "../components/typedReact"
import SkillsBlock from "../components/SkillsBlock"
import dataSkills from "../data/ru/skills"

const SkillsPage = () => (
  <Layout defaultLang="ru">
    <Seo
      title="Tехнические навыки"
      description="Вот знания веб-технологий, в которых я преуспел больше всего, их я активно использую в своих проектах."
      slug="/ru/skills"
    />
    <h1>
      <span style={{ display: `none` }}>Навыки</span>
      <TypedReact strings={[`Мои навыки`]} />
    </h1>
    <h4>Знания технологий</h4>
    <p>
      Вот знания веб-технологий, в которых я преуспел больше всего, 
      и которые я активно использую в своих и клиентских проектах.
    </p>
    <SkillsBlock dataSkills={dataSkills} />
  </Layout>
)

export default SkillsPage
