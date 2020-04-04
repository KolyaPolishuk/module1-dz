'use strict'
const ADMIN_PASSWORD = '12345678';
let message;


message = prompt('Введите пароль');
switch (message) {
    case null:
        alert('Отменено пользователем')
        break;

        case ADMIN_PASSWORD:
            alert('Добро пожаловать')
            break;

    default:
        alert('Доступ запрещен, неверный пароль!')
        break;
}