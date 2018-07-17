# team.soshace.com

#### Сборка и запуск:
1. `npm install`
2. `gulp prod`
3. `npm start`

#### Изменение контента
Информация в моделях обновляется через интерфейс администратора (www.domain.com/keystone), авторизационные данные хранятся в `updates/admin.js`.

#### Настройка отправки почты:
1. В файле `.env` (который должен лежать в корне) необходимо заполнить данные для сервиса отправки:
* `MAIL_SERVICE=value` - сервис
* `MAIL_NO_REPLY=value` - логин/адрес почты с которого будет производится отправка
* `MAIL_NO_REPLY_PASSWORD=value` - пароль
2. Список получателей редактируется в поле `Emails`(несколько адресов перечисляются через пробел) через интерфейс администратора в модели `Company`.

 We are looking forward to meeting you on our website *https://soshace.com*
