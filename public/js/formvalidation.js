'use strict';

(function() {

  var form = document.querySelector('.contact__form');
  var name = form.querySelector('[name="name"]');
  var email = form.querySelector('[name="email"]');
  var message = form.querySelector('[name="message"]');
  var submit = form.querySelector('[type="submit"]');

  var success = form.querySelector('.contact__flash-message-success');
  var fail = form.querySelector('.contact__flash-message-fail');

  var REG_EXP_EMAIL = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  var REG_EXP_NAME = /^[A-Za-z0-9 ]{3,20}$/;
  var REG_EXP_MESSAGE = /^(?=.{3,})[a-zA-Z0-9 :;(),./@#$№%&*?!]+$/;

  /**
   * Cliend-side form validation
   */
  function validateForm() {
    var isNameValid = REG_EXP_NAME.test(name.value);
    var isEmailValid = REG_EXP_EMAIL.test(email.value);
    var isMessageValid = REG_EXP_MESSAGE.test(message.value);

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
