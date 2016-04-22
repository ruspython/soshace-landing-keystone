// Making logo

(function ($) {
    'use strict';
    var $video = $('.intro__video'),
        $header = $('.main-header'),
        $logo = $('.intro__inner'),
        $intro = $('.intro'),
        $features = $('.features'),
        scrollY = $(window).scrollTop(),
        scrollMax = $(window).height()
        ;
    var HEADER_HEIGHT = parseInt($header.height());

    if (scrollY < scrollMax) {
        $logo.show();
    }

    $(window).on('scroll', function () {
        scrollY = $(window).scrollTop();
        //scrollMax = $(window).height() - $logo.offset().top;

        if (scrollY < scrollMax) {
            $video.css('transform', 'translate3d(-960px, ' + (-540 + scrollY / 4) + 'px, 0)');
            $logo.show();
        } else {
            $logo.hide();
        }
    })
})(jQuery);