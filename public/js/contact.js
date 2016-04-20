(function () {
    'use strict';

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
        MESSAGE_REGEX = /(.|\n){8,}/;

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
            isValid = rule.test(field.value),
            tooltip = document.querySelector('.tooltip-icon[data-for="'+ field.name +'"]');

        validators[field.name] = isValid;

        if (isValid) {
            field.classList.remove('notvalid');
            tooltip.style.display = 'none';
            successCb && successCb();
        } else {
            field.classList.add('notvalid');
            tooltip.style.display = 'inline';
            errorCb && errorCb();
        }

    }


    var validateName = validateField.bind(this, {
        field: name,
        rule: NAME_REGEX
    });
    name.onblur = function () {
        validateName();

        if (validators.name) {
            name.removeEventListener('keyup', validateName);
        } else {
            name.addEventListener('keyup', validateName);
        }
    };


    var validateEmail = validateField.bind(this, {
        field: email,
        rule: REG_EXP_EMAIL
    });
    email.onblur = function () {
        validateEmail();

        if (validators.email) {
            email.removeEventListener('keyup', validateEmail);
        } else {
            email.addEventListener('keyup', validateEmail);
        }
    };


    var validateMessage = validateField.bind(this, {
        field: message,
        rule: MESSAGE_REGEX
    });
    message.onblur = function () {
        validateMessage();

        if (validators.message) {
            message.removeEventListener('keyup', validateMessage);
        } else {
            message.addEventListener('keyup', validateMessage);
        }
    };

    // if old browser -> simple data sending (with reloading)
    if (!('FormData' in window) || !('FileReader' in window)) {
        return;
    }


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

        if (canSubmit()) {
            // Collect all data from form
            var data = new FormData(form);

            // Pass data to function which sends AJAX request
            // Second parameter (function) will be called when it will get
            // response from server
            request(data, function(response) {

                response = JSON.parse(response);

                if (response.sent) {
                    $(success).show();
                    setTimeout(function () {
                        $(success).fadeOut('fast');
                    }, 6000);
                    form.reset();
                } else {
                    $(fail).show();
                    setTimeout(function () {
                        $(fail).fadeOut('fast');
                    }, 6000);

                }
            });
        } else {
            showTooltips();
        }

    });

    function showTooltips() {
        [name, email, message].forEach(function (field) {
            switch (field.name) {
                case 'name':
                    validateField({
                        field: name,
                        rule: NAME_REGEX
                    });
                    break;
                case 'email':
                    validateField({
                        field: email,
                        rule: REG_EXP_EMAIL
                    });
                    break;
                case 'message':
                    validateField({
                        field: message,
                        rule: MESSAGE_REGEX
                    });
                    break;
            }
        });
    }
})();
