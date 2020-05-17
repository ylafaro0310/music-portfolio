import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Cover from '../components/Cover'

const Category = ({data, pageContext}) => {
    return (
        <Layout>
            <Cover>
              <h2>{pageContext.category}</h2>
              <div className='flexbox'>
              {data.allMarkdownRemark.edges.map(({node},key)=>(
                <Link key={key} to={node.fields.slug} className='no-decoration'>
                  <div className='card'>
                      <div className='card__imgframe'>
                        {node.frontmatter.imageUrl
                        ? <img src={node.frontmatter.imageUrl}/>
                        : null}
                      </div>
                    <div className='card__textbox' style={node.frontmatter.imageUrl ? {height: 'auto'}: {height: '100%'}}>
                      <div className='card__titletext'>
                        {node.frontmatter.title}
                      </div>
                      <div className='card__description'>
                        {node.frontmatter.description}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
              </div>
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
            description
            imageUrl
          }    
        }
      }
    }
  }
`