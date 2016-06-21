'use strict';
;(function() {

  var modal = document.querySelector('.team__modal'),
      name = document.querySelector('.team__modal-name'),
      position = document.querySelector('.team__modal-position'),
      info = document.querySelector('.team__modal-info'),
      photo = document.querySelector('.team__modal-photo'),
      close = document.querySelector('.team__modal-close'),
      body = document.querySelector('body'),
      windowPosition = 0;

  close.addEventListener('tap', function(e) {
    e.preventDefault();
    modal.classList.add('invisible');
    body.classList.remove('fixed');
    window.scrollBy(0, windowPosition);
  });

  function openModal(swiper, e) {
    e.preventDefault();

    var slideLink = swiper.clickedSlide.querySelector('a');
    if (!slideLink) return;

    // Take data from data-attributes
    var nameData  = slideLink.dataset.name,
        positionData = slideLink.dataset.position,
        infoData = slideLink.dataset.info,
        photoData = slideLink.dataset.photo;

    // completeInfo might be empty
    if (!infoData.trim()) {
      infoData = slideLink.dataset.incompleteInfo;
    }

    // Inserti modal
    name.innerHTML = nameData;
    position.innerHTML = positionData;
    info.innerHTML = infoData;
    photo.setAttribute('src', photoData);

    // Save current scroll position
    windowPosition = window.scrollY;
    // Show modal
    modal.classList.remove('invisible');
    // Stops scrolling for body
    body.classList.add('fixed');
  }

  // for using in sliders
  window.teamModal = {
    openModal: openModal
  };

})();
