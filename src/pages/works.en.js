import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Works from "../components/works"
import dataWorks from "../data/en/works"

const WorksPage = ({ location }) => (
  <Layout location={location} defaultLang="en">
    <Seo
      location={location}
      title="Works | A. Lapkov"
      description="This is a part of my works and projects in which I participated. Learn more about me on the home page."
    />
    <Works dataWorks={dataWorks} />
  </Layout>
)

export default WorksPage
