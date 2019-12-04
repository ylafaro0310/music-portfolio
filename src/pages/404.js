import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className="card">
    <div className="card-content">
    <h1>404 NOT FOUND</h1>
    <p>指定されたURLのページは存在しません。</p>
    </div>
    </div>
  </Layout>
)

export default NotFoundPage
