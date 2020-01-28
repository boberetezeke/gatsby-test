import React, { useEffect } from "react"
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/global.css'
import $ from 'jquery'

function handleScroll() {
    let menu = document.getElementById("menu");
    let scrollTop = (document.documentElement.scrollTop || document.body.scrollTop)
    let windowHeight = window.innerHeight;

    var $el = $('#menu'); 
    var isPositionFixed = ($el.css('position') == 'fixed');
    if (scrollTop > windowHeight && !isPositionFixed){ 
      $el.css({'position': 'fixed', 'top': '0px', 'width': '100%'}); 
     console.log("setting fixed")
    }
    if ($(this).scrollTop() < windowHeight && isPositionFixed){
      $el.css({'position': 'static', 'top': '0px'}); 
      console.log("setting static")
    } 
}

export default () => { 
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return function cleanup() {
            window.removeEventListener('scroll', handleScroll);
        }
    })

    return (
        <main>
            <div className="bg1 parallax"></div>
            <section id="menu"> <h1>Home</h1> </section>
            <div className="bg2 parallax"> </div>
            <section> <h1>About / Games</h1> </section> 
            <div className="bg3 parallax"> </div>
            <section> <h1>Blog</h1> </section> 
            <div className="bg4 parallax"> </div>
            <section> <h1>Contact</h1> </section> 
        </main>
     )
}
