import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Cover from '../components/Cover'
import { HTMLContent } from '../components/Content'

export const ProfilePageTemplate = ({title, image, content}) => {
  return (
    <Layout>
        <Cover>
        <div>
            <h2>{title}</h2>
            {image && <img width="300px" src={image}/>}
            <HTMLContent content={content}/>
        </div>
        </Cover>
    </Layout>
  )
}

const ProfilePage = ({data}) => {
  const { markdownRemark: post } = data;
  return (
    <ProfilePageTemplate title={post.frontmatter.title} image={post.frontmatter.image} content={post.html} />    
  )
}

export default ProfilePage

export const query = graphql`
  query ProfilePage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        image
      }
    }
  }
`