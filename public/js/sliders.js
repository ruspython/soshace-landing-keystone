'use strict';

$(document).ready(function() {

  var portfolioSlider = new Swiper('.portfolio__slider', {
    loop: true,
    prevButton: $('.portfolio__arrow-wrap--left'),
    nextButton: $('.portfolio__arrow-wrap--right'),
    slidesPerView: 2,
    spaceBetween: "5%",
    runCallbacksOnInit: true,
    // add events for all portfolio slides, include created by swiper
    'onInit': portfolioModal.addOnClickHandlerPortfolioSlides,
    breakpoints: {
      // when window width is <= 959px
      959: {
        slidesPerView: 1,
        spaceBetween: 0
      }
    }
  });

  var teamSlider = $('.team__members-wrap');
  teamSlider.slick({
    slidesToShow: 1,
    prevArrow: $('.team__arrow-wrap--left'),
    nextArrow: $('.team__arrow-wrap--right'),
    speed: 100,
    //infinite: true,
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 699,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 1499,
        settings: {
          slidesToShow: 4
        }
      }
    ]
  });

});

