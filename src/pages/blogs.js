import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import ReactMarkdown from "react-markdown"
import "./../Styles/Blogs.scss"

const Blogs = ({
  data: {
    allStrapiBlogs: { nodes: blogs },
  },
}) => {
  const REACT_IMAGE_BASE_URL = "http://localhost:1337"
  return (
    <div>
      {blogs.map(blog => (
        <div className="s-blog-list" key={blog.slug}>
          <h1>{blog.title}</h1>
          <p>{blog.description}</p>
          <p>
            <em>{blog.date}</em>
          </p>
          <p>
            <em>{blog.category}</em>
          </p>
          <div className="img">
            <Img fluid={blog.image.childImageSharp.fluid} />
          </div>
          <article>
            <ReactMarkdown
              source={blog.content}
              transformImageUri={uri =>
                uri.startsWith("http") ? uri : `${REACT_IMAGE_BASE_URL}${uri}`
              }
            />
          </article>
        </div>
      ))}
    </div>
  )
}

export default Blogs

export const query = graphql`
  {
    allStrapiBlogs {
      nodes {
        category
        content
        date
        description
        title
        slug
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
