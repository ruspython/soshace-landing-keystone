'use strict';

// Activate sliders - jQuery slick carousel
$(document).ready(function() {

  var portfolioSlider = $('.portfolio__slider');
  portfolioSlider.slick({
    slidesToShow: 1,
    prevArrow: $('.portfolio__arrow-wrap--left'),
    nextArrow: $('.portfolio__arrow-wrap--right'),
    speed: 200,
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
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 599,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 959,
        settings: {
          slidesToShow: 4
        }
      }
    ]
  });

});

// Block for open/close info in team slider
(function() {
  /**
   * Open/close developer info
   */
  function showInfo() {
    var info = this.querySelector('.team__member-info');

    if (info.classList.contains('team__member-info--open')) {
      info.classList.remove('team__member-info--open');
    } else {
      info.classList.add('team__member-info--open');
    }
  }

  // Condition only for mobile devices
  if (document.documentElement.clientWidth < 960) {
    var teamSlider = document.querySelector('.team__members-wrap');

    // Listening click on whole slider because
    // the number of slides is changing dynamically (slick carousel)
    teamSlider.onclick = function() {
      var memberSlides = teamSlider.querySelectorAll('.team__member');

      for (var i = 0; i < memberSlides.length; i++) {
        memberSlides[i].addEventListener('tap', showInfo);
      }
    };
  }
})();
