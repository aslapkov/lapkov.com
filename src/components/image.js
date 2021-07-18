import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Image = () => (
  <StaticImage
    src="../images/i.jpg"
    alt="Lapkov"
    placeholder="blurred"
    width={200}
    height={200}
    style={{
      marginBottom: "30px",
      borderRadius: "50%",
    }}
  />
)

export default Image
