const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav_menu");
const text = document.querySelector(".header");
const arrow = document.querySelector(".box");

window.addEventListener('scroll', function(){
  var value = this.window.scrollY;

  behavior: 'smooth';
  text.style.top = value * 0.8 + 'px';
  text.style.bottom = value * 0.8 + 'px';
})

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav_link").forEach(x => x.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}))