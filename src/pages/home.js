import React, { useEffect } from "react"
import { Button } from "reactstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import "../../styles/global.css"
import $ from "jquery"
import Menu from "./menu"
import HomeSection from "./sections/home_section"
import AboutSection from "./sections/about_section"
import GamesSection from "./sections/games_section"
import BlogSection from "./sections/blog_section"
import FooterSection from "./sections/footer_section"

function handleScroll() {
  let menu = document.getElementById("menu")
  let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
  let windowHeight = window.innerHeight

  var $el = $("#menu")
  let topPosition = scrollTop - parseInt($el.css("margin-top"), 10)

  if (topPosition > windowHeight) {
    $el.addClass("fixed")
  }
  if (topPosition + $el.outerHeight() <= windowHeight) {
    $el.removeClass("fixed")
  }
}

export default () => {
  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return function cleanup() {
      window.removeEventListener("scroll", handleScroll)
    }
  })

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
        <BlogSection/>
      </section>
      <div className="bg4 parallax"> </div>
      <section>
        <FooterSection/>
      </section>
    </main>
  )
}
