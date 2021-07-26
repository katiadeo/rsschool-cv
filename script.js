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


// TODO: OPP
let indexValue = 1;
showSlides(indexValue);

const moveRight = () => {
    showSlides(indexValue += 1);
}

const moveLeft = () => {
    showSlides(indexValue -= 1);
}

const showCurrentSlide = (num) => {
    showSlides(indexValue = num);
}

function showSlides(num) {

    let slides = document.getElementsByClassName("slider__slide");
    
    if (num > slides.length) indexValue = 1;
    if (num < 1) indexValue = slides.length;
  
    for (let slide of slides) {
        slide.style.display = "none";
    }   
    slides[indexValue - 1].style.display = "block"; 
}

const arrowPrev = document.querySelector('.arrow__prev');
const arrowNext = document.querySelector('.arrow__next');

arrowPrev.addEventListener('click', moveLeft);
arrowNext.addEventListener('click', moveRight);
