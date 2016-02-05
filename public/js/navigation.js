'use strict';

(function() {

  // Header with navigation
  var header = document.querySelector('.main-header');
  // Variable for previous vertical window position
  var prevPosition = window.scrollY;
  var minPosition = 600;
  var scrollTimeout;
  var hireButton = document.querySelector('.flying-btn');

  // Link with burger and cross icons
  var burger = document.querySelector('.burger-icon');
  // Visible burger icon
  var open = document.querySelector('.burger-icon__open');
  // Hidden cross icon
  var close = document.querySelector('.burger-icon__close--hidden');
  // Top header block
  var wrap = document.querySelector('.main-header__inner');
  // Hidden navigation
  var nav = document.querySelector('.main-nav');
  // Navigation likns
  var navLinks = nav.querySelectorAll('a');
  var body = document.querySelector('body');

  /**
   * Open/close mobile navigation
   */
  function toggleMobileNavigation() {
    // Show/hide burger icon
    open.classList.toggle('burger-icon__open--hidden');
    // Show/hide cross icon
    close.classList.toggle('burger-icon__close');
    // Change/return style of top header block
    wrap.classList.toggle('main-header__inner--menu-visible');
    // Show/hide navigation
    nav.classList.toggle('main-nav--visible');
    //Enable/disable scrolling through document
    body.classList.toggle('fixed');
  }

  /**
   * Close mobile navigation
   */
  function closeMobileNavigation() {
    if (open.classList.contains('burger-icon__open--hidden')) {
      open.classList.remove('burger-icon__open--hidden');
    }

    if (close.classList.contains('burger-icon__close')) {
      close.classList.remove('burger-icon__close');
    }

    if (wrap.classList.contains('main-header__inner--menu-visible')) {
      wrap.classList.remove('main-header__inner--menu-visible');
    }

    if (nav.classList.contains('main-nav--visible')) {
      nav.classList.remove('main-nav--visible');
    }

    if (body.classList.contains('fixed')) {
      body.classList.remove('fixed');
    }
  }

  // Hide/show navigation by scrolling down/up
  window.addEventListener('scroll', function() {

    clearTimeout(scrollTimeout);

    scrollTimeout = setTimeout(function() {
      // If true -> scrolling down
      // Last condition check if mobile menu is open (then no hiding navigation)
      if (window.scrollY > prevPosition && window.scrollY > minPosition && !(wrap.classList.contains('main-header__inner--menu-visible'))) {
        header.classList.add('main-header--hidden');
        closeMobileNavigation();
        hireButton.classList.remove('invisible');

          // If true -> scrolling up
        } else if (window.scrollY < prevPosition && !(wrap.classList.contains('main-header__inner--menu-visible'))) {
        header.classList.remove('main-header--hidden');
        closeMobileNavigation();
        hireButton.classList.add('invisible');
      }
      prevPosition = window.scrollY;
    }, 20);
  });

  // Click on link open/close mobile navigation
  burger.addEventListener('tap', function(event){
    event.preventDefault();
    toggleMobileNavigation();
  });

  // Looking for click on nav links
  // and close mobile menu
  for (var i = 0; i < navLinks.length; i++){
    navLinks[i].onclick = function(e) {
      e.preventDefault();
      closeMobileNavigation();
    };
  }
})();
