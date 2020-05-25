import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Cover from '../components/Cover'

export const CategoryTemplate = ({key,title,imageUrl,description,slug}) => {
  return (
    <Link key={key} to={slug} className='no-decoration'>
      <div className='card'>
          <div className='card__imgframe'>
            {imageUrl
            ? <img src={imageUrl}/>
            : null}
          </div>
        <div className='card__textbox' style={imageUrl ? {height: 'auto'}: {height: '100%'}}>
          <div className='card__titletext'>
            {title}
          </div>
          <div className='card__description'>
            {description}
          </div>
        </div>
      </div>
    </Link>
  )
}

const Category = ({data, pageContext}) => {
    return (
        <Layout>
            <Cover>
              <h2>{pageContext.category}</h2>
              <div className='flexbox'>
              {data.allMarkdownRemark.edges.map(({node},key)=>(
                <CategoryTemplate 
                  key={key}
                  title={node.frontmatter.title} 
                  description={node.frontmatter.description} 
                  imageUrl={node.frontmatter.imageUrl} 
                  slug={node.fields.slug}
                />
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