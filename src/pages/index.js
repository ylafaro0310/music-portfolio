import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/Layout"
//import SEO from "../components/seo"
import "../styles/index.css"
import { ContactContent } from "./contact/index"

const IndexPage = ({data}) => (
  <Layout isTopPage>
    <div className="top-cover">
      <div className="top-cover-content">
      <h2>Works</h2>        
      <div>
        {data.work.edges.map(({ node }, key) => (
          <div key={key}>
          <span>
              {node.frontmatter.date}{" "}
                  — {node.frontmatter.title}
              </span>
              <div dangerouslySetInnerHTML={{ __html: node.html }}/>
          </div>
          ))}
      </div>
      <Link to="/works">View all works→</Link>
      </div>
    </div>
    <div className="top-cover">
    <div className="top-cover-content">
      <h2>Live</h2>        
      <div>
      {data.live.edges.map(({ node }, key) => (
            <div key={key}>
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
    <div className="top-cover">
    <div className="top-cover-content">
      <ContactContent/>
    </div>
    </div>
  </Layout>
)

export default IndexPage

export const query = graphql`
    query {
      work: allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        filter: { frontmatter: { templateKey: { eq: "works-post"} } }
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

      live: allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "live-page"} } }
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