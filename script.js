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

const project1 = 
  {
    projectId: 'projectOne',
    name: 'Multi-Post Stories',
    description: 'Lorem Ipsum is simply dummy text of the printing and '
    + 'typesetting industry. Lorem Ipsum has been the industry\'s '
    + 'standard dummy text ever since the 1500s, when an unknown printer '
    + 'took a galley of type and scrambled it to make a type specimen book. '
    + 'It has survived not only five centuries, but also the leap into electronic '
    + 'typesetting, remaining essent',
    featuredImage: 'imgs/portfolio-img.svg',
    technologies: ['html', 'ruby on rails', 'css'],
    liveLink: 'https://shyusu4.github.io/Portfolio/',
    sourceLink: 'https://github.com/shyusu4/Portfolio',
  };

const project2 = 
  {
    projectId: 'projectOne',
    name: 'Multi-Post Stories',
    description: 'Lorem Ipsum is simply dummy text of the printing and '
    + 'typesetting industry. Lorem Ipsum has been the industry\'s '
    + 'standard dummy text ever since the 1500s, when an unknown printer '
    + 'took a galley of type and scrambled it to make a type specimen book. '
    + 'It has survived not only five centuries, but also the leap into electronic '
    + 'typesetting, remaining essent',
    featuredImage: 'imgs/portfolio-img.svg',
    technologies: ['html', 'ruby on rails', 'css'],
    liveLink: 'https://shyusu4.github.io/Portfolio/',
    sourceLink: 'https://github.com/shyusu4/Portfolio',
  };

const project3 = 
  {
    projectId: 'projectOne',
    name: 'Multi-Post Stories',
    description: 'Lorem Ipsum is simply dummy text of the printing and '
    + 'typesetting industry. Lorem Ipsum has been the industry\'s '
    + 'standard dummy text ever since the 1500s, when an unknown printer '
    + 'took a galley of type and scrambled it to make a type specimen book. '
    + 'It has survived not only five centuries, but also the leap into electronic '
    + 'typesetting, remaining essent',
    featuredImage: 'imgs/portfolio-img.svg',
    technologies: ['html', 'ruby on rails', 'css'],
    liveLink: 'https://shyusu4.github.io/Portfolio/',
    sourceLink: 'https://github.com/shyusu4/Portfolio',
  };

const project4 = 
  {
    projectId: 'projectOne',
    name: 'Multi-Post Stories',
    description: 'Lorem Ipsum is simply dummy text of the printing and '
    + 'typesetting industry. Lorem Ipsum has been the industry\'s '
    + 'standard dummy text ever since the 1500s, when an unknown printer '
    + 'took a galley of type and scrambled it to make a type specimen book. '
    + 'It has survived not only five centuries, but also the leap into electronic '
    + 'typesetting, remaining essent',
    featuredImage: 'imgs/portfolio-img.svg',
    technologies: ['html', 'ruby on rails', 'css'],
    liveLink: 'https://shyusu4.github.io/Portfolio/',
    sourceLink: 'https://github.com/shyusu4/Portfolio',
  };

const openModalButtons = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay');
const projects = [project1, project2, project3, project4];

const htmlCode = `<div class="modal" id="modal">
<div class="modal-header">
  <div class="title">Multi Post Stories</div>
  <button data-close-button class="close-button">&times;</button>
</div>
<div class="modal-body">
  <img src="imgs/portfolio-img.svg" />
  <p>
    Ipsum is simply dummy text of the printing and typesetting industry.
    Lorem Ipsum has been the industry's standard dummy text ever since
    the 1500s, when an unknown printer took a galley of type and
    scrambled it 1960s with the releaLorem Ipsum is simply dummy text of
    the printing and typesetting ever since the 1500s, when an unknown
    printer took a galley of type veris lapoa todoe.
  </p>
  <ul class="modal-tags">
    <li><span>html</span></li>
    <li><span>ruby on rails</span></li>
    <li><span>css</span></li>
  </ul>
  <div class="modal-button-div">
    <a href="#" class="modal-button"
      >See Live
      <img
        class="modal-icon"
        src="imgs/circle-arrow.svg"
        alt="circle arrow icon"
      />
    </a>
  </div>
  <div class="modal-button-div">
    <a href="#" class="modal-button"
      >See Source
      <img class="modal-icon" src="imgs/github.svg" alt="github icon" />
    </a>
  </div>
</div>
</div>
<div id="overlay"></div>`;
document.write(htmlCode);

openModalButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget);
    openModal(modal);
  });
});

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active');
  modals.forEach((modal) => {
    closeModal(modal);
  });
});

closeModalButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal');
    closeModal(modal);
  });
});

function openModal(modal) {
  if (modal == null) return;
  modal.classList.add('active');
  overlay.classList.add('active');
}

function closeModal(modal) {
  if (modal == null) return;
  modal.classList.remove('active');
  overlay.classList.remove('active');
}
