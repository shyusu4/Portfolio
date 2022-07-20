const mobileNav = document.querySelector(".mobile-nav");
const btn = document.querySelector(".btn");
const link1 = document.querySelector(".link1");
const link2 = document.querySelector(".link2");
const link3 = document.querySelector(".link3");

link1.addEventListener("click", () => {
  mobileNav.classList.remove("active");
});

link2.addEventListener("click", () => {
  mobileNav.classList.remove("active");
});

link3.addEventListener("click", () => {
  mobileNav.classList.remove("active");
});

btn.addEventListener("click", () => {
  mobileNav.classList.toggle("active");
});

const openModalButtons = document.querySelectorAll("[data-modal-target]");
const closeModalButtons = document.querySelectorAll("[data-close-button]");
const overlay = document.getElementById("overlay");

const projectPopup = {
  name: ["Multi Post Stories"],
  image: ["imgs/portfolio-img.svg"],
  description: [
    `Lorem Ipsum is simply dummy text of the printing and typesetting
    industry. Lorem Ipsum has been the industry's standard dummy text
    ever since the 1500s, when an unknown printer took a galley of type
    and scrambled it 1960s with the releaLorem Ipsum is simply dummy
    text of the printing and typesetting ever since the 1500s, when an
    unknown printer took a galley of type veris lapoa todoe.`,
  ],
  tools: ["html", "ruby on rails", "css"],
};

openModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = document.querySelector(button.dataset.modalTarget);
    openModal(modal);
  });
});

overlay.addEventListener("click", () => {
  const modals = document.querySelectorAll(".modal.active");
  modals.forEach((modal) => {
    closeModal(modal);
  });
});

closeModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = button.closest(".modal");
    closeModal(modal);
  });
});

function openModal(modal) {
  if (modal == null) return;
  modal.classList.add("active");
  overlay.classList.add("active");
}

function closeModal(modal) {
  if (modal == null) return;
  modal.classList.remove("active");
  overlay.classList.remove("active");
}
