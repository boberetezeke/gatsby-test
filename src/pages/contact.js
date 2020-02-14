import React, { useEffect } from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import "../../styles/global.css"
import Menu from "../components/menu"
import ContactSection from "../components/contact_section"
import FooterSection from "../components/footer_section"
import  { handleScrollEffect } from "../lib/handle_scroll"

export default () => {
  useEffect(handleScrollEffect)

  return (
    <main className="short">
      <div className="bg1 parallax"></div>
      <section id="logo">
        <a href="http://sortilege.online/" className="logo">
          <img src="/cropped-Sortilege-Logo-2.png" />
        </a>
      </section>
      <section id="menu">
        <Menu/>
      </section>
      <div className="bg4 parallax"> </div>
      <section className="panel">
        <ContactSection/>
      </section>
      <section>
        <FooterSection/>
      </section>
    </main>
  )
}
