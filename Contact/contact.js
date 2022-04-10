// Toggle menu
const menuMobile = document.querySelector(".menu-mobile");
const menuDrop = document.querySelector(".menu-drop");

menuMobile.addEventListener("click", function () {
  menuDrop.classList.toggle("active");
});
