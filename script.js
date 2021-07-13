// BURGER
const burger = document.querySelector('.header__container');
const button = burger.querySelector('.burger');

button.addEventListener('click', event => {
  burger.classList.toggle('active');
});

// NAVBAR SCROLL
const header = document.querySelector('.header');
let prevScrollposition = window.pageYOffset;

window.onscroll = () => {
  let currentScrollPosition = window.pageYOffset;
  if (prevScrollposition > currentScrollPosition) {
    header.style.top = "0";
  } else {
    header.style.top = "-120px";
    burger.classList.remove('active');
  }
  prevScrollposition = currentScrollPosition;
}