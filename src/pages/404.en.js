import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import Seo from "../components/seo"
import translateLink from "../utils/translateLink"

const NotFoundPage = ({ location }) => (
  <Layout location={location} defaultLang="en">
    <Seo location={location} title="404: Not found" /> 
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <h1>404: Not found</h1>
    <p>
      Probably, this is page does not exist on the site. Come back to{" "}
      <Link to={translateLink("/", "en")}>home</Link>!
    </p>
  </Layout>
)

export default NotFoundPage
