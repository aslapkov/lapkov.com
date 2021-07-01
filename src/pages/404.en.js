import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import Seo from "../components/seo"

const NotFoundPage = ({ location }) => (
  <Layout location={location} defaultLang="en">
    <Seo location={location} title="404 PAGE NOT FOUND" />
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <h1>404 NOT FOUND</h1>
    <p>
      Probably, this is page does not exist on the site. Come back to{" "}
      <Link to="/">home</Link>!
    </p>
  </Layout>
)

export default NotFoundPage
