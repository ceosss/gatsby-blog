import React, { useEffect } from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import readingTime from "reading-time"
import ReactMarkdown from "react-markdown"
import Prism from "prismjs"

import "./../css/blog-template.scss"

const BlogTemp = props => {
  useEffect(() => {
    Prism.highlightAll()
  }, [])
  const blog = props.data.blog

  const profileImg = props.data.file.childImageSharp.fixed
  console.log(blog)
  return (
    <section className="single-blog">
      <div className="head">
        <h1>{blog.title}</h1>
      </div>
      <div className="desc">
        <Img fixed={profileImg} />
        <span className="name-date">
          <p>Swaraj</p>
          <p>•</p>
          <p>{blog.date}</p>
        </span>
        <span className="cat-read">
          <p>{blog.category}</p>
          <p>•</p>
          <p> {readingTime(blog.content).text}</p>
        </span>
      </div>
      <div className="featured-image">
        <Img fluid={blog.image.childImageSharp.fluid} />
      </div>
      <div className="content">
        <ReactMarkdown source={blog.content} />
      </div>
      <div className="btn">
        <Link to="/blogs">GO BACK</Link>
      </div>
    </section>
  )
}

export default BlogTemp

export const query = graphql`
  query getBlog($slug: String) {
    blog: strapiBlogs(slug: { eq: $slug }) {
      category
      content
      date(formatString: "Do MMM, YYYY")
      description
      image {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      title
    }
    file(relativePath: { eq: "Public.jpeg" }) {
      childImageSharp {
        fixed(width: 35) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
