const toggle = document.querySelector(".sidebar__toggle");
const nav = document.querySelector(".sidebar__nav");

toggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});
