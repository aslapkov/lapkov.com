import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import TypedReact from "../components/typedReact"
import ContactBlock from "../components/ContactBlock"
import dataContact from "../data/en/contact"

const ContactPage = ({ location }) => (
  <Layout location={location} defaultLang="en">
    <Seo
      location={location}
      title="Contacts | A. Lapkov"
      description="To contact me you can send an email or a message to telegram."
      slug="/contacts/"
    />
    <h1>
      <span style={{ display: `none` }}>Contact page</span>
      <TypedReact strings={[`Contacts`]} />
    </h1>
    <ContactBlock dataContact={dataContact} />
  </Layout>
)

export default ContactPage
