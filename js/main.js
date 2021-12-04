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

