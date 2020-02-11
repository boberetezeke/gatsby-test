import $ from 'jquery'

let windowScrolltop = 0;
let distance = 0;

export const handleScroll = () => {
  let menu = $('#menu')
  let windowScrolltop = $(window).scrollTop();

  if ( windowScrolltop >= distance ) {
    menu.addClass("fixed")
  } else {
    menu.removeClass("fixed")
  }
}

export const handleResize = () => {
  let menu = $('#menu')
  distance = menu.offset().top;
}

export const handleScrollEffect = () => {
  window.addEventListener("resize", handleResize)
  window.dispatchEvent(new Event('resize'));

  window.addEventListener("scroll", handleScroll)

  return function cleanup() {
      window.removeEventListener("scroll", handleScroll)
  }
}
