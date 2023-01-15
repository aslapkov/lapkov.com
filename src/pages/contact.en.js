import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import TypedReact from "../components/typed-react"
import Contact from "../components/contact"
import dataContact from "../data/en/contact"

const ContactPage = ({ location }) => (
  <Layout location={location} defaultLang="en">
    <Seo
      location={location}
      title="Contacts | A. Lapkov"
      description="To contact me you can send an email or a message to telegram."
    />
    <h1>
      <span style={{ display: `none` }}>Contact page</span>
      <TypedReact strings={[`Contacts`]} />
    </h1>
    <Contact dataContact={dataContact} />
  </Layout>
)

export default ContactPage
