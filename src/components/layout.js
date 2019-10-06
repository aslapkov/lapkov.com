import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import ImageBack from './imageBack';
import NavBar from './navbar';
import Header from './header';
import Footer from './footer';

import GlobalStyle from './global.style';
import {
  ImgDiv,
  Container,
  Row,
  Col4,
  Col8,
  Content,
  Main,
} from './layout.style';

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
        <Row>
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
        </Row>
      </Container>
    </React.Fragment>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
