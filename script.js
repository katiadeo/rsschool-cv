// BURGER
const burger = document.querySelector('.header__container');
const button = burger.querySelector('.burger');

button.addEventListener('click', event => {
  burger.classList.toggle('active');
});