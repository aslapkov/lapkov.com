import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import TypedReact from "../components/typedReact"
import SkillsBlock from "../components/SkillsBlock"

const SkillsPage = () => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            dataPage {
              dataSkills {
                label
                percent
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
        title="Skills"
        description="Here are the developing skills in which I succeeded the most and I'm active using in my projects."
        slug="/skills/"
      />
      <h1>
        <span style={{ display: `none` }}>Skills</span>
        <TypedReact strings={[`My Skills`]} />
      </h1>
      <h4>Tech skills</h4>
      <p>
        Here are the developing skills in which I succeeded the most and I'm
        actively using in my and client projects.
      </p>
      <SkillsBlock data={data.site.siteMetadata.dataPage.dataSkills} />
    </Layout>
  )
}

export default SkillsPage
