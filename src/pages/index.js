import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <p>Welcome to me website.</p>
    <p>This is a sample site for Gatsby</p>
  </Layout>
)

export default IndexPage
