const humburger = document.querySelector('.humburger');
const navToggle = document.querySelector('.mobile-nav-menu');
const link1 = document.querySelector('.link1');
const link2 = document.querySelector('.link2');
const link3 = document.querySelector('.link3');

link1.addEventListener('click', () => {
  humburger.classList.toggle('active');
  navToggle.classList.toggle('active');
});

link2.addEventListener('click', () => {
  humburger.classList.toggle('active');
  navToggle.classList.toggle('active');
});

link3.addEventListener('click', () => {
  humburger.classList.toggle('active');
  navToggle.classList.toggle('active');
});

humburger.addEventListener('click', () => {
  humburger.classList.toggle('active');
  navToggle.classList.toggle('active');
});
