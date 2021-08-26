import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import Seo from "../components/seo"
import IconBlock from "../components/IconBlock"
import TypedReact from "../components/typedReact"
import translateLink from "../components/logic/translateLink"
import IconCode from "../images/code.svg"
import IconDesign from "../images/design.svg"
import IconSupport from "../images/support.svg"
import IconSeo from "../images/seo.svg"

const dataIcon = [
  {
    iconName: IconCode,
    label: `Программирование сайтов, приложений`,
  },
  {
    iconName: IconDesign,
    label: `Разработка UI/UX дизайна для сайтов`,
  },
  {
    iconName: IconSeo,
    label: `Поисковая оптимизация сайтов (SEO)`,
  },
  {
    iconName: IconSupport,
    label: `Серверная поддержка проектов`,
  },
]

const IndexPage = ({ location }) => (
  <Layout location={location} defaultLang="ru">
    <Seo
      location={location}
      title="Я фронтенд-разработчик, веб-дизайнер и SEO-специалист | А. Лапков"
      description="Меня зовут Александр Лапков. Я фронтенд-разработчик и UX/UI дизайнер.
      Я занимаюсь созданием современных и прогрессивных веб-сайтов для небольших компаний,
      организаций и стартапов."
    />
    <Image />
    <h1 style={{ height: `160px` }}>
      <span style={{ display: `none` }}>
        Привет! Я Александр. Веб-разработчик, UX/UI дизайнер и SEO
        specialist.
      </span>
      <TypedReact
        strings={[
          `Привет! <br />Я Александр. <br />Веб-разработчик, <br />UX/UI дизайнер`,
        ]}
      />
    </h1>
    <h4>Обо мне</h4>
    <blockquote>
      <p>
        Меня зовут <strong>Александр Лапков</strong>. Я фронтенд, веб-разработчик и UX/UI дизайнер. Мне нравится создавать
        веб-сайты на JavaScript/TypeScript с простым дизайном, разрабатывать веб-приложения на основе бизнес-потребностей клиентов,
        а также решать их проблемы. Последние 5 лет я создаю современные и прогрессивные веб-сайты для небольших компаний,
        организаций и стартапов, которые помогли им достичь своих бизнес-целей, в том числе за счет привлечения новых клиентов через
        поиск Google, Яндекс. Смотрите небольшую часть моих проектов на странице <Link to={translateLink("/works", "ru")}>работы</Link>.
        Мне нравится получать все больше и больше опыта в современной сети. Я учусь каждый день и всегда готов узнавать новое.
      </p>
      <p>
        Я всегда в поиске новых и интересных проектов. Если у вас есть что-нибудь,
        над чем я мог бы поработать, пожалуйста{" "}
        <Link to={translateLink("/contact", "ru")}>напишите мне</Link>!
      </p>
    </blockquote>
    <h4>Что я могу для вас сделать?</h4>
    <IconBlock data={dataIcon} />
  </Layout>
)

export default IndexPage
