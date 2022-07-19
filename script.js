const mobileNav = document.querySelector("mobile-nav");
const menuIcon = document.querySelector(".fa-bars");
const closeIcon = document.querySelector(".fa-x");
const menuItems = document.querySelectorAll(".items");

menuIcon.addEventListener("click", () => {
  mobileNav.classList.toggle("active");
});

closeIcon.addEventListener("click", () => {
  mobileNav.classList.remove("active");
});

menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    mobileNav.classList.remove("active");
  });
});
