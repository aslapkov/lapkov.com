import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import Seo from "../components/seo"
import translateLink from "../components/logic/translateLink"

const NotFoundPage = ({ location }) => (
  <Layout location={location} defaultLang="ru">
    <Seo location={location} title=">404: Страница не найдена" />
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <h1>404: Страница не найдена</h1>
    <p>
      Возможно, этой страницы на сайте нет. Вернуться к{" "}
      <Link to={translateLink("/", "ru")}>главной</Link>!
    </p>
  </Layout>
)

export default NotFoundPage
