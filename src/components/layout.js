/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import ImageBack from './imageBack';
import NavBar from './navBar';
import Header from './header';
import Footer from './footer';

import GlobalStyle from './global.style';
import { ImgDiv, Container, Col4, Col8, Content, Main } from './layout.style';

const Layout = ({ children, location }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            siteLinks {
              id
              name
              slug
            }
          }
        }
      }
    `
  );

  return (
    <React.Fragment>
      <GlobalStyle />
      <ImgDiv>
        <ImageBack />
      </ImgDiv>
      <Container>
        <div style={{ margin: `0 -15px` }}>
          <Col4>
            <NavBar siteLinks={data.site.siteMetadata.siteLinks} />
          </Col4>
          <Col8>
            <Header
              siteTitle={data.site.siteMetadata.title}
              siteLinks={data.site.siteMetadata.siteLinks}
            />
            <Content>
              <Main>{children}</Main>
              <hr />
              <Footer />
            </Content>
          </Col8>
        </div>
      </Container>
    </React.Fragment>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
