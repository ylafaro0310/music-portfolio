import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/Layout'
import Cover from '../components/Cover'
import { HTMLContent } from '../components/Content'

const Profile = ({data}) => {
  const { markdownRemark: post } = data;
  return (
    <Layout>
        <Cover>
        <div>
            <h2>{post.frontmatter.title}</h2>
            {post.frontmatter.imageUrl && <img width="300px" src={post.frontmatter.imageUrl}/>}
            <HTMLContent content={post.html}/>
        </div>
        </Cover>
    </Layout>
  )
}

export default Profile

export const query = graphql`
  query ProfilePage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        imageUrl
      }
    }
  }
`