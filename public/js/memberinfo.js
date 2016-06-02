// Block for open/close info in team slider
(function() {
  /**
   * Open/close developer info
   */
  function showInfo() {
    var info = this.querySelector('.team__member-info');

    if (info.classList.contains('team__member-info--open')) {
      info.classList.remove('team__member-info--open');
    } else {
      info.classList.add('team__member-info--open');
    }
  }

  /**
   * Redefine listeners because of changing windows width
   */
   function specifyListeners() {
     var slides = document.querySelectorAll('.team__member');

     for (var i = 0; i < slides.length; i++) {
       // Condition only for mobile devices
       if (document.documentElement.clientWidth < 1200) {
         slides[i].removeEventListener('tap', showInfo);
         slides[i].addEventListener('tap', showInfo);
       } else {
         slides[i].removeEventListener('tap', showInfo);
         var infos = document.querySelectorAll('.team__member-info');
         for (var j = 0; j < infos.length; j++) {
           if (infos[j].classList.contains('team__member-info--open')) {
             infos[j].classList.remove('team__member-info--open');
           }
         }
       }
     }
   }

  document.addEventListener('DOMContentLoaded', function() {
    specifyListeners();
    window.onresize = specifyListeners;
  });
})();
