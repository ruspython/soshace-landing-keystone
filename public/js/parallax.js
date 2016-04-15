// Making logo

(function () {
    'use strict';
    var video = document.querySelector('.intro__video'),
        header = document.querySelector('.main-header'),
        logo = document.querySelector('.intro__inner')
        ;
    var HEADER_HEIGHT = parseInt(window.getComputedStyle(header).height);

    window.onscroll = function () {
        if ((scrollY + HEADER_HEIGHT) < innerHeight) {
            video.style.transform = 'translate3d(-960px, ' + (-540 + scrollY / 4) + 'px, 0)';
            logo.style.display = '';
        } else {
            logo.style.display = 'none';
        }
    }

})();