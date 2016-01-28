'use strict';

(function() {

  var form = document.querySelector('.contact__form');
  var name = form.querySelector('[name="name"]');
  var email = form.querySelector('[name="email"]');
  var message = form.querySelector('[name="message"]');
  var submit = form.querySelector('[type="submit"]');

  name.onkeyup = validateForm;
  email.onkeyup = validateForm;
  message.onkeyup = validateForm;

  function validateForm() {
    var isNameEmpty = name.value === '';
    var isMailEmpty = email.value === '';
    var isMessageEmpty = message.value === '';

    if (isNameEmpty) {
      name.setAttribute('required', '');
      name.classList.add('notvalid');
      submit.setAttribute('disabled', '');
    } else {
      name.removeAttribute('required');
      name.classList.remove('notvalid');
      submit.removeAttribute('disabled');
    }

    if (isMailEmpty) {
      email.setAttribute('required', '');
      email.classList.add('notvalid');
      submit.setAttribute('disabled', '');
    } else {
      email.removeAttribute('required');
      email.classList.remove('notvalid');
      submit.removeAttribute('disabled');
    }

    if (isMessageEmpty) {
      message.setAttribute('required', '');
      message.classList.add('notvalid');
      submit.setAttribute('disabled', '');
    } else {
      message.removeAttribute('required');
      message.classList.remove('notvalid');
      submit.removeAttribute('disabled');
    }
  }
})();
