import React from "react";
//import Helmet from "react-helmet";
import BlogEntry from "../components/blog_entry"
import Menu from "../components/menu"
import FooterSection from "../components/footer_section"

export default function Template({
  data 
}) {
  const post = data.markdownRemark; 
  return (
    <main className="short">
      <div className="bg1 parallax"></div>
      <section id="logo">
        <a href="http://sortilege.online/" className="logo">
          <img src="http://sortilege.online/wp-content/uploads/2018/05/cropped-Sortilege-Logo-2.png" />
        </a>
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