import React, { useEffect } from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import "../../styles/global.css"
import Menu from "./menu"
import BlogSection from "./sections/blog_section"
import FooterSection from "./sections/footer_section"
import  { handleScrollEffect } from "../lib/handle_scroll"


export default () => {
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
        <BlogSection/>
      </section>
      <section>
        <FooterSection/>
      </section>
    </main>
  )
}
