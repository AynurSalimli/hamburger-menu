// const menuBar = document.getElementById("menu-bar")
// const nav = document.getElementById("nav")
// const menuBg = document.getElementById("menu-bg");

// function toggleMenu() {
//     menuBar.classList.toggle('change')
//     menuBg.classList.toggle('change-bg')
//     nav.classList.toggle('change');
// }

const bar = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");
const overlay = document.querySelector('.overlay')

function toggleMenu() {
  menu.classList.toggle("active");
  bar.classList.toggle("active");
}

bar.addEventListener("click", toggleMenu);
overlay.addEventListener("click", toggleMenu);
