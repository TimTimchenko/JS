"use strict";

var login = prompt('Введите свой логин', '');

if (login == 'Админ') {
  var password = prompt('Введите свой пароль', '');
} else if (login == null) {
  alert('Вход отменён');
} else {
  alert('Я вас не знаю');
}

if (password == 'Чёрный Властелин') {
  alert('Добро пожаловать!');
} else if (password == null) {
  alert('Вход отменён');
} else {
  alert( 'Пароль неверен' );
}