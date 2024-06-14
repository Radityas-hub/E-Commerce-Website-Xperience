// lazy to make js in all pages (detail,product,cart)

// responsive toggle menu (humberger)
let menu = document.querySelector("#menu-icon");
let dropbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  dropbar.classList.toggle("open");
};
// script.js
