import React, { useEffect } from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import "../../styles/global.css"
import Menu from "../components/menu"
import BlogSection from "../components/blog_section"
import FooterSection from "../components/footer_section"
import  { handleScrollEffect } from "../lib/handle_scroll"
import { Link } from 'gatsby'

export default ({data}) => {
  useEffect(handleScrollEffect)
  const { edges: posts } = data.allMarkdownRemark;

  return (
    <main className="short">
      <div className="bg1 parallax"></div>
      <section id="logo">
        <Link to="/" className="logo">
          <img src="/cropped-Sortilege-Logo-2.png" />
        </Link>
      </section>
      <section id="menu">
        <Menu/>
      </section>

      <section className="panel">
        <BlogSection posts={posts}/>
      </section>
      <section>
        <FooterSection/>
      </section>
    </main>
  )
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
