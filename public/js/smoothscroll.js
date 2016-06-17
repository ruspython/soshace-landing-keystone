/**
* anchor-scroll
* @author Benjamin De Cock
* @repo https://github.com/bendc/anchor-scroll
*/

'use strict';
(function() {
  document.addEventListener('DOMContentLoaded', function() {

    var links = document.querySelectorAll('.scroll');
    var i = links.length;

    while (i--)

      links.item(i).addEventListener('tap', function(e) {

        if (window.innerWidth > 699) {
          e.preventDefault();
          if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
              $('html, body').animate({
                scrollTop: target.offset().top
              }, 1500);
              return false;
            }
          }
        }

      });

    });
})();
