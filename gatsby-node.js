const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query getBlogs {
      blogs: allStrapiBlogs {
        nodes {
          slug
        }
      }
    }
  `)
  result.data.blogs.nodes.forEach(blog => {
    createPage({
      path: `blogs/${blog.slug}`,
      component: path.resolve(`src/template/blog-template.jsx`),
      context: {
        slug: blog.slug,
      },
    })
  })
}
