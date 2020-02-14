import React from "react"
import Home from "./home"

export default ({data}) => {
  const { edges: posts } = data.allMarkdownRemark;

  return <Home posts={posts}/>
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            title
            date
            path
          }
        }
      }
    }
  }
`;