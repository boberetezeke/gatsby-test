import React from 'react'

const BlogEntry = (opts) => {
  const post = opts.post 
  return (
    <div className="blog-post-preview" key={post.id}>
        <div>
        <span>{post.frontmatter.date}</span>
        <h2>
            <a href="#">{post.frontmatter.title}</a>
        </h2>
        </div>
        <p>
        {post.excerpt}
        </p>
    </div>
  )
}

export default BlogEntry
