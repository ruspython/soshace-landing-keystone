// Making logo

(function () {
    'use strict';
    var video = document.querySelector('.intro__video'),
        header = document.querySelector('.main-header');
    var HEADER_HEIGHT = parseInt(window.getComputedStyle(header).height);

    window.onscroll = function () {
        if ((scrollY + HEADER_HEIGHT) < innerHeight) {
            var change = (scrollY / innerHeight);
            video.style.transform = 'translate3d(-960px, ' + (-540 + scrollY / 1.5) + 'px, 0)';
        }
    }

})();