(function() {

  // Header with navigation
  var header = document.querySelector('.main-header'),
      hireButton = document.querySelector('.flying-btn'),
      burger = document.querySelector('.burger-icon'),
      open = document.querySelector('.burger-icon__open'),
      close = document.querySelector('.burger-icon__close--hidden'),
      wrap = document.querySelector('.main-header__inner'),
      nav = document.querySelector('.main-nav'),
      body = document.querySelector('body'),
      main = document.querySelector('main'),
      // var for previous vertical window position
      prevPosition = window.scrollY,
      // var for detecting scrolling
      didScroll,
      windowPosition;

  // Navigation links
  var navLinks = nav.querySelectorAll('a');

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
    // Hide main because of scroling window to top because of .fixed body class
    main.classList.toggle('soft-invisible');
    // hide hireButton
    hireButton.classList.add('flying-btn--hidden');
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

    if (main.classList.contains('soft-invisible')) {
      main.classList.remove('soft-invisible');
    }
  }

  /**
   * Close mobile nav if desktop
   */
   function closeMobileNavigationIfDesktop() {
     var DESKTOP_VIEWPORT = 960;
     if (document.documentElement.clientWidth > DESKTOP_VIEWPORT) {
       closeMobileNavigation();
     }
   }

   /**
    * Hide/show 'hire' btn nav when scrolling up/down
    */
   function scrollChanges() {
     var MIN_POSITION = 600;

     var innerMenuHidden = !wrap.classList.contains('main-header__inner--menu-visible');
     var scrollDown = window.scrollY > prevPosition && window.scrollY > MIN_POSITION;
     var scrollUp = window.scrollY < prevPosition;

     if (scrollDown && innerMenuHidden) {
       // show button
       hireButton.classList.remove('flying-btn--hidden');
     } else if (scrollUp) {
       // hide button
       hireButton.classList.add('flying-btn--hidden');
     }

     prevPosition = window.scrollY;
   }

  // Hide/show navigation by scrolling down/up
  window.addEventListener('scroll', function() {
    didScroll = true;
  });

  setInterval(function() {
    if (didScroll) {
      scrollChanges();
      didScroll = false;
    }
  }, 250);

  // Click on link open/close mobile navigation
  burger.addEventListener('click', function(event) {
    event.preventDefault();

    if (!body.classList.contains('fixed')) {
      windowPosition = window.scrollY;
    }

    toggleMobileNavigation();
  });

  // Looking for transition from tablet viewport to desktop viewport
  // Close mobile menu
  window.addEventListener('resize', closeMobileNavigationIfDesktop);

  // Looking for click on nav links
  // and close mobile menu
  [].forEach.call(navLinks, function(link) {
    link.addEventListener('click', function(event) {
      closeMobileNavigation();
    });
  });
})();
