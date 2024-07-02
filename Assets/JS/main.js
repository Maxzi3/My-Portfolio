const display = document.querySelector(".show");
const texts = document.querySelector(".linktext");
const a = document.querySelector(".a");
const b = document.querySelector(".b");
const c = document.querySelector(".c");
const d = document.querySelector(".d");
const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menu a");
window.addEventListener("scroll", () => {
    display.classList.toggle("show", window.scrollY > 500)
    texts.classList.toggle("col", window.scrollY > 500)
    a.classList.toggle("col", window.scrollY > 500)
    b.classList.toggle("col", window.scrollY > 500)
    c.classList.toggle("col", window.scrollY > 500)
    d.classList.toggle("col", window.scrollY > 500)
    // texts.classList.toggle('col')
});
document.addEventListener("DOMContentLoaded", () => {
  menuToggle.addEventListener("click", () => {
    menu.classList.toggle("show");
  });
});


    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            menu.classList.remove('show');
        });
    });