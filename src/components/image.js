import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const Image = () => {
  const data = useStaticQuery(
    graphql`
      query {
        placeholderImage: file(relativePath: { eq: "i.jpg" }) {
          childImageSharp {
            fixed(width: 200, height: 200) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `
  );

  return (
    <Img
      fixed={data.placeholderImage.childImageSharp.fixed}
      className="imageDiv"
    />
  );
};

export default Image;
