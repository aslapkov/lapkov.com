import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Experience from "../components/experience"
import dataExperience from "../data/ru/experience"

const ExperiencePage = ({ location }) => (
  <Layout location={location} defaultLang="ru">
    <Seo
      location={location}
      title="Опыт | А. Лапков"
      description="Небольшая хронология моего опыта. Шаг за шагом вы можете узнать о моих лучших практиках."
    />
    <Experience dataExperience={dataExperience} />
  </Layout>
)

export default ExperiencePage
