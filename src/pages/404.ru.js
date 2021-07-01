import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import Seo from "../components/seo"

const NotFoundPage = ({ location }) => (
  <Layout location={location} defaultLang="ru">
    <Seo location={location} title="404 СТРАНИЦА НЕ НАЙДЕНА" />
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <h1>404 СТРАНИЦА НЕ НАЙДЕНА</h1>
    <p>
      Возможно, этой страницы на сайте нет. Вернуться к{" "}
      <Link to="/">главной</Link>!
    </p>
  </Layout>
)

export default NotFoundPage
