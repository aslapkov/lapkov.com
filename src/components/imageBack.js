import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

// import layoutStyle from './layout.module.css'

const ImageBack = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "background.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 2560) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data =>
      <Img fluid={data.placeholderImage.childImageSharp.fluid} />
    }
  />
)

export default ImageBack