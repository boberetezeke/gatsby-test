import React from 'react'
import BlogEntry from "./blog_entry"
import { graphql } from 'gatsby'

const BlogSection = (args) => {
  console.log("BlogSection")
  console.log(args)
  
  const posts = [] //data.allMarkdownRemark.edges;
  return (
      <div className="panel-content">
        <div className="wrap">
          <div className="entry-header">
            <h2 className="entry-title">Blog</h2>
          </div>
          <div className="entry-content">
            {posts.filter(post => post.node.frontmatter.title.length > 0)
              .map((post) => (<BlogEntry post={post}/>))
            }
          </div>
        </div>
      </div>
  )
}
export default BlogSection

export const pageQuery = graphql `{
  allMarkdownRemark {
    edges {
      node {
        frontmatter {
          title
        }
      }
    }
  }
}`