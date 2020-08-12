import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import "./../css/main.scss"

const Home = ({
  data: {
    file: {
      childImageSharp: { fluid },
    },
  },
}) => {
  console.log(fluid)
  return (
    <div className="home">
      <h1>Hello From Swaraj</h1>
      <div className="img">
        <Img fluid={fluid} />
      </div>
      <div className="btn">
        <Link to="/blogs">Blog</Link>
      </div>
    </div>
  )
}

export default Home

export const query = graphql`
  {
    file(relativePath: { eq: "Public.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
