import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import ImageBack from '../imageBack';
import NavBar from '../Navbar';
import Header from '../Header';
import Footer from '../Footer';

import {
  ImgDiv,
  Container,
  Row,
  Col3,
  Col9,
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
    <Fragment>
      <ImgDiv>
        <ImageBack />
      </ImgDiv>
      <Container>
        <Row>
          <Col3>
            <NavBar siteLinks={data.site.siteMetadata.siteLinks} />
          </Col3>
          <Col9>
            <Header
              siteTitle={data.site.siteMetadata.title}
              siteLinks={data.site.siteMetadata.siteLinks}
            />
            <Content>
              <Main>{children}</Main>
              <hr />
              <Footer />
            </Content>
          </Col9>
        </Row>
      </Container>
    </Fragment>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
