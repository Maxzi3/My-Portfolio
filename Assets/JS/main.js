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
  if (window.scrollY > 100) {
    display.style.backgroundColor = "white";
    texts.classList.toggle("col", window.scrollY > 100)
    a.classList.toggle("col", window.scrollY >= 100)
    b.classList.toggle("col", window.scrollY >= 100)
    c.classList.toggle("col", window.scrollY >= 100)
    d.classList.toggle("col", window.scrollY >= 100)
    
  } else {
    display.style.backgroundColor = "transparent";
        texts.classList.remove("col", window.scrollY > 100);
        a.classList.remove("col", window.scrollY >= 100);
        b.classList.remove("col", window.scrollY >= 100);
        c.classList.remove("col", window.scrollY >= 100);
        d.classList.remove("col", window.scrollY >= 100);
  }

    
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