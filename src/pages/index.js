import React, { useEffect } from "react"
import Menu from "../components/menu"
import HomeSection from "../components/home_section"
import AboutSection from "../components/about_section"
import GamesSection from "../components/games_section"
import BlogSection from "../components/blog_section"
import ContactSection from "../components/contact_section"
import FooterSection from "../components/footer_section"
import  { handleScrollEffect } from "../lib/handle_scroll"
import { Link } from 'gatsby'

export default ({data}) => {
  const { edges: posts } = data.allMarkdownRemark;

  useEffect(handleScrollEffect)
  return (
    <main>
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