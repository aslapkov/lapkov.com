import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Contact from "../components/contact"
import dataContact from "../data/ru/contact"

const ContactPage = ({ location }) => (
  <Layout location={location} defaultLang="ru">
    <Seo
      location={location}
      title="Контакты | А. Лапков"
      description="Чтобы связаться со мной, вы можете отправить email или сообщение в telegram."
    />
    <Contact dataContact={dataContact} />
  </Layout>
)

export default ContactPage
