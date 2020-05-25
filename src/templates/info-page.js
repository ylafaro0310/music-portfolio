import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Cover from '../components/Cover'
import { HTMLContent } from '../components/Content'

export const InfoPageTemplate = ({content, title}) => {
    return (
        <Layout>
            <Cover>
                <h2>{title}</h2>
                <HTMLContent content={content}/>
            </Cover>
        </Layout>
    )
}

const InfoPage = ({data}) => {
  const { markdownRemark: post } = data;
  return (
    <InfoPageTemplate title={post.frontmatter.title} content={post.html} />
  )
}

export default InfoPage

export const infoPageQuery = graphql`
  query InfoPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`