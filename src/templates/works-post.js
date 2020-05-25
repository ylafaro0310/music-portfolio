import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Cover from '../components/Cover'
import { HTMLContent } from '../components/Content'

export const WorksPostTemplate = ({title,content}) => {
    return (
        <Layout>
            <Cover>
                <h2>{title}</h2>
                <HTMLContent content={content}/>
            </Cover>
        </Layout>
    )
}

const WorksPost = ({data}) => {
  const { markdownRemark: post } = data;   
  return (
    <WorksPostTemplate title={post.frontmatter.title} content={post.html}/>
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