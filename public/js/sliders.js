'use strict';

$(document).ready(function() {
  var portfolio = $('#portfolioSlider');
  var portfolioLeft = $('.portfolio__arrow-wrap--left');
  var portfolioRight = $('.portfolio__arrow-wrap--left');

  portfolio.owlCarousel({
    slideSpeed : 600,
		items : 2,
		itemsTablet : [959, 1],
    navigation : true
  });

  // var portfolioData = portfolio.data('owlCarousel');

  // Custom Navigation Events
  portfolioRight.click(function(){
    portfolio.next();
  })
  portfolioLeft.click(function(){
    portfolio.prev();
  })

}());
