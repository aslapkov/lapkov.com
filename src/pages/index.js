import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

// import layoutStyle from '../components/layout.module.css'

const IndexPage = () => (
  <Layout>
    <SEO title="I am web developer" />
    <Image />
    <h1>Hey! I am Alex.<br />
    Web developer, designer, SEO.<br />
    Here is something about me.</h1>
    <h4>ABOUT</h4>
    <p>About me or <Link to="/contact/">contact</Link>.</p>
  </Layout>
)

export default IndexPage
