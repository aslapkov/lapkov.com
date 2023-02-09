import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Contact from "../components/contact"
import dataContact from "../data/en/contact"

const ContactPage = ({ location }) => (
  <Layout location={location} defaultLang="en">
    <Seo
      location={location}
      title="Contacts | A. Lapkov"
      description="To contact me you can send an email or a message to telegram."
    />
    <Contact dataContact={dataContact} />
  </Layout>
)

export default ContactPage
