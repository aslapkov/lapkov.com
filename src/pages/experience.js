import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import TypedReact from "../components/typedReact"
import ExperienceBlock from "../components/ExperienceBlock"

const ExperiencePage = () => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            dataPage {
              dataExp {
                period
                position
                loc
                site
                info
              }
            }
          }
        }
      }
    `
  )

  return (
    <Layout>
      <Seo
        title="Experience"
        description="A small chronology of my experience. Step by step, you can learn about my best practices."
        slug="/experience/"
      />
      <h1>
        <span style={{ display: `none` }}>Experience</span>
        <TypedReact strings={[`About experience`]} />
      </h1>
      <h4>The timeline of experience</h4>
      <ExperienceBlock data={data.site.siteMetadata.dataPage.dataExp} />
    </Layout>
  )
}

export default ExperiencePage
