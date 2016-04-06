'use strict';

(function() {

  var projects = document.querySelectorAll('.portfolio__slide a'),
      modal = document.querySelector('.portfolio__modal'),
      title = document.querySelector('.portfolio__modal-title'),
      info = document.querySelector('.portfolio__modal-description'),
      url = document.querySelector('.portfolio__modal-link'),
      img = document.querySelector('.portfolio__modal-img'),
      close = document.querySelector('.portfolio__modal-close'),
      body = document.querySelector('body'),
      windowPosition = 0;

  for (var i = 0; i < projects.length; i++) {
    projects[i].onclick = function(e) {
      e.preventDefault();

      // Take data from data-attributes
      var titleData = this.dataset.title,
          infoData = this.dataset.description,
          urlData = this.dataset.link,
          imgData = this.dataset.image;

      // Insert data in modal
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
    };
  }

  close.addEventListener('tap', function(e) {
    e.preventDefault();
    modal.classList.add('invisible');
    body.classList.remove('fixed');
    window.scrollBy(0, windowPosition);
  });
})();
