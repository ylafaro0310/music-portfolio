import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import "../styles/index.css"
import { ContactContent } from "./contact/index"

const IndexPage = ({data}) => (
  <Layout isTopPage>
    <SEO title="Home" />
    <div className="card">
      <div className="card-content">
      <h2>Works</h2>        
      <div>
        <p>2019.11.21 JANOMETONES「通り雨」のベースを弾かせていただきました。</p>
          <div className="frame-wrapper__video">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/wObevmZiYzY" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
      </div>
      <Link to="/works">View all works→</Link>
      </div>
    </div>
    <div className="card">
    <div className="card-content">
      <h2>Live</h2>        
      <div>
      {data.allMarkdownRemark.edges.map(({ node }, key) => (
            <div key={key}>
            {key !== 0 && <hr/>}
            <span>
                {node.frontmatter.date}{" "}
                    — {node.frontmatter.title}
                </span>
                <div dangerouslySetInnerHTML={{ __html: node.html }}/>
            </div>
            ))}
      </div>
      <Link to="/live">View all live→</Link>
      </div>
    </div>
    <div className="card">
    <div className="card-content">
      <ContactContent/>
    </div>
    </div>
  </Layout>
)

export default IndexPage

export const query = graphql`
    query {
        allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
            filter: { fields: { collection : { eq: "live" } } }
            limit: 1
        ) {
        edges {
            node {
                id
                html
                frontmatter {
                  title
                  date(formatString: "YYYY.MM.DD")
                }
            }
        }
        }
    }
    `