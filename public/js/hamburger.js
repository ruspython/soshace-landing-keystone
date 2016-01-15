"use strict";

(function() {

  // Находим ссылку в которой лежат иконки бургера и крестика
  var link = document.querySelector(".burger-icon");

  // Находим видимую иконку бургера
  var open = document.querySelector(".burger-icon__open");

  //Находим скрытую иконку крестика
  var close = document.querySelector(".burger-icon__close--hidden");

  // Находим верхний блок хедера со всей навигацией
  var wrap = document.querySelector(".main-header__inner");

  // Находим скрытое меню
  var nav = document.querySelector(".main-nav");


  // Отлавливаем событие "клик" на нашей ссылке
  // для открытия меню
  link.addEventListener("click", function(event){

    // Убираем действие по умолчанию
    event.preventDefault();

    // Прячем/показываем иконку бургера
    open.classList.toggle("burger-icon__open--hidden");

    // Показываем/прячем иконку крестика
    close.classList.toggle("burger-icon__close");

    // Меняем/возвращаем оформление верхней полосы навигации
    wrap.classList.toggle("main-header__inner--menu-visible");

    // Показываем/прячем меню
    nav.classList.toggle("main-nav--visible");
  });
})();
