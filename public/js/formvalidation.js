'use strict';

(function() {

  var form = document.querySelector('.contact__form');
  var name = form.querySelector('[name="name"]'),
      email = form.querySelector('[name="email"]'),
      message = form.querySelector('[name="message"]'),
      submit = form.querySelector('[type="submit"]'),
      success = form.querySelector('.contact__flash-message-success'),
      fail = form.querySelector('.contact__flash-message-fail'),
      REG_EXP_EMAIL = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  /**
   * Client-side form validation
   */
  function validateForm() {
    var isEmailValid = REG_EXP_EMAIL.test(email.value),
        isNameValid = false,
        isMessageValid = false;

    if (name.value.length > 2) {
      isNameValid = true;
    }

    if (message.value.length > 5) {
      isMessageValid = true;
    }

    if (!success.classList.contains('invisible')) {
      success.classList.add('invisible');
    }

    if (!fail.classList.contains('invisible')) {
      fail.classList.add('invisible');
    }

    if (isNameValid) {
      name.classList.remove('notvalid');
    } else {
      name.setAttribute('required', '');
      name.classList.add('notvalid');
    }

    if (isEmailValid) {
      email.classList.remove('notvalid');
    } else {
      email.setAttribute('required', '');
      email.classList.add('notvalid');
    }

    if (isMessageValid) {
      message.classList.remove('notvalid');
    } else {
      message.setAttribute('required', '');
      message.classList.add('notvalid');
    }

    if (isNameValid && isEmailValid && isMessageValid) {
      submit.removeAttribute('disabled');
    } else {
      submit.setAttribute('disabled', '');
    }
  }

  name.onkeyup = validateForm;
  email.onkeyup = validateForm;
  message.onkeyup = validateForm;
})();
