/* eslint-disable no-unused-vars */
/* mobile menu */
const mobileNav = document.querySelector('.mobile-nav');
const btn = document.querySelector('.btn');
const link1 = document.querySelector('.link1');
const link2 = document.querySelector('.link2');
const link3 = document.querySelector('.link3');

link1.addEventListener('click', () => {
  mobileNav.classList.remove('active');
});

link2.addEventListener('click', () => {
  mobileNav.classList.remove('active');
});

link3.addEventListener('click', () => {
  mobileNav.classList.remove('active');
});

btn.addEventListener('click', () => {
  mobileNav.classList.toggle('active');
});

const modalArr = [
  {
    id: 1,
    title: 'Multi-Post Stories',
    img: './imgs/img-placeholder1.jpg',
    imgAlt: 'multi-post stories project',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard dummy textever since the 1500s, when an unknown printer took a standard dummy text.',
    modalTags: ['css', 'html', 'bootstrap', 'ruby'],
    liveLink: 'https://shyusu4.github.io/Portfolio/',
    sourceLink: 'https://github.com/shyusu4/Portfolio',
  },
  {
    id: 1,
    img: './imgs/img-placeholder2.jpg',
    imgAlt: 'multi-post stories project',
    title: 'Multi-Post Stories',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard dummy textever since the 1500s, when an unknown printer took a standard dummy text.',
    modalTags: ['css', 'html', 'bootstrap', 'ruby'],
    liveLink: 'https://shyusu4.github.io/Portfolio/',
    sourceLink: 'https://github.com/shyusu4/Portfolio',
  },
  {
    id: 1,
    img: './imgs/img-placeholder3.jpg',
    imgAlt: 'multi-post stories project',
    title: 'Multi-Post Stories',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard dummy textever since the 1500s, when an unknown printer took a standard dummy text.',
    modalTags: ['css', 'html', 'bootstrap', 'ruby'],
    liveLink: 'https://shyusu4.github.io/Portfolio/',
    sourceLink: 'https://github.com/shyusu4/Portfolio',
  },
];

/* dynamic cards */
const container = document.getElementById('projects');

for (let i = 0; i < modalArr.length; i += 1) {
  let project = modalArr[i];
  const projectElement = document.createElement('div');
  projectElement.classList.add('project');
  if (i % 2 === 0) {
    projectElement.innerHTML = `
  <div class="flex-container">
  <div class="flex-item-style-1" id="flex-item-1">
  <img src="${project.img}" alt="${project.imgAlt}" class="my-work-img"/>
  <div class="project-info-1">
  <div class="project">
    <span>${project.title}</span></div>
    <p class="project-description">
    ${project.description}
    </p>
    <ul class="tags">
      <li>${project.modalTags[0]}</li>
      <li>${project.modalTags[1]}</li>
      <li>${project.modalTags[2]}</li>
      <li>${project.modalTags[3]}</li>
    </ul>
    <a href="#flex-item-1" class="button" id="open-popup">See Project</a>
  </div>
</div>
</div>`;
    container.appendChild(projectElement);
  } else {
    projectElement.innerHTML = `<div class="flex-item-style-2" id="flex-item-2">
  <img
    src="${project.img}"
    alt="${project.imgAlt}"
    class="my-work-img"
  />
  <div class="project-info-2">
  <div class="project">
    <span>${project.title}</span></div>
    <p class="project-description">
      ${project.description}
    </p>
    <ul class="tags">
      <li>${project.modalTags[0]}</li>
      <li>${project.modalTags[1]}</li>
      <li>${project.modalTags[2]}</li>
      <li>${project.modalTags[3]}</li>
    </ul>
    <a href="#flex-item-2" class="button">See Project</a>
  </div>
</div>`;
    container.appendChild(projectElement);
  }
}

/* modal */
const modal = document.getElementById('modal');
const btns = document.querySelectorAll('.button');
const modalButton = Array.from(btns);

modalButton.forEach((el, i) => {
  el.addEventListener('click', (e) => {
    e.preventDefault();
    let data = '';
    const x = modalArr[i];
    data = `
    <div class='modal-header'>
      <div class='title'>Multi Post Stories</div>
      <button class='close-button'>&times;</button>
    </div>
    <div class='modal-body'>
      <img src='${modalArr[i].img}' alt='portfolio image' />
      <p>
      ${modalArr[i].description}
      </p>
      <ul class='modal-tags'>
        <li>${modalArr[i].modalTags[0]}</li>
        <li>${modalArr[i].modalTags[1]}</li>
        <li>${modalArr[i].modalTags[2]}</li>
      </ul>
      <div class='modal-button-div'>
        <a href='${modalArr[i].liveLink}' class='modal-button'
          >See Live
          <img
            class='modal-icon'
            src='imgs/circle-arrow.svg'
            alt='circle arrow icon'
          />
        </a>
      </div>
      <div class='modal-button-div'>
        <a href='${modalArr[i].sourceLink}' class='modal-button'
          >See Source
          <img class='modal-icon-2' src='imgs/github.svg' alt='github icon' />
        </a>
      </div>
    </div>
  </div>
  <div id='overlay'></div>
  `;
    modal.innerHTML = data;
    modal.classList.toggle('showModal');
  });
});

modal.addEventListener('click', () => {
  modal.classList.toggle('showModal');
});

/* form validation */
const form = document.querySelector('.form');
const error = document.querySelector('.email-error');

form.addEventListener('submit', (e) => {
  if (form.email.value !== form.email.value.toLowerCase()) {
    error.style.display = 'block';
    e.preventDefault();
  }
});