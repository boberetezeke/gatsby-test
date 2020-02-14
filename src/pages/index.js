import React from "react"
import Menu from "./menu"
import HomeSection from "./sections/home_section"
import AboutSection from "./sections/about_section"
import GamesSection from "./sections/games_section"
import BlogSection from "./sections/blog_section"
import ContactSection from "./sections/contact_section"
import FooterSection from "./sections/footer_section"
import  { handleScrollEffect } from "../lib/handle_scroll"

export default ({data}) => {
  const { edges: posts } = data.allMarkdownRemark;

  useEffect(handleScrollEffect)
  return (
    <main>
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
        <HomeSection/>
      </section>
      <div className="bg2 parallax"> </div>
      <section className="panel">
        <AboutSection/>
      </section>
      <section className="panel">
        <GamesSection/>
      </section>
      <div className="bg3 parallax"> </div>
      <section className="panel">
        <BlogSection posts={posts}/>
      </section>
      <div className="bg4 parallax"> </div>
      <section>
        <ContactSection/>
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