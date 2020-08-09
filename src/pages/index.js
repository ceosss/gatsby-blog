import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

const Home = ({
  data: {
    file: {
      childImageSharp: { fluid },
    },
  },
}) => {
  console.log(fluid)
  return (
    <div>
      <h1>Hello From Swaraj</h1>
      <Img fluid={fluid} />
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
