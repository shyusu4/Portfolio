/* eslint-disable no-unused-vars */
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

const projects = [
  {
    project1: 'projectOne',
    name: 'Multi-Post Stories',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    image: './imgs/img-placeholder1.jpg',
    project2: 'projectTwo',
    name2: 'Multi-Post Stories',
    description2: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    image2: './imgs/img-placeholder2.jpg',
    project3: 'projectThree',
    name3: 'Multi-Post Stories',
    description3: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    image3: './imgs/img-placeholder3.jpg',
  },
];

document.getElementById('projects').innerHTML = projects.map((y) => `<div class="flex-container">
<div class="flex-item-style-1" id="flex-item-1">
  <img
    src="${y.image}"
    alt="multi-post stories project"
    class="my-work-img"
  />
  <div class="project-info-1">
    <span class="project">${y.name}</span>
    <p class="project-description">
    ${y.description}
    </p>
    <ul class="tags">
      <li><span>css</span></li>
      <li><span>html</span></li>
      <li><span>bootstrap</span></li>
      <li><span>ruby</span></li>
    </ul>
    <div class="popup-container">
      <a onclick='window.location.href="#modal"' class="button"
        >See Project</a
      >
    </div>
  </div>
</div>
<div class="flex-item-style-2" id="flex-item-2">
  <img
    src="${y.image2}"
    alt="multi-post stories project"
    class="my-work-img"
  />
  <div class="project-info-2">
    <span class="project">${y.name2}</span>
    <p class="project-description">
    ${y.description2}
    </p>
    <ul class="tags">
      <li><span>css</span></li>
      <li><span>html</span></li>
      <li><span>bootstrap</span></li>
      <li><span>ruby</span></li>
    </ul>
    <a onclick='window.location.href="#modal"' class="button"
        >See Project</a
      >
  </div>
</div>
<div class="flex-item-style-1" id="flex-item-3">
  <img
    src="${y.image3}"
    alt="multi-post stories project"
    class="my-work-img"
  />
  <div class="project-info-1">
    <span class="project">${y.name3}</span>
    <p class="project-description">
    ${y.description3}
    </p>
    <ul class="tags">
      <li><span>css</span></li>
      <li><span>html</span></li>
      <li><span>bootstrap</span></li>
      <li><span>ruby</span></li>
    </ul>
    <a onclick='window.location.href="#modal"' class="button"
        >See Project</a
      >
  </div>
</div>
</div>`).join('');

const modalArr = [
  {
    projectId: 'projectOne',
    name: 'Multi-Post Stories',
    description: 'Lorem Ipsum is simply dummy text of the printing and '
    + 'typesetting industry. Lorem Ipsum has been the industry\'s '
    + 'standard dummy text ever since the 1500s, when an unknown printer '
    + 'took a galley of type and scrambled it to make a type specimen book. '
    + 'It has survived not only five centuries, but also the leap into electronic '
    + 'typesetting, remaining essent',
    image: './imgs/portfolio-img.svg',
    technologies: ['html', 'ruby on rails', 'css'],
    liveLink: 'https://shyusu4.github.io/Portfolio/',
    sourceLink: 'https://github.com/shyusu4/Portfolio',
  },
  {
    projectId: 'projectTwo',
    name: 'Multi-Post Stories',
    description: 'Lorem Ipsum is simply dummy text of the printing and '
    + 'typesetting industry. Lorem Ipsum has been the industry\'s '
    + 'standard dummy text ever since the 1500s, when an unknown printer '
    + 'took a galley of type and scrambled it to make a type specimen book. '
    + 'It has survived not only five centuries, but also the leap into electronic '
    + 'typesetting, remaining essent',
    image: './imgs/portfolio-img.svg',
    technologies: ['html', 'ruby on rails', 'css'],
    liveLink: 'https://shyusu4.github.io/Portfolio/',
    sourceLink: 'https://github.com/shyusu4/Portfolio',
  },
  {
    projectId: 'projectThree',
    name: 'Multi-Post Stories',
    description: 'Lorem Ipsum is simply dummy text of the printing and '
    + 'typesetting industry. Lorem Ipsum has been the industry\'s '
    + 'standard dummy text ever since the 1500s, when an unknown printer '
    + 'took a galley of type and scrambled it to make a type specimen book. '
    + 'It has survived not only five centuries, but also the leap into electronic '
    + 'typesetting, remaining essent',
    image: './imgs/portfolio-img.svg',
    technologies: ['html', 'ruby on rails', 'css'],
    liveLink: 'https://shyusu4.github.io/Portfolio/',
    sourceLink: 'https://github.com/shyusu4/Portfolio',
  },
  {
    projectId: 'projectFour',
    name: 'Multi-Post Stories',
    description: 'Lorem Ipsum is simply dummy text of the printing and '
    + 'typesetting industry. Lorem Ipsum has been the industry\'s '
    + 'standard dummy text ever since the 1500s, when an unknown printer '
    + 'took a galley of type and scrambled it to make a type specimen book. '
    + 'It has survived not only five centuries, but also the leap into electronic '
    + 'typesetting, remaining essent',
    image: './imgs/portfolio-img.svg',
    technologies: ['html', 'ruby on rails', 'css'],
    liveLink: 'https://shyusu4.github.io/Portfolio/',
    sourceLink: 'https://github.com/shyusu4/Portfolio',
  },
];

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
      <img src='${modalArr[i].image}' alt='portfolio image' />
      <p>
      ${modalArr[i].description}
      </p>
      <ul class='modal-tags'>
        <li><span>html</span></li>
        <li><span>ruby on rails</span></li>
        <li><span>css</span></li>
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