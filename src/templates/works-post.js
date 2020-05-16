import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Cover from '../components/Cover'
import { HTMLContent } from '../components/Content'

const WorksPost = ({data}) => {
    const { markdownRemark: post } = data;   
    return (
        <Layout>
            <Cover>
                <h2>{post.frontmatter.title}</h2>
                <HTMLContent content={post.html}/>
            </Cover>
        </Layout>
    )
}

export default WorksPost

export const pageQuery = graphql`
  query worksPost($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`