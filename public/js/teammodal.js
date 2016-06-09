'use strict';

(function() {

  var teamMembers = document.querySelectorAll('.team__member a'),
      modal = document.querySelector('.team__modal'),
      name = document.querySelector('.team__modal-name'),
      position = document.querySelector('.team__modal-position'),
      info = document.querySelector('.team__modal-info'),
      photo = document.querySelector('.team__modal-photo'),
      close = document.querySelector('.team__modal-close'),
      body = document.querySelector('body'),
      windowPosition = 0;

  for (var i = 0; i < teamMembers.length; i++) {
    teamMembers[i].onclick = function(e) {
      e.preventDefault();

      // Take data from data-attributes
      var nameData  = this.dataset.name,
          positionData = this.dataset.position,
          infoData = this.dataset.info,
          photoData = this.dataset.photo;

      // completeInfo might be empty
      if (!infoData.trim()) {
        infoData = this.dataset.incompleteInfo;
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
    };
  }

  close.addEventListener('tap', function(e) {
    e.preventDefault();
    modal.classList.add('invisible');
    body.classList.remove('fixed');
    window.scrollBy(0, windowPosition);
  });
})();
