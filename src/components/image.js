import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Image = () => (
  <StaticImage
    src="../images/iam.jpg"
    alt="Aleksandr Lapkov | Александр Лапков"
    placeholder="blurred"
    width={200}
    height={200}
    style={{
      width: "200px",
      marginBottom: "40px",
      borderRadius: "50%",
    }}
    imgStyle={{
      borderRadius: "50%",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    }}
  />
)

export default Image
