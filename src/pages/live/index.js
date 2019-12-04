import React from 'react'
import Layout from '../../components/Layout'
import { graphql } from 'gatsby'

const Live = ({data}) => (
    <Layout>
    <div className="card">
    <div className="card-content">
        <div>
            <h2>Live</h2>
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
    </div>
    </div>
    </Layout>
)

export default Live

export const query = graphql`
    query {
        allMarkdownRemark(
            filter: { fields: { collection : { eq: "live" } } }
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