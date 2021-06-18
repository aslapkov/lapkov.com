import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import TypedReact from "../components/typedReact"
import ContactBlock from "../components/ContactBlock"
import dataContact from "../data/ru/contact"

const ContactPage = () => (
  <Layout>
    <Seo
      title="Контакты"
      description="Чтобы связаться со мной, вы можете отправить email или сообщение в telegram."
      slug="/contacts/"
    />
    <h1>
      <span style={{ display: `none` }}>Страница контактов</span>
      <TypedReact strings={[`Контакты`]} />
    </h1>
    <ContactBlock dataContact={dataContact} />
  </Layout>
)

export default ContactPage
