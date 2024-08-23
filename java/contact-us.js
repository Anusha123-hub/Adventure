const hamburger_menu = document.querySelector(".hamburger-menu");
const container_1 = document.querySelector(".container-1");
hamburger_menu.addEventListener("click", () => {
  container_1.classList.toggle("active");
});


