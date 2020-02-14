import React from 'react'
import { Link } from 'gatsby'

const BlogEntry = ({post}) => {
  return (
    <div className="blog-post-preview" key={post.id}>
        <div>
        {<span>{post.frontmatter.date}</span>}
        <h2>
            <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
        </h2>
        </div>
        <p>
        {post.html ? 
        <div dangerouslySetInnerHTML={{ __html: post.html }}/> : 
        post.excerpt}
        </p>
    </div>
  )
}

export default BlogEntry
