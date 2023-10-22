const slider = document.querySelector('.slider');
const prevBtn = document.querySelector('.prev-button');
const nextBtn = document.querySelector('.next-button');
const slides = slider.querySelectorAll('img');
let slideIndex = 0;

prevBtn.addEventListener('click', () => {
  slides[slideIndex].style.opacity = 0;
  slideIndex = (slideIndex - 1 + slides.length) % slides.length;
  slides[slideIndex].style.opacity = 1;
});

nextBtn.addEventListener('click', () => {
  slides[slideIndex].style.opacity = 0;
  slideIndex = (slideIndex + 1) % slides.length;
  slides[slideIndex].style.opacity = 1;
});