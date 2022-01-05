const hotelSlider = new Swiper('.swiper', {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".hotel-slider__button--next",
    prevEl: ".hotel-slider__button--prev",
  },

});
const reviewsSlider = new Swiper('.reviews-slider', {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".reviews-slider__button--next",
    prevEl: ".reviews-slider__button--prev",
  },

});

$(function(){
  $('.parallax-window').parallax({    
    imageSrc: "img/newsletter-bg.jpg",    
    speed: '0.5',
  });
});

var menuButton = document.querySelector(".menu-button");
menuButton.addEventListener("click", function () {
  console.log("Клик по кнопке меню")
  document.querySelector(".navbar-bottom").classList.toggle("navbar-bottom--visible");
});