'use strict';

(function() {

  var projects = document.querySelectorAll('.portfolio__slide a');
  var modal = document.querySelector('.portfolio__modal');
  var title = document.querySelector('.portfolio__modal-title');
  var info = document.querySelector('.portfolio__modal-description');
  var url = document.querySelector('.portfolio__modal-link');
  var img = document.querySelector('.portfolio__modal-img');
  var close = document.querySelector('.portfolio__modal-close');
  var body = document.querySelector('body');

  for (var i = 0; i < projects.length; i++){
    projects[i].onclick = function(e) {
      e.preventDefault();

      // Take data from data-attributes
      var titleData = this.dataset.title;
      var infoData = this.dataset.description;
      var urlData = this.dataset.link;
      var imgData = this.dataset.image;

      // Insert data in modal
      title.innerHTML = titleData;
      info.innerHTML = infoData;
      url.setAttribute('href', urlData);
      img.setAttribute('src', imgData);

      // Show modal
      modal.classList.remove('invisible');
      // Stops scrolling for body
      body.classList.add('fixed');
    };
  }

  close.addEventListener('tap', function(e){
    e.preventDefault();
    modal.classList.add('invisible');
    body.classList.remove('fixed');
  });
})();
