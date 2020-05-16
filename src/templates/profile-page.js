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
            <Img fixed={data.file.childImageSharp.fixed} />
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
      }
    }
    file(relativePath: { eq: "profile.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed(width: 300) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`