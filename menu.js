const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav_menu");
const text = document.querySelector(".header");
const arrow = document.querySelector(".box");

window.addEventListener('scroll', function(){
  var value = this.window.scrollY;

  text.style.top = value * 0.8 + 'px';
  arrow.style.top = value * 0.1 + 'px';
})

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav_link").forEach(x => x.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}))