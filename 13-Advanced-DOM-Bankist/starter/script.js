'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

//selecting element
const header = document.querySelector('.header');
//creating element

const message = document.createElement('div');
message.classList.add('cookie-message');
message.innerHTML =
  'we are using cookies your. <button class="btn--close-cookie">Got It</button>';

header.append(message); //top on header this message show and append will show bottom of header
//prepend and append has sibiling of after and before

//delete element
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    message.remove();
  });
message.style.backgroundColor = '#000';

//smooth scrolling

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function () {
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);
});

// window.scrollTo({
//   left: s1coords.left + window.scrollX,
//   top: s1coords.top + window.scrollX,
//   behavior: 'smooth',
// });

section1.scrollIntoView({ behavior: 'smooth' });

//event handlers
const h1 = document.querySelector('h1');
//h1.firstElementChild.style.color = 'orangered';
const alertH1 = function (e) {
  alert('this is heading');

  //h1.removeEventListener('mouseenter', alertH1);
};
h1.addEventListener('mouseenter', alertH1);
//h1.closest('.header').style.background = 'orange';
console.log(h1.nextElementSibling);
console.log(h1.nextSibling);

// h1.addEventListener('mouseenter', function (e) {
//   alert('this is heading');
// });

// h1.onmouseenter = function (e) {
//   alert('this is heading');
// };

setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 2000);

//stop propagation
//e.stopPropagation();

//page navigation
document.querySelectorAll('.nav__link').forEach(function (e) {
  // el.addEventListener('click', function (e) {
  //   e.preventDefault();
  //   const id = this.getAttribute('href');
  //   document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  // });
  //  or
  //matching strategy
  // e.preventDefault();
  // if (e.target.classList.contains('nav__link')) {
  //   const id = e.target.getAttribute('href');
  //   document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  // }
});

//tabbed component
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');
  //guard clause
  if (!clicked) return;
  //remove active classess
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  tabsContent.forEach(c => c.classList.remove('operations__content--active'));
  //activate tab
  clicked.classList.add('operations__tab--active');
  //activate content area
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

//menu fad animation
const nav = document.querySelector('.nav');
const handleHover = function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const sibling = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    sibling.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};
nav.addEventListener('mouseover', handleHover.bind(0.5));

nav.addEventListener('mouseout', handleHover.bind(1));

//sticky navigation
const initialCoords = section1.getBoundingClientRect();
window.addEventListener('scroll', function () {
  if (this.window.scrollY > initialCoords.top) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
});
