import React from 'react'
import BlogEntry from "./blog_entry"

const BlogSection = ({posts}) => {
  return (
      <div className="panel-content">
        <div className="wrap">
          <div className="entry-header">
            <h2 className="entry-title">Blog</h2>
          </div>
          <div className="entry-content">
            {posts.map(({ node: post }) => { return (<BlogEntry post={post}/>); })}
          </div>
        </div>
      </div>
  )
}
export default BlogSection