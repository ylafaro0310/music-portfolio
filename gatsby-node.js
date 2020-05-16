/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const _ = require('lodash');
const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

// You can delete this file if you're not using it
exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              title
              category
              templateKey
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()))
      return Promise.reject(result.errors)
    }

    const posts = result.data.allMarkdownRemark.edges

    posts.forEach(edge => {
      const id = edge.node.id
      const templateKey = edge.node.frontmatter.templateKey;
      if(templateKey !== 'live-page'){
        createPage({
          path: edge.node.fields.slug,
          component: path.resolve(
            `src/templates/${String(templateKey)}.js`
          ),
          // additional data can be passed via context
          context: {
            id,
          },
        })
      }
    })

    let category = []
    posts.forEach((edge) => {
      if (_.get(edge, `node.frontmatter.category`)) {
        category = category.concat(edge.node.frontmatter.category)
      }
    })
    category = _.uniq(category)

    category.forEach((cat) => {
      const categoryPath = `/works/${cat}/`
        
      createPage({
        path: categoryPath,
        component: path.resolve(`src/templates/category.js`),
        context: {
          category: cat,
        },
      })
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  //fmImagesToRelative(node) // convert image paths for gatsby images

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
    // 親のFileNodeを取得して
    const parent = getNode(node.parent)
  
    // gatsby-config.jsで設定したFileNodeのsourceInstanceNameを
    // MarkdownRemarkのフィールドに引き継ぐ
    // 名前はMarkdownRemarkの他プロパティとかぶらないようにcollectionとしている
    createNodeField({
      node,
      name: 'collection',
      value: parent.sourceInstanceName,
    })
  }
}
