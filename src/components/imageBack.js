import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

// import layoutStyle from './layout.module.css'

const ImageBack = () => {
  const data = useStaticQuery(
    graphql`
      query {
        placeholderImage: file(relativePath: { eq: "background.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 2560) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  );

  return <Img fluid={data.placeholderImage.childImageSharp.fluid} />;
};

export default ImageBack;
