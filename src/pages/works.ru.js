import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import TypedReact from "../components/typedReact"
import WorksBlock from "../components/WorksBlock"
import dataWorks from "../data/ru/works"

const WorksPage = ({ location }) => (
  <Layout location={location} defaultLang="ru">
    <Seo
      location={location}
      title="Работы"
      description="Это часть моих работ и проектов, в которых я участвовал. Узнайте больше обо мне на домашней странице."
      slug="/works/"
    />
    <h1>
      <span style={{ display: `none` }}>Работы</span>
      <TypedReact strings={[`Часть работ`]} />
    </h1>
    <h4>Это часть моих проектов, которые я могу показать</h4>
    <p>
      Это не все работы или проекты, в которых я участвовал. Причина
      в том, что некоторые из них я не могу показать из-за коммерческой
      тайны, из-за характера приложений или они больше не существуют,
      ну и по некоторым другим причинам
    </p>
    <WorksBlock dataWorks={dataWorks} />
  </Layout>
)

export default WorksPage
