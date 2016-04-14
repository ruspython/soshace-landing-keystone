// Sending data from contact form via ajax

'use strict';

(function() {

  // if old browser -> simple data sending (with reloading)
  if (!('FormData' in window) || !('FileReader' in window)) {
    return;
  }

  // Find form
  var form = document.querySelector('.contact__form');
  var success = form.querySelector('.contact__flash-message-success');
  var fail = form.querySelector('.contact__flash-message-fail');

  /**
   * Send AJAX request
   * @param {Array.<Object>} data
   * @param {function} fn
   */
  function request(data, fn) {
    var xhr = new XMLHttpRequest();
    var time = (new Date()).getTime();

    xhr.open('post', '/message?_ts=' + time);

    xhr.addEventListener('readystatechange', function() {
      if (xhr.readyState === 4) {
        // Pass to function server response
        fn(xhr.responseText);
      }
    });

    xhr.send(data);
  }

  // On submit
  form.addEventListener('submit', function(event) {
    event.preventDefault();

    // Collect all data from form
    var data = new FormData(form);

    // Pass data to function which sends AJAX request
    // Second parameter (function) will be called when it will get
    // response from server
    request(data, function(response) {

      response = JSON.parse(response);

      if (response.sent) {
        success.classList.remove('invisible');
        form.reset();
      } else {
        fail.classList.remove('invisible');
      }
    });
  });
})();
