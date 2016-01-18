'use strict';

(function() {

  var nav = document.querySelector('.main-header');
  var previousPosition = window.scrollY;
  var minPosition = 200;
  var scrollTimeout;

  // Hide navigation by scrolling down
  // Show navigation by scrolling up
  window.addEventListener('scroll', function() {

    clearTimeout(scrollTimeout);

    scrollTimeout = setTimeout(function() {

      // If true -> scrolling down
      if (window.scrollY > previousPosition && !(window.scrollY < minPosition)) {
        nav.classList.add('main-header--hidden');
        // If true -> scrolling up
      } else if (window.scrollY < previousPosition) {
        nav.classList.remove('main-header--hidden');
      }
      previousPosition = window.scrollY;

    }, 30);
  });

})();
