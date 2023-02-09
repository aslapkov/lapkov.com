import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Works from "../components/works"
import dataWorks from "../data/ru/works"

const WorksPage = ({ location }) => (
  <Layout location={location} defaultLang="ru">
    <Seo
      location={location}
      title="Работы | А. Лапков"
      description="Это часть моих работ и проектов, в которых я участвовал. Узнайте больше обо мне на домашней странице."
    />
    <Works dataWorks={dataWorks} />
  </Layout>
)

export default WorksPage
