import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import Seo from "../components/seo"
import Icons from "../components/icons"
import TypedReact from "../components/typed-react"
import translateLink from "../utils/translateLink"
import dataIndex from "../data/ru/index"

const IndexPage = ({ location }) => (
  <Layout location={location} defaultLang="ru">
    <Seo
      location={location}
      title="Я веб-разработчик, UI/UX дизайнер и SEO-специалист | А. Лапков"
      description="Меня зовут Александр Лапков. Я фронтенд, веб-разработчик и UI/UX дизайнер.
        Я занимаюсь созданием современных и прогрессивных веб-сайтов для небольших компаний,
        организаций и стартапов."
    />
    <Image />
    <h1 style={{ height: "130px", textAlign: "center" }}>
      <span style={{ display: "none" }}>
        Я Александр. Фронтенд разработчик, UI/UX дизайнер и SEO
        specialist.
      </span>
      <TypedReact
        strings={[
          `Я – Александр. <br />Веб-разработчик, <br />UI/UX дизайнер`,
        ]}
      />
    </h1>
    <h2>Обо мне</h2>
    <blockquote>
      <p>
        Меня зовут <strong>Александр Лапков</strong>. Я фронтенд, веб-разработчик и UI/UX дизайнер. Мне нравится создавать
        веб-сайты на JavaScript/TypeScript с простым дизайном, разрабатывать веб-приложения на основе бизнес-потребностей клиентов,
        а также решать их проблемы. Последние 7 лет я создаю современные и прогрессивные веб-сайты для небольших компаний,
        организаций и стартапов, которые помогли им достичь своих бизнес-целей, в том числе за счет привлечения новых клиентов через
        поиск Google, Яндекс. Смотрите небольшую часть моих проектов на странице <Link to={translateLink("/works/", "ru")}>работы</Link>.
        Мне нравится получать все больше и больше опыта в современной сети. Я учусь каждый день и всегда готов узнавать новое.
      </p>
      <p>
        Я всегда в поиске новых и интересных проектов. Если у вас есть что-нибудь,
        над чем я мог бы поработать, пожалуйста{" "}
        <Link to={translateLink("/contact/", "ru")}>напишите мне</Link>!
      </p>
    </blockquote>
    <h4>Что я могу для вас сделать?</h4>
    <Icons data={dataIndex} />
  </Layout>
)

export default IndexPage
