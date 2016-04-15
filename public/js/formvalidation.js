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
            //submit.removeAttribute('disabled');
        } else {
            //submit.setAttribute('disabled', '');
        }
    }


    name.onblur = validateField.bind(this, {
        field: name,
        rule: NAME_REGEX
    });

    email.onblur = validateField.bind(this, {
        field: email,
        rule: REG_EXP_EMAIL
    });

    message.onblur = validateField.bind(this, {
        field: message,
        rule: MESSAGE_REGEX
    });

})();


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
