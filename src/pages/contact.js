import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const ContactPage = () => (
  <Layout>
    <SEO title="Contact Page" />
    <h1>Hi from the Contact Page</h1>
    <p>Welcome to Works Page</p>
    <Link to="/">To the homepage</Link>
  </Layout>
)

export default ContactPage
