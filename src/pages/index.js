import React, { useEffect } from "react"
import { Button } from "reactstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import "../../styles/global.css"
import $ from "jquery"

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
  $(".menu-trigger").on("click", function(e) {
    $(this)
      .next("ul")
      .toggleClass("show")
    e.preventDefault()
  })
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
        <nav className="main">
          <a href="#" className="menu-trigger">
            Menu
          </a>
          <ul>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Blog</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </nav>
      </section>
      <section className="panel">
        <div className="panel-content">
          <div className="wrap">
            <div className="entry-header">
              <h2 className="entry-title">Home</h2>
            </div>
            <div className="entry-content">
              <p>
                <em>Playing for the infinite future.</em>
              </p>
              <p>
                Sortilege Incorporate designs physical &amp; digital card &amp;
                board games centered around futurist themes such as ecology,
                technology, and economics.
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="bg2 parallax"> </div>
      <section className="panel">
        <div className="panel-content">
          <div className="wrap">
            <div className="entry-header">
              <h2 className="entry-title">About</h2>
            </div>
            <div className="entry-content">
              <p>
                Founded in 2018 by its lead designer, Jordan Peacock, Sortilege
                has privately created games for individuals and think tanks and
                is currently working on several public game projects, including
                the forthcoming digital trading card game, Situation Normal.
              </p>
              <p>
                Our team currently includes two game designers, two game
                developers, one blockchain developer and one artist.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="panel">
        <div className="panel-content">
          <div className="wrap">
            <div className="entry-header">
              <h2 className="entry-title">Games</h2>
            </div>
            <div className="entry-content">
              <p>
                Founded in 2018 by its lead designer, Jordan Peacock, Sortilege
                has privately created games for individuals and think tanks and
                is currently working on several public game projects, including
                the forthcoming digital trading card game, Situation Normal.
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="bg3 parallax"> </div>
      <section className="panel">
        <div className="panel-content">
          <div className="wrap">
            <div className="entry-header">
              <h2 className="entry-title">Blog</h2>
            </div>
            <div className="entry-content">
              <div>
                <span>March 22nd, 2020</span>
                <h2>
                  <a href="">Some Header Link</a>
                </h2>
              </div>
              <p>
                Sortilege Incorporate designs physical &amp; digital card &amp;
                board games centered around futurist themes such as ecology,
                technology, and economics.
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="bg4 parallax"> </div>
      <section>
        <section className="panel">
          <div className="panel-content">
            <div className="wrap">
              <div className="entry-header">
                <h2 className="entry-title">Contact</h2>
              </div>
              <div className="entry-content">
                <p>
                  Follow{" "}
                  <a href="https://twitter.com/hewhocutsdown">
                    @hewhocutsdown{" "}
                  </a>
                  on Twitter or Github.
                </p>
              </div>
            </div>
          </div>
        </section>
      </section>
    </main>
  )
}
