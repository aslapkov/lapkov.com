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
      style={{
        borderRadius: '50%',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        marginBottom: '30px',
      }}
    />
  );
};

export default Image;
