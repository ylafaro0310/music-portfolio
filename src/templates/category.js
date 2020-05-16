import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Cover from '../components/Cover'
//import { HTMLContent } from '../components/Content'

const Category = ({data}) => {
    return (
        <Layout>
            <Cover>
              {data.allMarkdownRemark.edges.map(({node},key)=>(
                <div key={key}>
                  <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
                  {node.frontmatter.imageUrl && <img src={node.frontmatter.imageUrl}/>}
                </div>
              ))}
            </Cover>
        </Layout>
    )
}

export default Category

export const pageQuery = graphql`
  query categoryPagy($category: String) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter:  { category: { eq: $category } } }
    ) {
      edges { 
        node {
          html
          fields { 
            slug
          }
          frontmatter {
            title
            imageUrl
          }    
        }
      }
    }
  }
`