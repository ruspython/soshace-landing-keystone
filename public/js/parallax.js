// Making logo

(function ($) {
    'use strict';
    var $video = $('.intro__video'),
        $header = $('.main-header'),
        $logo = $('.intro__inner'),
        scrollY = $(window).scrollTop()
        ;
    var HEADER_HEIGHT = parseInt($header.height());

    if ((scrollY + HEADER_HEIGHT) < innerHeight) {
        $logo.show();
    }

    $(window).on('scroll', function () {
        scrollY = $(window).scrollTop();
        if (scrollY < innerHeight/2) {
            $video.css('transform', 'translate3d(-960px, ' + (-540 + scrollY / 4) + 'px, 0)');
            $logo.show();
        } else {
            $logo.hide();
        }
    })
})(jQuery);