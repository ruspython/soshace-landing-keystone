(function () {
    'use strict';

    var COOKIE_NAME = 'locale',
        THREE_YEARS = 365 * 3;

    var langSelect = document.getElementById('language-select');

    checkLang();

    function checkLang() {
        var lang = getCookie(COOKIE_NAME);

        if (lang === 'en' || lang === 'ru') {
            langSelect.value = lang;
        } else {
            setLang('en');
        }

        if (window.location.pathname.search(/^\/(?!(en|ru))/) === 0) {
            window.history.pushState(lang, '', window.location.pathname.replace(/^\//, "/" + lang + "/"));
        }

        langSelect.onchange = function () {
            var lang = langSelect.value;
            setLang(lang);
            window.location.pathname = '/' + lang;
        }
    }

    function setLang(lang) {
        langSelect.value = lang;
        setCookie(COOKIE_NAME, lang, THREE_YEARS);
    }

    function setCookie(name, value, days) {
        var expires;
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toGMTString();
        }
        else expires = "";
        document.cookie = encodeURIComponent(name) + "=" + encodeURIComponent(value) + expires + "; path=/";
    }

    function getCookie(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }

    function deleteCookie(name) {
        this.set(name, "", -1);
    }

}());
