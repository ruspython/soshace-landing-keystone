;(function() {
  'use strict';

  document.addEventListener("DOMContentLoaded", initSliders);

  function initSliders() {
    var portfolioSlider = new Swiper('.portfolio__slider', {
      loop: true,
      prevButton: document.querySelector('.portfolio__arrow-wrap--left'),
      nextButton: document.querySelector('.portfolio__arrow-wrap--right'),
      slidesPerView: 2,
      spaceBetween: "5%",
      runCallbacksOnInit: true,
      breakpoints: {
        // when window width is <= 959px
        959: {
          slidesPerView: 1,
          spaceBetween: 0
        }
      }
    });

    portfolioSlider.on('tap', portfolioModal.openModal);

    var teamSlider = new Swiper('.team__members-wrap', {
      loop: true,
      prevButton: document.querySelector('.team__arrow-wrap--left'),
      nextButton: document.querySelector('.team__arrow-wrap--right'),
      slidesPerView: 3,
      spaceBetween: 20,
      breakpoints: {
        // when window width is <= 1199px
        1199: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        699: {
          slidesPerView: 1,
          spaceBetween: 0,
        }
      }
    });

    teamSlider.on('tap', teamModal.openModal);
  }

}());

