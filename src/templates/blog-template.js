import React from "react";
//import Helmet from "react-helmet";
import BlogEntry from "../components/blog_entry"
import Menu from "../components/menu"
import FooterSection from "../components/footer_section"
import { Link } from 'gatsby'

export default function Template({
  data 
}) {
  const post = data.markdownRemark; 
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
        <BlogEntry post={post}/>
      </section>
      <section>
        <FooterSection/>
      </section>
    </main>
  );
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`
;