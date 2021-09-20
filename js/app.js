const nextSlideBtn = document.querySelector('[data-js="carousel__button--next"]')
const prevSlideBtn = document.querySelector('[data-js="carousel__button--prev"]')
const carouselSlides = document.querySelectorAll('[data-js="carousel__item"]')

const carouselSlidesSize = carouselSlides.length - 1 
let currentSlideIndex = 0

const manipulateSlideClasses = correctSlideIndex => {
  carouselSlides.forEach(slide => slide.classList.remove('carousel__item--visible'))
  carouselSlides[correctSlideIndex].classList.add('carousel__item--visible') 
}

nextSlideBtn.addEventListener('click', () => {
  const correctSlideIndex = currentSlideIndex === carouselSlidesSize
    ? currentSlideIndex = 0 
    : ++currentSlideIndex

  manipulateSlideClasses(correctSlideIndex) 
})

prevSlideBtn.addEventListener('click', () => { 
  const correctSlideIndex = currentSlideIndex === 0 
    ? currentSlideIndex = carouselSlidesSize
    :  --currentSlideIndex

  manipulateSlideClasses(correctSlideIndex)
})