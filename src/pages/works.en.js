import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import TypedReact from "../components/typed-react"
import Works from "../components/works"
import dataWorks from "../data/en/works"

const WorksPage = ({ location }) => (
  <Layout location={location} defaultLang="en">
    <Seo
      location={location}
      title="Works | A. Lapkov"
      description="This is a part of my works and projects in which I participated. Learn more about me on the home page."
    />
    <h1>
      <span style={{ display: `none` }}>Works</span>
      <TypedReact strings={[`Some works`]} />
    </h1>
    <h2>These are part of my projects to can show</h2>
    <p>
      There are not all of the works or projects I've participated in. The
      reason is some of them I cannot present, due to trade secrets, to the
      nature of the applications, they no longer exist and for some other
      reasons.
    </p>
    <Works dataWorks={dataWorks} />
  </Layout>
)

export default WorksPage
