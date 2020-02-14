import React, { useEffect } from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import "../../styles/global.css"
import Menu from "../components/menu"
import AboutSection from "../components/about_section"
import FooterSection from "../components/footer_section"
import  { handleScrollEffect } from "../lib/handle_scroll"
import { Link } from 'gatsby'

export default () => {
  useEffect(handleScrollEffect)

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
      <div className="bg2 parallax"> </div>
      <section className="panel">
        <AboutSection/>
      </section>
      <section>
        <FooterSection/>
      </section>
    </main>
  )
}
