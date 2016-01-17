'use strict';

$(document).ready(function() {

  var teamSlider = $('.team__members-wrap');
  teamSlider.slick({
    slidesToShow: 4,
    prevArrow: $('.team__arrow-wrap--left'),
    nextArrow: $('.team__arrow-wrap--right'),
    //infinite: false,
    speed: 200,
    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });

});
