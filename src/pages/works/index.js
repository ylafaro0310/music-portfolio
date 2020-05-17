import React from 'react'

import Layout from '../../components/Layout'
import Cover from '../../components/Cover'
import { Link, graphql } from 'gatsby'

const Works = ({data}) => (
    <Layout>
        <Cover>
        <h2>Works</h2>
        <div>
            <h3>Band</h3>
            <h4>JANOMETONES</h4>
            <div>
                {data.janome.edges.map(({ node }, key) => (
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
                <Link to='/works/JANOMETONES'>View all JANOMETONES→</Link>
            </div>

            <br/>
            <h4>fouridea</h4>
            <div>
                {data.fouridea.edges.map(({ node }, key) => (
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
                <Link to='/works/fouridea'>View all four idea→</Link>
            </div>
        
            <h3>Compose and cover</h3>
            <h4>demo</h4>
            <div>
                {data.demo.edges.map(({ node }, key) => (
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
            <Link to='/works/demo'>View all demo→</Link>
            </div>
            
        </div>
        </Cover>
    </Layout>
)

export default Works

export const query = graphql`
    query {
        janome: allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
            filter: { frontmatter: { category: { eq: "JANOMETONES"} } }
            limit: 1
          ) {
            edges {
                node {
                    id
                    html
                    fields { 
                        slug
                    }
                    frontmatter {
                      title
                      imageUrl
                      description
                    }
                }
            }
        }
        fouridea: allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
            filter: { frontmatter: { category: { eq: "fouridea"} } }
            limit: 1
          ) {
            edges {
                node {
                    id
                    html
                    fields { 
                        slug
                    }
                    frontmatter {
                      title
                      imageUrl
                      description
                    }
                }
            }
        }
        demo: allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
            filter: { frontmatter: { category: { eq: "demo"} } }
            limit: 1
          ) {
            edges {
                node {
                    id
                    html
                    fields { 
                        slug
                    }
                    frontmatter {
                      title
                      imageUrl
                      description
                    }
                }
            }
        }
    }
`