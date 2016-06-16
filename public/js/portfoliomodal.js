'use strict';
;(function() {
  var modal = document.querySelector('.portfolio__modal'),
      title = document.querySelector('.portfolio__modal-title'),
      info = document.querySelector('.portfolio__modal-description'),
      url = document.querySelector('.portfolio__modal-link'),
      img = document.querySelector('.portfolio__modal-img'),
      close = document.querySelector('.portfolio__modal-close'),
      body = document.querySelector('body'),
      windowPosition = 0;

  var openPortfolioModel = function(e) {
    e.preventDefault();

    // Take data from data-attributes
    var titleData = this.dataset.title,
      infoData = this.dataset.completeDescription,
      urlData = this.dataset.link,
      imgData = this.dataset.image;

    // completeDescription might be empty
    if (!infoData.trim()) {
      infoData = this.dataset.incompleteDescription;
    }

    // Inserti modal
    title.innerHTML = titleData;
    info.innerHTML = infoData;
    url.setAttribute('href', urlData);
    img.setAttribute('src', imgData);

    // Save current scroll position
    windowPosition = window.scrollY;
    // Show modal
    modal.classList.remove('invisible');
    // Stops scrolling for body
    body.classList.add('fixed');
  }

  var addOnClickHandlerPortfolioSlides = function(swiper) {
    var projects = document.querySelectorAll('.portfolio__slide a');
    console.log("On init inside new Swiper");
    console.log("swiper: " + swiper);

    for (var i = 0; i < projects.length; i++) {
      projects[i].addEventListener('click', openPortfolioModel);
    }
  }

  close.addEventListener('tap', function(e) {
    e.preventDefault();
    modal.classList.add('invisible');
    body.classList.remove('fixed');
    window.scrollBy(0, windowPosition);
  });

  // for using in sliders
  window.portfolioModal = {
    addOnClickHandlerPortfolioSlides: addOnClickHandlerPortfolioSlides
  };
}());
