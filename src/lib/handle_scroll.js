import $ from 'jquery'

export const handleScroll = () => {
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

export const handleScrollEffect = () => {
  window.addEventListener("scroll", handleScroll)
  return function cleanup() {
      window.removeEventListener("scroll", handleScroll)
  }
}
