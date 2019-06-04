import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
// import Image from '../components/image'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="I am web developer" />
    <h1>Hi Friend!</h1>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      {/*<Image />*/}
    </div>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>

    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
