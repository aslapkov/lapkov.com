import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const SkillsPage = () => (
  <Layout>
    <SEO title="Skills Page" />
    <h1>Hi from the Skills Page</h1>
    <p>Welcome to Skills Page</p>
    <Link to="/">To the homepage</Link>
  </Layout>
)

export default SkillsPage