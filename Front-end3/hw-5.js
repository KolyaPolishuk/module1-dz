'use strict'

let cost;
let choise = prompt('Куда оформить доставку?');

switch (key) {
    case Китай:
        cost = 100;
        alert('Доставка в ${choice} будет стоить ${cost} кредитов')
        break;
        case Чили:
            cost = 250;
            alert('Доставка в ${choice} будет стоить ${cost} кредитов')
        break;

        case Австралия:
            cost = 170;
            alert('Доставка в ${choice} будет стоить ${cost} кредитов')
        break;
        case Индия:
            cost = 80;
            alert('Доставка в ${choice} будет стоить ${cost} кредитов')
        break;
        case Ямайка:
            cost = 120;
            alert('Доставка в ${choice} будет стоить ${cost} кредитов')
        break;

    default:
        alert('В вашей стране доставка не доступна')
        break;
}