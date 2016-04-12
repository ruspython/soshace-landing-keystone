'use strict';

(function () {

    var form = document.querySelector('.contact__form');
    var name = form.querySelector('[name="name"]'),
        email = form.querySelector('[name="email"]'),
        message = form.querySelector('[name="message"]'),
        submit = form.querySelector('[type="submit"]'),
        success = form.querySelector('.contact__flash-message-success'),
        fail = form.querySelector('.contact__flash-message-fail'),
        validators = {
            name: false,
            email: false,
            message: false
        },
        REG_EXP_EMAIL = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        NAME_REGEX = /.{2,}/,
        MESSAGE_REGEX = /.{2,}/;

    /**
     * Client-side form validation
     */

    function canSubmit() {
        for (var val in validators) {
            if (!validators[val]) return false;
        }
        return true;
    }

    function validateField(opt) {
        var field = opt.field,
            rule = opt.rule,
            successCb = opt.success,
            errorCb = opt.error,
            isValid = rule.test(field.value);

        validators[field.name] = isValid;

        if (isValid) {
            field.classList.remove('notvalid');
            successCb && successCb();
        } else {
            field.classList.add('notvalid');
            errorCb && errorCb();
        }

        if (canSubmit()) {
            submit.removeAttribute('disabled');
        } else {
            submit.setAttribute('disabled', '');
        }
    }


    name.oninput = validateField.bind(this, {
        field: name,
        rule: NAME_REGEX
    });

    email.oninput = validateField.bind(this, {
        field: email,
        rule: REG_EXP_EMAIL
    });

    message.oninput = validateField.bind(this, {
        field: message,
        rule: MESSAGE_REGEX
    });

})();
