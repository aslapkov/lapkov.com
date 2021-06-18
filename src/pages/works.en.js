import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import TypedReact from "../components/typedReact"
import WorksBlock from "../components/WorksBlock"
import dataWorks from "../data/en/works"

const WorksPage = () => (
  <Layout>
    <Seo
      title="Works"
      description="This is a part of my works and projects in which I participated. Learn more about me on the home page."
      slug="/works/"
    />
    <h1>
      <span style={{ display: `none` }}>Works</span>
      <TypedReact strings={[`Some works`]} />
    </h1>
    <h4>These are part of my projects to can show</h4>
    <p>
      There are not all of the works or projects I've participated in. The
      reason is some of them I cannot present, due to trade secrets, to the
      nature of the applications, they no longer exist and for some other
      reasons
    </p>
    <WorksBlock dataWorks={dataWorks} />
  </Layout>
)

export default WorksPage
