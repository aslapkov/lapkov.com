/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'

import ImageBack from './imageBack'
import NavBar from './navBar'
import Header from './header'
import Footer from './footer'
import layout from './layout.module.css'

const Layout = ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title,
            siteLinks {
              id,
              name,
              slug
            }
          }
        }
      }
    `
  )

  return (
    <React.Fragment>
      <div className={layout.backImg}>
        <ImageBack />
      </div>
      <div style={{ padding: `0 15px`, margin: `0 auto` }}>
        <div style={{ margin: `0 -15px` }}>
          <div className={layout.col4}>
            <NavBar siteLinks={data.site.siteMetadata.siteLinks} />
          </div>
          <div className={layout.col8}>
            <Header siteTitle={data.site.siteMetadata.title} />
            <div className={layout.contentBlock}>
              <main className={layout.contentCss}>
                {children}
              </main>
              <hr />
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
