/**
* Smooth Scrolling
* @author CHRIS COYIER
* example from https://css-tricks.com/snippets/jquery/smooth-scrolling/
*/
'use strict';
(function() {

  var SMALL_DISPLAYS_WIDTH_BORDER = 699;

  document.addEventListener('DOMContentLoaded', function() {

    var links = document.querySelectorAll('.scroll');

    for (var i = 0; i < links.length; i++) {
      links.item(i).addEventListener('click', smoothScrolling);
    }

  });

  function smoothScrolling(event) {

    event.preventDefault();
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {

        if (window.innerWidth < SMALL_DISPLAYS_WIDTH_BORDER) {
          // just jump
          window.scrollTo(0, target.offset().top);
        } else {
          // smooth scroll
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1500);
        }

        return false;
      }
    }
  }
})();
