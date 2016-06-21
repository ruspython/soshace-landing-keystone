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

  close.addEventListener('tap', function(event) {
    event.preventDefault();
    modal.classList.add('invisible');
    body.classList.remove('fixed');
    window.scrollBy(0, windowPosition);
  });

  function openModal(swiper, event) {
    event.preventDefault();

    var slideLink = swiper.clickedSlide.querySelector('a');
    if (!slideLink) return;

    // Take data from data-attributes
    var titleData = slideLink.dataset.title,
      infoData = slideLink.dataset.completeDescription,
      urlData = slideLink.dataset.link,
      imgData = slideLink.dataset.image;

    // completeDescription might be empty
    if (!infoData.trim()) {
      infoData = slideLink.dataset.incompleteDescription;
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

  // for using in sliders
  window.portfolioModal = {
    openModal: openModal
  };

}());
