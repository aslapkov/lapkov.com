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
    label: `Программирование сайтов, приложений на javascript`,
  },
  {
    iconName: IconDesign,
    label: `Разработка UI/UX дизайна для сайтов`,
  },
  {
    iconName: IconSupport,
    label: `Поддержка небольших проектов и веб-сайтов`,
  },
  {
    iconName: IconSeo,
    label: `Поисковая оптимизация сайтов`,
  },
]

const IndexPage = () => (
  <Layout>
    <Seo
      title="Я фронтенд-разработчик, веб-дизайнер и SEO-специалист."
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
        веб-сайты на JavaScript/TypeScript с простым дизайном, разрабатывать веб-приложения на основе бизнес-потребностей
        и особенно решать проблемы клиентов или потребителей. Последние 5 лет я создавал современные и
        прогрессивные веб-сайты для небольших компаний, организаций и стартапов, которые помогли им достичь
        своих бизнес-целей, в том числе за счет привлечения множества новых клиентов через Google, Яндекс.
        Смотрите небольшую часть моих проектов на странице <Link to={translateLink("/works", "ru")}>работ</Link>.
        Мне нравится получать все больше и больше образования в современной сети. Я учусь каждый день и готов узнавать новое.
      </p>
      <p>
        На данный момент я ищу новые интересные веб-проекты. Если у вас есть что-нибудь,
        над чем я мог бы поработать, пожалуйста{" "}
        <Link to={translateLink("/contact", "ru")}>напишите мне</Link>!
      </p>
    </blockquote>
    <h4>Что я могу для вас сделать?</h4>
    <IconBlock data={dataIcon} />
  </Layout>
)

export default IndexPage
