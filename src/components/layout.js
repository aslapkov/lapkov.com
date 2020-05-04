import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import ImageBack from './imageBack';
import NavBar from './Navbar';
import Header from './Header';
import Footer from './Footer';
import styles from './layout.module.css';

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
      <div className={styles.imgDiv}>
        <ImageBack />
      </div>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.col3}>
            <NavBar siteLinks={data.site.siteMetadata.siteLinks} />
          </div>
          <div className={styles.col9}>
            <Header
              siteTitle={data.site.siteMetadata.title}
              siteLinks={data.site.siteMetadata.siteLinks}
            />
            <div className={styles.content}>
              <div className={styles.main}>{children}</div>
              <hr />
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
