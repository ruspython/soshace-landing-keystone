// Making logo

(function ($) {
    'use strict';
    var $video = $('.intro__video'),
        $header = $('.main-header'),
        $logo = $('.intro__inner'),
        $intro = $('.intro'),
        $features = $('.features'),
        scrollY = $(window).scrollTop(),
        scrollMax = $(window).height() - $logo.offset().top
        ;
    var HEADER_HEIGHT = parseInt($header.height());

    if ($logo.offset().top < $features.offset().top) {
        $logo.show();
    }

    $(window).on('scroll', function () {
        scrollY = $(window).scrollTop();

        if (scrollY < scrollMax) {
            $video.css('transform', 'translate3d(-960px, ' + (-540 + scrollY / 4) + 'px, 0)');
            $logo.show();
        } else {
            $logo.hide();
        }
    })
})(jQuery);