import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import TypedReact from "../components/typedReact"
import ExperienceBlock from "../components/ExperienceBlock"
import dataExperience from "../data/ru/experience"

const ExperiencePage = ({ location }) => (
  <Layout location={location} defaultLang="ru">
    <Seo
      location={location}
      title="Опыт"
      description="Небольшая хронология моего опыта. Шаг за шагом вы можете узнать о моих лучших практиках."
      slug="/experience/"
    />
    <h1>
      <span style={{ display: `none` }}>Опыт</span>
      <TypedReact strings={[`Об опыте`]} />
    </h1>
    <h4>Хронология опыта</h4>
    <ExperienceBlock dataExperience={dataExperience} />
  </Layout>
)

export default ExperiencePage
