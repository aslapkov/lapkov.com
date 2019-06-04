/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'

import NavBar from './navBar'
import Header from './header'
import layoutStyle from './layout.module.css'

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
    <div style={{ padding: `0 15px`, margin: `0 auto` }}>
      <div style={{ margin: `0 -15px` }}>
        <div className={layoutStyle.col4}>
          <NavBar siteLinks={data.site.siteMetadata.siteLinks} />
        </div>
        <div className={layoutStyle.col8}>
          <Header siteTitle={data.site.siteMetadata.title} />
          <div className={layoutStyle.contentBlock}>
            <main>{children}</main>
            <footer>
              © {new Date().getFullYear()}, Built with
              {` `}
              <a
                href="https://github.com/aslapkov/lapkov.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Gatsby
              </a>
            </footer>
          </div>
        </div>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
