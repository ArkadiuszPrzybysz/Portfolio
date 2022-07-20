const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav_menu");
const text = document.querySelector(".header");
const arrow = document.querySelector(".box");
const navbar = document.querySelector(".navbar");

window.addEventListener('scroll', function(){
  var value = this.window.scrollY;

 
  navbar.style.top = value * -0.09 + 'px';
  arrow.style.paddingBottom = value * 0.08 + 'px';
  text.style.paddingBottom = value * 0.4 + 'px';
})

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav_link").forEach(x => x.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}))