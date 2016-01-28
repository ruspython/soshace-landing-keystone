// Sending data from contact form via ajax

'use strict';

(function() {

  // Если объектов FormData или FileReader нет в браузере,
  // то отправляем форму как обычно
  if (!('FormData' in window) || !('FileReader' in window)) {
    return;
  }

  // Находим форму
  var form = document.querySelector('.contact__form');

  // Отлавливаем событие отправки формы
  form.addEventListener('submit', function(event) {
    event.preventDefault();

    // Получаем все данные формы с помощью
    // объекта FormData
    var data = new FormData(form);

    // Передаем данные в ф-цию (1-ым аргументом),
    // отправляющую AJAX запрос.
    // 2-ым аргументом описываем ф-цию, которая вызовется
    // в тот момент, когда результат с сервера придёт.
    // И выводим его в консоль
    request(data, function(response) {
      console.log(response);
    });
  });

  /**
   * Отправка AJAX запроса
   * @param {Array.<Object>} data
   * @param {function} fn
   */
  function request(data, fn) {
    var xhr = new XMLHttpRequest();
    var time = (new Date()).getTime();

    xhr.open('post', 'http://localhost:3000/message?_ts=' + time);

    xhr.addEventListener('readystatechange', function() {
      if (xhr.readyState == 4) {
        // Передаём в функцию ответ сервера
        fn(xhr.responseText);
      }
    });

    xhr.send(data);
  }
})();
