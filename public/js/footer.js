(function () {
    'use strict';

    var mainFooter = document.querySelector('.main-footer__links');
    var footerLinks = mainFooter.querySelectorAll('a');

    /** Allow to open links in new tab for firefox browser, and chrome on android if target = "_blank" */
    function openLink(event, element) {
        var firefoxBrowser = navigator.userAgent.indexOf("Firefox") != -1;
        var chromeBrowser = navigator.userAgent.indexOf("Chrome") != -1;
        var android = navigator.userAgent.indexOf("Android") != -1;
        if (firefoxBrowser || (chromeBrowser && android)) {
            event.preventDefault();
            var target = element.target || '_self';
            open(element.href, target, 'height='+window.innerheight+',width='+window.innerwidth+'resizable=no');
        }
    }

    [].forEach.call(footerLinks, function(link) {
        link.addEventListener('click', function(event) {
            openLink(event, link);
        });
    });

})();
