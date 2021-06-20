import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

const Image = () => {
  const data = useStaticQuery(
    graphql`
      query {
        file(relativePath: { eq: "i.jpg" }) {
          childImageSharp {
            gatsbyImageData(
              layout: FIXED,
              placeholder: BLURRED,
              width: 200,
              height: 200
            )
          }
        }
      }
    `
  )

  return (
    <GatsbyImage
      image={data.file.childImageSharp.gatsbyImageData}
      alt="Me"
      style={{
        marginBottom: "30px",
        borderRadius: "50%",
      }}
      imgStyle={{
        borderRadius: "50%",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    />
  )
}

export default Image
