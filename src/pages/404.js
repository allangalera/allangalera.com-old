import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className="not-found">
      <h1>NOT FOUND</h1>
      <p>It seems you are getting nowhere. . .</p>
    </div>
  </Layout>
)

export default NotFoundPage
