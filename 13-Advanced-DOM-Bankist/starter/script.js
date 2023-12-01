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
const alertH1 = function (e) {
  alert('this is heading');

  //h1.removeEventListener('mouseenter', alertH1);
};
h1.addEventListener('mouseenter', alertH1);

// h1.addEventListener('mouseenter', function (e) {
//   alert('this is heading');
// });

// h1.onmouseenter = function (e) {
//   alert('this is heading');
// };

setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 2000);
