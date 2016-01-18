'use strict';

(function() {

  // Link with burger and cross icons
  var link = document.querySelector('.burger-icon');
  // Visible burger icon
  var open = document.querySelector('.burger-icon__open');
  // Hidden cross icon
  var close = document.querySelector('.burger-icon__close--hidden');
  // Top header block
  var wrap = document.querySelector('.main-header__inner');
  // Hidden navigation
  var nav = document.querySelector('.main-nav');

  // Click on link
  link.addEventListener('click', function(event){
    event.preventDefault();

    // Show/hide burger icon
    open.classList.toggle('burger-icon__open--hidden');

    // Show/hide cross icon
    close.classList.toggle('burger-icon__close');

    // Change/return style of top header block
    wrap.classList.toggle('main-header__inner--menu-visible');

    // Show/hide navigation
    nav.classList.toggle('main-nav--visible');
  });
})();
