'use strict';

// Activate sliders - jQuery slick carousel
$(document).ready(function() {

  var portfolioSlider = $('.portfolio__slider');
  portfolioSlider.slick({
    slidesToShow: 1,
    prevArrow: $('.portfolio__arrow-wrap--left'),
    nextArrow: $('.portfolio__arrow-wrap--right'),
    speed: 100,
    infinite: true,
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 959,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
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
